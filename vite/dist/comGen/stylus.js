import { readFileSync, existsSync } from "node:fs";
import { join, dirname, resolve } from "node:path";
import stylus from "stylus";
import { transform } from "lightningcss";
import write from "@3-/write";
import { save } from "./svg.js";
import { URL_REGEX } from "./const.js";

export default (styl_path, dest_path, map_dest_path, import_var, com_name) => {
  let content = readFileSync(styl_path, "utf-8");
  const com_dir = dirname(styl_path);
  if (import_var && existsSync(join(com_dir, "var.styl"))) {
    content = '@import "./var.styl"\n' + content;
  }
  const raw_css = stylus(content).set("filename", styl_path).render(),
    rewritten_css = raw_css.replace(URL_REGEX, (match, rel_path) => {
      const svg_path = resolve(com_dir, rel_path);
      if (existsSync(svg_path)) {
        return 'url("' + save(com_name, svg_path, rel_path) + '")';
      }
      console.warn("⚠️ SVG file not found: " + svg_path);
      return match;
    }),
    { code, map } = transform({
      filename: resolve(dest_path),
      code: Buffer.from(rewritten_css),
      minify: true,
      sourceMap: true,
    }),
    css_code = code.toString().replace(/\/\*#\s*sourceMappingURL=.+?\*\//g, "");
  write(dest_path, css_code);
  write(map_dest_path, map.toString());
};
