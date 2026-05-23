<script>
import coms from "../../../gen/com/index.js";
import Svg from "./Svg.svelte";
import Md from "../../lib/Md.svelte";
import Top from "./Top.svelte";

let { name = "", readme, svgs = [] } = $props();

const title = $derived(coms.find(([n]) => n == name)?.[1] || "");
</script>

<template lang="pug">
v-scroll
  b
    article.LG
      Top(name={ name } title={ title })
      Md(readme={ readme })
    Svg(svgs={ svgs })
</template>

<style lang="stylus">
v-scroll
  flex 1
  min-height 0

  &::part(scroll)
    box-sizing border-box
    overflow-x hidden

  > b
    display block
    line-height 1.7
    color #333336
    padding 0
    box-sizing border-box

    article
      border-radius 24px
      padding 24px 32px
      box-sizing border-box

    @media (max-width 767px)
      font-size 14px

      article
        border-radius 16px
        padding 16px 20px
</style>