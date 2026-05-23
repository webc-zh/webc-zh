import { existsSync, readdirSync, rmSync, statSync } from "node:fs";
import { join, resolve } from "node:path";
import { build } from "rolldown";
import write from "@3-/write";
import ROOT from "../const/ROOT.js";
import resolveDeps from "../importmapDeps.js";

const IMPORTMAP_DIR = join(ROOT, "importmap"),
  SUBS = existsSync(IMPORTMAP_DIR)
    ? readdirSync(IMPORTMAP_DIR).filter(
        (dir_name) =>
          !dir_name.startsWith(".") && statSync(join(IMPORTMAP_DIR, dir_name)).isDirectory(),
      )
    : [],
  list = (dir) =>
    existsSync(dir)
      ? readdirSync(dir).filter(
          (file_name) =>
            file_name.endsWith(".js") &&
            !file_name.startsWith(".") &&
            statSync(join(dir, file_name)).isFile(),
        )
      : [];

export const packImportmap = async (dist_dir, sub, collected_files) => {
  if (!collected_files || collected_files.size === 0) return;
  const entry_content = Array.from(collected_files)
      .map((file_name) => 'export * from "./' + sub + "/" + file_name + '";')
      .join("\n"),
    temp_entry = join(IMPORTMAP_DIR, ".temp_" + sub + ".js");

  write(temp_entry, entry_content);
  try {
    await build({
      input: temp_entry,
      resolve: {
        alias: {
          [sub]: join(IMPORTMAP_DIR, sub),
        },
      },
      output: {
        file: join(dist_dir, sub + ".js"),
        format: "esm",
        minify: true,
        sourcemap: "hidden",
      },
    });
  } finally {
    rmSync(temp_entry, { force: true });
  }
};

export default (is_build) => {
  const used_files = new Map();
  let out_dir = "dist";

  return {
    name: "importmap-pack",
    configResolved: (config) => {
      out_dir = config.build.outDir || "dist";
    },
    configureServer: () => {
      SUBS.forEach((sub) => rmSync(join(ROOT, "public", sub + ".js"), { force: true }));
    },
    buildStart: () => {
      used_files.clear();
      SUBS.forEach((sub) => {
        used_files.set(sub, new Set());
        if (!is_build) {
          rmSync(join(ROOT, "public", sub + ".js"), { force: true });
        }
      });
    },
    resolveId: (id) => {
      const parts = id.startsWith("/") ? id.slice(1).split("/") : id.split("/"),
        sub = parts[0];

      if (SUBS.includes(sub)) {
        const name = parts.length > 1 ? parts.slice(1).join("/") : "_.js",
          path = join(IMPORTMAP_DIR, sub, name);

        if (name === "_.js" || (existsSync(path) && statSync(path).isFile())) {
          if (is_build) {
            if (name === "_.js") {
              list(join(IMPORTMAP_DIR, sub)).forEach((file_name) =>
                used_files.get(sub).add(file_name),
              );
            } else {
              used_files.get(sub).add(name);
            }
            return { id: sub, external: true };
          }
          if (name === "_.js") {
            return "\0importmap-bundle-" + sub + ".js";
          }
          return path;
        }
      }
    },
    load: (id) => {
      const match =
        id.startsWith("\0importmap-bundle-") && id.endsWith(".js") ? id.slice(18, -3) : "";
      if (!is_build && match && SUBS.includes(match)) {
        const files = list(join(IMPORTMAP_DIR, match));
        return {
          code: files
            .map((file_name) => 'export * from "/importmap/' + match + "/" + file_name + '";')
            .join("\n"),
        };
      }
    },
    generateBundle: async () => {
      if (!is_build) return;

      await Promise.all(
        SUBS.map(async (sub) => {
          const sub_used = used_files.get(sub);
          if (sub_used && sub_used.size > 0) {
            const all_used = new Set(sub_used),
              out_path = resolve(ROOT, out_dir);
            for (const file of sub_used) {
              resolveDeps(sub, file, all_used);
            }
            await packImportmap(out_path, sub, all_used);
          }
        }),
      );
    },
  };
};
