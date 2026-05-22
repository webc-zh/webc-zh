<script>
import { onMount } from "svelte";
import { goto, nowUrl } from "x/route.js";
import { delayRoute } from "x/delayRoute.js";
import coms from "../../gen/com/index.js";
import Md from "../Index/Md/Md.svelte";
import Aside from "../Index/Aside.svelte";
import Preview from "../Index/Preview/Preview.svelte";

let active_index = $state(-1),
  active_readme = $state(""),
  active_demo = $state.raw(null),
  active_svgs = $state.raw([]),
  active_files = $state.raw([]),
  aside_open = $state(false),
  loading = $state(false);

const active_comp_info = $derived(coms[active_index]),
  toggleAside = () => {
    aside_open = !aside_open;
  },
  load = async (index) => {
    active_index = index;
    aside_open = false;
    const info = coms[index];
    if (info) {
      loading = true;
      const [name, title, load_func] = info,
        m = await load_func(),
        [readme, demo_func, svgs, files] = m.default;

      active_readme = readme;
      active_svgs = svgs || [];
      active_files = files || [];
      if (demo_func) {
        const demo_mod = await demo_func();
        active_demo = demo_mod.default;
      } else {
        active_demo = null;
      }
      loading = false;
    } else {
      active_readme = "";
      active_demo = null;
      active_svgs = [];
      active_files = [];
    }
  };

onMount(() => {
  return delayRoute(() => {
    const url = nowUrl();
    if (!url) {
      if (coms.length > 0) {
        goto(coms[0][0]);
      }
      return;
    }
    const index = coms.findIndex(([name]) => name.toLowerCase() == url.toLowerCase());
    load(index);
  });
});
</script>

<template lang="pug">
main
  +if !aside_open
    button.menu-toggle(aria-label="菜单" onclick!={ toggleAside })
      b
      b
      b
  +if aside_open
    button.overlay(aria-label="关闭" onclick!={ toggleAside })
  section
    +if active_comp_info
      b
        +if loading
          b.wait
          +else
            Md(
              name={ active_comp_info[0] }
              readme={ active_readme }
              svgs={ active_svgs }
            )

            b.right
              Preview(
                name={ active_comp_info[0] }
                active_demo={ active_demo }
                files={ active_files }
              )
      +else
        article.LG
          h2 请选择一个组件查看文档

  Aside(
    bind:active_index={ active_index }
    bind:aside_open={ aside_open }
    class!={ aside_open ? 'show' : '' }
  )
</template>

<style lang="stylus">
main
  display flex
  height 100dvh
  width 100vw
  background url('/svg/bg.svg') no-repeat center / cover
  color #1d1d1f
  font-family -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif
  overflow hidden
  padding var(--gap)
  gap var(--gap)
  box-sizing border-box
  position relative

.menu-toggle
  display none

  @media (max-width 767px)
    display flex
    flex-direction column
    gap 4px
    position absolute
    top 36px
    right 32px
    z-index 102
    width 36px
    height 36px
    align-items center
    justify-content center
    border-radius 50%
    border 0
    background transparent
    cursor pointer
    transition all 0.3s ease
    padding 0

    &:hover
      background #00000008

    > b
      width 18px
      height 2px
      background #1d1d1f
      border-radius 1px
      transition all 0.3s ease

.overlay
  display none

  @media (max-width 767px)
    display block
    position fixed
    inset 0
    z-index 99
    background #00000033
    backdrop-filter blur(4px)
    animation fadeIn 0.25s ease

section
  flex 1
  display flex
  flex-direction column
  overflow hidden

  > b
    flex 1
    display flex
    gap var(--gap)
    overflow hidden

    .right
      display flex
      flex-direction column
      flex 1
      min-width 0
      gap var(--gap)
      padding 0
      box-sizing border-box

    .wait
      margin auto

  > article
    flex 1
    display flex
    align-items center
    justify-content center
    color #86868b
    border-radius 24px

  @media (max-width 999px)
    > b
      flex-direction column
      gap var(--gap)

      .right
        gap var(--gap)
        padding 0

  @media (max-width 767px)
    > article
      border-radius 16px

@keyframes fadeIn
  from
    opacity 0

  to
    opacity 1
</style>