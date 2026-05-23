<script>
import { onMount } from "svelte";
import cdn from "../../../conf/cdn.npm.js";
import cdn_pkg from "../../../conf/npm/CDN_PKG.js";
import cli from "../../../conf/npm/CLI.js";
import ver from "../../../conf/ver/webc.site.js";
import Copy from "../../lib/Copy.svelte";
import Fiddle from "./Fiddle.svelte";
import Tab from "./Tab.svelte";

let { name, files = [] } = $props();

const MODE_DIRECT = 0,
  MODE_BUILD = 1,
  cdn_keys = Object.keys(cdn),
  cli_runners = ["bunx", "npx", "pnpm dlx", "yarn dlx"],
  IMPORT_MODE = "import_mode",
  CDN = "cdn",
  CLI_RUNNER = "cli_runner";

let active_cdn = $state(cdn_keys[0]),
  active_runner = $state(cli_runners[0]),
  mode = $state(MODE_DIRECT);

const onChange = (new_mode, value) => {
  localStorage.setItem(IMPORT_MODE, new_mode);
  if (new_mode == MODE_DIRECT) {
    localStorage.setItem(CDN, value);
  } else if (new_mode == MODE_BUILD) {
    localStorage.setItem(CLI_RUNNER, value);
  }
};

onMount(() => {
  const stored_mode = localStorage.getItem(IMPORT_MODE);
  if (stored_mode != null) {
    const val = Number(stored_mode);
    if ([MODE_DIRECT, MODE_BUILD].includes(val)) {
      mode = val;
    }
  }

  const stored_cdn = localStorage.getItem(CDN);
  if (stored_cdn && cdn_keys.includes(stored_cdn)) {
    active_cdn = stored_cdn;
  }

  const stored_runner = localStorage.getItem(CLI_RUNNER);
  if (stored_runner && cli_runners.includes(stored_runner)) {
    active_runner = stored_runner;
  }
});

const urls_text = $derived(
    files
      .map((file) => {
        const url = cdn[active_cdn](cdn_pkg, ver) + "/" + file;
        if (file.endsWith(".css")) {
          return '<link href="' + url + '" rel="stylesheet">';
        }
        if (file.endsWith(".js")) {
          return '<script type="module">import "' + url + '"</' + "script>";
        }
        return url;
      })
      .join("\n"),
  ),
  cli_text = $derived(active_runner + " " + cli + "@latest " + name);
</script>

<template lang="pug">
+if files.length > 0
  article.LG
    h2
      b
        Tab(
          bind:active={ mode }
          bind:cdn={ active_cdn }
          cdn_keys={ cdn_keys }
          bind:runner={ active_runner }
          runner_keys={ cli_runners }
          onChange!={ onChange }
        )
        +if mode == MODE_DIRECT
          Copy(text={ urls_text })
          +else
            Copy(text={ cli_text })
      Fiddle(name={ name } urls_text={ urls_text })
    b
      +if mode == MODE_DIRECT
        pre {urls_text}
        +else
          pre {cli_text}
</template>

<style lang="stylus">
article
  position relative
  z-index 2
  border-radius 24px
  padding 24px 32px
  box-sizing border-box
  line-height normal
  width 100%

  h2
    font-size 15px
    font-weight 600
    color #1d1d1f
    margin 0 0 16px
    display flex
    align-items center
    justify-content space-between

    > b
      display flex
      align-items center
      gap 12px

  b
    display flex
    align-items flex-start
    gap 16px

    pre
      flex 1
      min-width 0
      margin 0
      overflow-x auto
      font-family source-code-pro, Menlo, Monaco, Consolas, monospace
      font-size 13px
      color #1d1d1f
      white-space pre-wrap
      word-break break-all
      line-height 1.5

  @media (max-width 767px)
    border-radius 16px
    padding 16px 20px

    h2
      font-size 13px
      margin-bottom 12px
      flex-direction column
      align-items flex-start
      gap 12px

      > b
        width 100%
        justify-content flex-start
        flex-wrap wrap
        gap 8px

    b
      gap 12px

      pre
        font-size 11px
</style>