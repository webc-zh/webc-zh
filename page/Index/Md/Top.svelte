<script>
import Github from "./Github.svelte";
let { name = "", title = "" } = $props();
</script>

<template lang="pug">
+if name
  b
    h1
      | {name}
      +if title
        b {title}
    Github(name={ name })
</template>

<style lang="stylus">
b
  display flex
  align-items center
  justify-content space-between
  gap 16px
  margin 0 0 var(--gap)

h1
  display flex
  align-items baseline
  gap 12px
  font-size 28px
  font-weight 700
  color #1d1d1f
  line-height 1.2
  margin 0

  b
    font-size 16px
    font-weight 400
    color #86868b

  @media (max-width 767px)
    font-size 22px

    b
      font-size 13px
</style>