import { existsSync, readdirSync, statSync, mkdirSync } from "node:fs";
import { dirname, join, relative, extname } from "node:path";
import read from "@3-/read";
import stylus from "stylus";
import { LIB_DIR, write, copy, findXDeps, toUnixRel } from "./util.js";
import { rewriteImports, copyAndResolveX } from "./xResolve.js";

const processDir = (
  src_dir,
  dest_dir,
  cache_dir,
  imports,
  processed_x,
  canonical_name,
  comp_src_dir,
) => {
  if (!existsSync(src_dir)) return;
  readdirSync(src_dir).forEach((entry) => {
    const src_path = join(src_dir, entry),
      dest_path = join(dest_dir, entry),
      stat = statSync(src_path);

    if (stat.isDirectory()) {
      processDir(
        src_path,
        dest_path,
        cache_dir,
        imports,
        processed_x,
        canonical_name,
        comp_src_dir,
      );
    } else {
      const ext = extname(entry).toLowerCase();
      if ([".styl", ".js", ".svg"].includes(ext)) {
        if (ext === ".svg") {
          const rel_svg = relative(comp_src_dir, src_path),
            dest_svg = join(process.cwd(), "public", "svg", canonical_name, rel_svg);
          mkdirSync(dirname(dest_svg), { recursive: true });
          copy(src_path, dest_svg);
        } else {
          mkdirSync(dirname(dest_path), { recursive: true });
          if (ext === ".styl") {
            const content = read(src_path),
              stylus_css = stylus(content).set("filename", src_path).render(),
              dest_css_path = dest_path.slice(0, -ext.length) + ".css",
              css = stylus_css.replace(
                /url\((['"]?)\.\/([^'")]+\.svg)\1\)/g,
                (match, quote, rel_svg) => {
                  const abs_svg_path = join(dirname(src_path), rel_svg),
                    rel_svg_from_comp = toUnixRel(comp_src_dir, abs_svg_path);
                  return (
                    "url(" +
                    quote +
                    "/svg/" +
                    canonical_name +
                    "/" +
                    rel_svg_from_comp +
                    quote +
                    ")"
                  );
                },
              );
            write(dest_css_path, css);
            imports.push("./" + toUnixRel(LIB_DIR, dest_css_path));
          } else if (ext === ".js") {
            const content = read(src_path);
            findXDeps(content).forEach((dep) => copyAndResolveX(dep, cache_dir, processed_x));
            write(dest_path, rewriteImports(content, dest_path));
            imports.push("./" + toUnixRel(LIB_DIR, dest_path));
          }
        }
      }
    }
  });
};

export default processDir;
