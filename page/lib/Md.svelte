<script>
import { default_renderer, parser, parser_write, parser_end } from "streaming-markdown";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import "prismjs/components/prism-pug.js";
import "prismjs/components/prism-stylus.js";

// Map svelte to markup (html) for highlighting templates/scripts/styles
Prism.languages.svelte = Prism.languages.markup;

let { readme } = $props(),
  element = $state(null);

$effect(() => {
  if (element && readme) {
    element.innerHTML = "";
    const renderer = default_renderer(element),
      p = parser(renderer);
    parser_write(p, readme);
    parser_end(p);

    element.querySelectorAll("pre code").forEach((el) => {
      const classes_to_add = [];
      el.classList.forEach((cls) => {
        if (!cls.startsWith("language-") && !cls.startsWith("lang-")) {
          classes_to_add.push("language-" + cls);
        }
      });
      classes_to_add.forEach((cls) => {
        el.classList.add(cls);
        if (el.parentElement && el.parentElement.tagName == "PRE") {
          el.parentElement.classList.add(cls);
        }
      });
      Prism.highlightElement(el);
    });
  }
});
</script>

<template lang="pug">
b(bind:this={ element })
</template>

<style lang="stylus">
b
  display block

  :global(h1), :global(h2), :global(h3), :global(h4)
    color #1d1d1f
    font-weight 600
    margin-top 24px
    margin-bottom 16px

  :global(h1)
    font-size 26px

  :global(h2)
    font-size 20px

  :global(h3)
    font-size 16px

  :global(p)
    margin-bottom 16px

  :global(ul)
    margin-bottom 16px
    padding-left 20px
    list-style-type disc

    :global(li)
      margin-bottom 6px

  :global(code)
    font-family source-code-pro, Menlo, Monaco, Consolas, monospace
    font-size 13px
    padding 2px 6px
    border-radius 4px
    color #0071e3
    border 1px solid #0071e31f
    background transparent

  :global(pre)
    border 1px solid #0000000d
    border-radius 12px
    padding 16px
    overflow-x auto
    margin-bottom 20px
    margin-top 12px
    background transparent

    :global(code)
      background transparent
      border 0
      padding 0
      border-radius 0
      color #1d1d1f

  :global(pre[class*='language-']), :global(code[class*='language-']), :global(:not(pre) > code[class*='language-'])
    background transparent

  :global(a)
    color #0071e3
    text-decoration none
    border-bottom 1px solid #0071e333
    transition all 0.25s ease

    &:hover
      color #0077ed
      border-bottom-color #0077ed

  @media (max-width 767px)
    :global(h1)
      font-size 20px

    :global(h2)
      font-size 17px

    :global(pre)
      padding 12px
      border-radius 8px
      font-size 12px
</style>