import { existsSync, mkdirSync, writeFileSync, renameSync, rmSync } from "node:fs";
import { join, dirname } from "node:path";
import { homedir, tmpdir } from "node:os";
import { x } from "tar";
import NAME from "./const/NAME.js";

export const cache = (version) => {
    const home = homedir(),
      base =
        process.platform === "win32"
          ? process.env.LOCALAPPDATA || join(home, "AppData", "Local")
          : join(home, ".cache");
    return join(base, NAME, version);
  },
  download = async (url, dir) => {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error("Failed to download tarball: " + res.statusText);
    }
    const bin = new Uint8Array(await res.arrayBuffer()),
      tmp = tmpdir(),
      now = Date.now(),
      tgz = join(tmp, "webc-tarball-" + now + ".tgz"),
      ext = join(tmp, "webc-extract-" + now);

    writeFileSync(tgz, bin);
    mkdirSync(ext, { recursive: true });
    try {
      await x({ file: tgz, cwd: ext });
      const pkg = join(ext, "package");
      if (!existsSync(pkg)) {
        throw new Error("Extracted package directory not found");
      }
      mkdirSync(dirname(dir), { recursive: true });
      renameSync(pkg, dir);
    } finally {
      rmSync(tgz, { force: true });
      rmSync(ext, { recursive: true, force: true });
    }
  };
