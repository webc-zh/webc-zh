import { readFileSync, existsSync } from "node:fs";
import { join, resolve } from "node:path";
import { createHash } from "node:crypto";
import write from "@3-/write";
import { LIB_DIR } from "./const.js";

export const save = (svg_path) => {
    const content = readFileSync(svg_path),
      hash = createHash("md5").update(content).digest("base64url");
    write(join(LIB_DIR, "svg", hash + ".svg"), content);
    return hash;
  },
  extract = (com_path) => {
    const var_path = join(com_path, "var.styl"),
      svgs = [];
    if (existsSync(var_path)) {
      const var_content = readFileSync(var_path, "utf-8"),
        var_lines = var_content.split("\n"),
        var_line_re = /^\s*(--\w+Svg)\s+(.+)$/;
      for (const line of var_lines) {
        const match = var_line_re.exec(line);
        if (!match) {
          continue;
        }
        const [, name, value] = match,
          url_match = /url\(\s*['"]?([^'")]+?\.svg)['"]?\s*\)/.exec(value);
        if (!url_match) {
          continue;
        }
        const [, raw_path] = url_match,
          rel_path = raw_path.startsWith("./") ? raw_path.slice(2) : raw_path,
          svg_abs_path = resolve(com_path, rel_path);
        if (existsSync(svg_abs_path)) {
          svgs.push([name, save(svg_abs_path), rel_path]);
        }
      }
    }
    return svgs;
  };
