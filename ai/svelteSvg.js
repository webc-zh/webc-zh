#!/usr/bin/env bun

import { dirname, join } from "node:path";
import aiInit from "~/ai/lib/ai.js";
import gitLs from "~/ai/lib/gitLs.js";
import extractSvg from "~/ai/lib/svelteSvg/extract.js";

const ROOT = dirname(import.meta.dirname),
  SVG_DIR = join(ROOT, "public", "svg");

const main = async () => {
  const svelte_files = await gitLs("svelte");

  if (svelte_files.length === 0) {
    console.log("未发现以 .svelte 结尾的文件。");
    return;
  }

  await using ai = await aiInit("提取 SVG");
  for (const file of svelte_files) {
    await extractSvg(ai, join(ROOT, file), SVG_DIR);
  }
};

export default main;

if (import.meta.main) {
  await main();
}
