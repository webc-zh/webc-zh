import { execSync } from "node:child_process";
import svgMinify from "../../vite/svgMinify.js";

export const DATA_URI_REGEX = /data:image\/svg\+xml,([^"')\s\\]+)/g,
  SVG_TAG_REGEX = /<svg\b[^>]*>[\s\S]*?<\/svg>/g,
  stagedFiles = () => {
    try {
      return execSync("git diff --cached --name-only --diff-filter=ACM", { encoding: "utf8" })
        .trim()
        .split("\n")
        .filter(Boolean);
    } catch {
      return [];
    }
  },
  minifySvgContent = svgMinify;
