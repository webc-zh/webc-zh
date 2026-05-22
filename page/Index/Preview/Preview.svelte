<script>
import Import from "./Import.svelte";

let { name, active_demo, files = [] } = $props();
</script>

<template lang="pug">
+if active_demo
  +const DemoComponent = active_demo
  Import(name={ name } files={ files })
  article.LG
    v-scroll
      b
        DemoComponent
  +else
    article.LG
      b
</template>

<style lang="stylus">
article
  flex 1
  display flex
  flex-direction column
  overflow hidden
  border-radius 24px
  min-width 0

  > b
    margin auto

  v-scroll
    flex 1
    min-height 0

    &::part(scroll)
      mask-image linear-gradient(to bottom, transparent 0, #000 var(--gap))
      box-sizing border-box

    > b
      display flex
      flex-direction column
      align-items center
      justify-content center
      min-height 100%
      gap var(--gap)
      padding 32px
      box-sizing border-box

  @media (max-width 767px)
    border-radius 16px

    v-scroll > b
      padding 20px 16px
</style>