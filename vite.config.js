import { existsSync, cpSync } from "node:fs";
import { join } from "node:path";
import { defineConfig } from "vite";
import buildCom from "./com.js";
import ENTRIES from "./vite/const/ENTRIES.js";
import plugins from "./vite/plugins.js";

const ROOT = import.meta.dirname;

export default defineConfig(async (cfg) => {
  const { command } = cfg,
    is_build = command == "build";

  await buildCom();

  return {
    base: "./",
    resolve: {
      alias: {
        "~/": ROOT,
      },
    },
    server: {
      port: 5180,
    },
    plugins: [
      {
        name: "spa-history-fallback",
        configureServer: (server) => {
          server.middlewares.use((req, res, next) => {
            const [url, query] = req.url.split("?");
            if (
              req.method == "GET" &&
              url != "/" &&
              !url.includes(".") &&
              req.headers.accept?.includes("text/html")
            ) {
              req.url = "/Index.html" + (query ? "?" + query : "");
            }
            next();
          });
        },
      },
      {
        name: "copy-lib-svg",
        closeBundle: () => {
          const src = join(ROOT, "lib/svg"),
            dest = join(ROOT, "dist/lib/svg");
          if (existsSync(src)) {
            cpSync(src, dest, { recursive: true });
          }
        },
      },
      ...plugins(is_build),
    ],
    build: {
      minify: false,
      cssMinify: "lightningcss",
      rollupOptions: {
        input: Object.keys(ENTRIES),
      },
    },
  };
});
