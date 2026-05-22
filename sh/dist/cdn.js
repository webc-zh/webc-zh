#!/usr/bin/env bun

import { cpSync } from "node:fs";
import { join } from "node:path";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import CDN_PKG from "../../conf/npm/CDN_PKG.js";
import com from "../../com.js";
import { packImportmap } from "../../vite/dist/importmapPack.js";
import resolveDeps from "../../vite/importmapDeps.js";
import refactor from "../../vite/dist/refactor.js";
import { ROOT, writePkg, load, initDir } from "./dist.js";

const { ver } = yargs(hideBin(process.argv)).argv,
  DIST = join(ROOT, "dist", CDN_PKG),
  LIB_DIR = join(ROOT, "lib"),
  initDist = async () => {
    await com();
    initDir(DIST);
    cpSync(LIB_DIR, DIST, { recursive: true });
  },
  main = async () => {
    const version = await load(CDN_PKG, import.meta.filename, ver),
      collected_x_files = new Set();

    await initDist();
    refactor(DIST, "x", collected_x_files);
    const all_used = new Set(collected_x_files);
    for (const file of collected_x_files) {
      resolveDeps("x", file, all_used);
    }
    await packImportmap(DIST, "x", all_used);
    writePkg(CDN_PKG, DIST, version);
  };

export default main;

if (import.meta.main) {
  await main();
}
