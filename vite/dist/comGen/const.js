import { join } from "node:path";

export const ROOT = join(import.meta.dirname, "../../.."),
  COM_DIR = join(ROOT, "com"),
  LIB_DIR = join(ROOT, "lib"),
  GEN_DIR = join(ROOT, "gen"),
  URL_REGEX = /url\(\s*['"]?([^'"/):][^'")]*?\.svg)['"]?\s*\)/g;
