#!/usr/bin/env bun

import {
  existsSync,
  mkdirSync,
  cpSync,
  statSync,
  symlinkSync,
  rmSync,
  readdirSync,
  realpathSync,
} from "node:fs";
import { join, resolve, basename, relative } from "node:path";
import stylus from "stylus";
import { transform } from "lightningcss";
import pug from "pug";
import read from "@3-/read";
import write from "@3-/write";
import pug_conf from "../conf/pug.js";
import buildLib from "../com.js";
import ROOT from "../vite/const/ROOT.js";

const args = process.argv.slice(2),
  raw_path = args.find((x) => !x.startsWith("-"));

if (!raw_path) {
  console.error("Please provide a component name or folder path");
  process.exit(1);
}

const input_path =
    raw_path.startsWith("com/") || raw_path.startsWith("./com/") ? raw_path : join("com", raw_path),
  absolute_path = resolve(ROOT, input_path),
  name = basename(absolute_path),
  demo_dir = join(absolute_path, "demo"),
  port_idx = args.indexOf("--port"),
  port = port_idx !== -1 && args[port_idx + 1] ? parseInt(args[port_idx + 1], 10) : 1900;

if (!existsSync(absolute_path) || !statSync(absolute_path).isDirectory()) {
  console.error("Invalid folder path: " + input_path);
  process.exit(1);
}

const js_path = join(demo_dir, "_.js"),
  htm_path = join(demo_dir, "_.htm"),
  css_path = join(demo_dir, "_.css");

if (!existsSync(js_path) || !existsSync(htm_path) || !existsSync(css_path)) {
  console.error("Demo files not found. Make sure _.js, _.htm, and _.css exist in " + demo_dir);
  process.exit(1);
}

console.log("Calling com.js to build lib...");
await buildLib();

const dist_dir = join(ROOT, "dist/demo", name),
  lib_js = join(ROOT, "lib", name + ".js"),
  lib_css = join(ROOT, "lib", name + ".css"),
  lib_svg_dir = join(ROOT, "lib/svg"),
  cpFile = (src, dest_dir) => {
    if (existsSync(src)) {
      const file_name = basename(src);
      cpSync(src, join(dest_dir, file_name));
      const map = src + ".map";
      if (existsSync(map)) {
        cpSync(map, join(dest_dir, file_name + ".map"));
      }
      return true;
    }
    return false;
  };

mkdirSync(dist_dir, { recursive: true });

// Copy component files
const has_js = cpFile(lib_js, dist_dir),
  has_css = cpFile(lib_css, dist_dir);

if (existsSync(lib_svg_dir)) {
  cpSync(lib_svg_dir, join(dist_dir, "svg"), { recursive: true });
}

// Compile stylus theme and output to dist/demo/ComponentName/_.css
const styl_dir = join(ROOT, "styl"),
  out_theme_css = join(dist_dir, "_.css");
if (existsSync(styl_dir)) {
  const files = readdirSync(styl_dir)
      .filter((file) => file.endsWith(".styl"))
      .sort(),
    css_raw = files
      .map((file) => {
        const file_path = join(styl_dir, file),
          real_path = realpathSync(file_path),
          content = read(real_path);
        return stylus(content).set("filename", real_path).render();
      })
      .join("\n"),
    { code } = transform({
      filename: "_.css",
      code: Buffer.from(css_raw),
      minify: true,
      sourceMap: false,
    }),
    css = code.toString();
  write(out_theme_css, css);
}

// Symlink importmap/x to dist/demo/ComponentName/x
const target_link = join(dist_dir, "x"),
  source_dir = join(ROOT, "importmap/x"),
  rel_path = relative(dist_dir, source_dir);
if (existsSync(target_link)) {
  rmSync(target_link, { recursive: true, force: true });
}
symlinkSync(rel_path, target_link, "dir");

const demo_js = read(js_path),
  demo_htm = read(htm_path),
  demo_css = read(css_path),
  compile_fn = pug.compileFile(join(ROOT, "pug/demo.pug"), {
    basedir: ROOT,
  }),
  html_content = compile_fn({
    ...pug_conf,
    title: name + " - Demo",
    theme: "./_.css",
    importmap: {
      "x/": "./x/",
    },
    css_link_href: has_css ? name + ".css" : "",
    js_script_href: has_js ? name + ".js" : "",
    demo_css,
    demo_htm,
    demo_js,
  }),
  dest_html_path = join(dist_dir, "index.html"),
  is_interactive =
    process.stdout.isTTY || args.some((x) => ["-o", "--open", "-i", "--interactive"].includes(x));

write(dest_html_path, html_content);
console.log("Successfully built demo to " + dest_html_path);

if (is_interactive) {
  Bun.serve({
    port,
    hostname: "127.0.0.1",
    fetch(req) {
      const url = new URL(req.url);
      let pathname = url.pathname;
      if (pathname === "/") {
        pathname = "/index.html";
      }
      const file_path = join(dist_dir, pathname);
      if (file_path.startsWith(dist_dir) && existsSync(file_path) && statSync(file_path).isFile()) {
        return new Response(Bun.file(file_path));
      }
      return new Response("Not Found", { status: 404 });
    },
  });
  console.log("Server running at http://127.0.0.1:" + port + "/");
}
