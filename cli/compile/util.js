import { writeFileSync, copyFileSync } from "node:fs";
import { join, relative } from "node:path";

export const LIB_DIR = join(process.cwd(), "lib"),
  logRel = (file_path) => console.log(relative(process.cwd(), file_path)),
  write = (file_path, content) => {
    writeFileSync(file_path, content);
    logRel(file_path);
  },
  copy = (src, dest) => {
    copyFileSync(src, dest);
    logRel(dest);
  },
  toUnixRel = (from, to) => relative(from, to).replaceAll("\\", "/"),
  findXDeps = (content) => [...content.matchAll(/(['"])(x\/[^'"]+)\1/g)].map((m) => m[2].slice(2));
