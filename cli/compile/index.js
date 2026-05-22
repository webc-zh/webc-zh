import { existsSync } from "node:fs";
import { join } from "node:path";
import read from "@3-/read";
import { LIB_DIR, write } from "./util.js";
import processDir from "./process.js";

export default (dir, canonical_name) => {
  const pkg_path = join(dir, "package.json"),
    pkg = existsSync(pkg_path) ? JSON.parse(read(pkg_path)) : {},
    header =
      pkg.name && pkg.version
        ? "// " + pkg.name + "@" + pkg.version + (pkg.homepage ? " " + pkg.homepage : "") + "\n\n"
        : "",
    imports = [],
    processed_x = new Set(),
    comp_src_dir = join(dir, canonical_name);

  processDir(
    comp_src_dir,
    join(LIB_DIR, canonical_name),
    dir,
    imports,
    processed_x,
    canonical_name,
    comp_src_dir,
  );

  const filterSort = (ext) => imports.filter((x) => x.endsWith(ext)).sort(),
    import_content =
      header +
      [...filterSort(".js"), ...filterSort(".css")].map((x) => 'import "' + x + '";').join("\n") +
      "\n";
  write(join(LIB_DIR, canonical_name + ".js"), import_content);
};
