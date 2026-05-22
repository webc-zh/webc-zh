import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { homedir } from "node:os";
import read from "@3-/read";
import NAME from "./const/NAME.js";

const REGISTRY = "https://registry.npmjs.org/",
  home = homedir(),
  base =
    process.platform === "win32"
      ? process.env.LOCALAPPDATA || join(home, "AppData", "Local")
      : join(home, ".cache"),
  cache_dir = join(base, NAME),
  ver_json_path = join(cache_dir, "ver.json"),
  npmrc = (path) =>
    existsSync(path)
      ? read(path)
          .match(/^\s*registry\s*=\s*(.+)$/m)?.[1]
          ?.trim()
      : undefined,
  registries = () => {
    let custom = process.env.npm_config_registry;
    if (!custom) {
      let dir = process.cwd();
      while (dir && !custom) {
        custom = npmrc(join(dir, ".npmrc"));
        const parent = dirname(dir);
        if (parent === dir) break;
        dir = parent;
      }
      if (!custom) {
        custom = npmrc(join(home, ".npmrc"));
      }
    }
    const list = custom ? [custom.endsWith("/") ? custom : custom + "/"] : [];
    if (!list.includes(REGISTRY)) {
      list.push(REGISTRY);
    }
    return list;
  };

export default async () => {
  let cache;
  if (existsSync(ver_json_path)) {
    try {
      cache = JSON.parse(read(ver_json_path));
    } catch {}
  }

  const { version: cached_version, url: cached_url, time } = cache || {};
  if (cached_version && cached_url && Date.now() - time < 3600000) {
    return [cached_version, cached_url];
  }

  for (const registry of registries()) {
    try {
      const res = await fetch(registry + NAME + "/latest");
      if (res.ok) {
        const { version, dist: { tarball: url } = {} } = await res.json();
        if (version && url) {
          try {
            mkdirSync(cache_dir, { recursive: true });
            writeFileSync(ver_json_path, JSON.stringify({ version, url, time: Date.now() }));
          } catch {}
          return [version, url];
        }
      }
    } catch {}
  }

  if (cached_version && cached_url) {
    return [cached_version, cached_url];
  }
};
