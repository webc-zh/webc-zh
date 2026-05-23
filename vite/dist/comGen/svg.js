import { readFileSync, existsSync } from "node:fs";
import { join, resolve, basename } from "node:path";
import write from "@3-/write";
import { ROOT } from "./const.js";

export const save = (com_name, svg_path, rel_path) => {
    const clean_rel_path = rel_path.startsWith("./") ? rel_path.slice(2) : rel_path,
      content = readFileSync(svg_path);
    write(join(ROOT, "public/com", com_name, clean_rel_path), content);
    return "/com/" + com_name + "/" + clean_rel_path;
  },
  extract = (com_path) => {
    const com_name = basename(com_path),
      var_path = join(com_path, "var.styl"),
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
          svgs.push([name, save(com_name, svg_abs_path, rel_path), rel_path]);
        }
      }
    }
    return svgs;
  };
