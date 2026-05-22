#!/usr/bin/env bun

import { readdirSync, existsSync, statSync, rmSync } from "node:fs";
import { join } from "node:path";
import read from "@3-/read";
import write from "@3-/write";
import { COM_DIR, LIB_DIR, GEN_DIR } from "./vite/dist/comGen/const.js";
import jsMinify from "./vite/dist/comGen/jsMinify.js";
import build from "./vite/dist/comGen.js";

const comList = () => {
    if (!existsSync(COM_DIR)) {
      return [];
    }
    return readdirSync(COM_DIR).filter(
      (file) => statSync(join(COM_DIR, file)).isDirectory() && !file.startsWith("."),
    );
  },
  main = async () => {
    for (const dir of [LIB_DIR, GEN_DIR]) {
      if (existsSync(dir)) {
        rmSync(dir, { recursive: true, force: true });
      }
    }

    const coms = comList(),
      results = await Promise.all(coms.map(build)),
      coms_metadata = results.filter(Boolean),
      index_js = [
        "export default [",
        coms_metadata
          .map(
            ([name, title, import_str]) =>
              "  [" + JSON.stringify(name) + ", " + JSON.stringify(title) + ", " + import_str + "]",
          )
          .join(",\n"),
        "];",
      ].join("\n");
    write(join(GEN_DIR, "com", "index.js"), jsMinify(index_js));

    const demo_list = [];
    for (const name of coms) {
      const demo_dir = join(COM_DIR, name, "demo"),
        js_path = join(demo_dir, "_.js"),
        htm_path = join(demo_dir, "_.htm"),
        css_path = join(demo_dir, "_.css");
      if (existsSync(js_path) && existsSync(htm_path) && existsSync(css_path)) {
        const js_content = read(js_path),
          htm_content = read(htm_path),
          css_content = read(css_path);
        demo_list.push(
          "  [" +
            JSON.stringify(name) +
            ", [" +
            JSON.stringify(htm_content) +
            ", " +
            JSON.stringify(js_content) +
            ", " +
            JSON.stringify(css_content) +
            "]]",
        );
      }
    }
    const demo_index_js = ["export default [", demo_list.join(",\n"), "];"].join("\n");
    write(join(GEN_DIR, "com", "demo", "index.js"), jsMinify(demo_index_js));
  };

export default main;

if (import.meta.main) {
  await main();
}
