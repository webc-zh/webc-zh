<script>
import demos from "../../../gen/com/demo/index.js";
import coms from "../../../gen/com/index.js";
import CDN_PKG from "../../../conf/npm/CDN_PKG.js";
import Menu from "./Menu.svelte";

let { name, urls_text } = $props();

let open = $state(false),
  container_el = $state();

const toggleDropdown = (e) => {
    e.stopPropagation();
    open = !open;
  },
  handleWindowClick = (e) => {
    if (open && container_el && !container_el.contains(e.target)) {
      open = false;
    }
  },
  getDemoData = () => {
    const match = demos.find(([n]) => n == name);
    if (!match) {
      return;
    }
    const [_, [htm, js, css]] = match,
      com = coms.find(([n]) => n == name),
      desc = com ? com[1] : "",
      html_field = urls_text + "\n" + htm;
    return {
      html: html_field,
      js: js,
      css: css,
      title: name + " - " + CDN_PKG,
      description: desc,
    };
  },
  postForm = (action, data) => {
    const form = document.createElement("form");
    form.method = "POST";
    form.action = action;
    form.target = "_blank";

    for (const [key, val] of Object.entries(data)) {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = key;
      input.value = val;
      form.appendChild(input);
    }

    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);
  },
  clickOption = (type) => {
    open = false;
    const fields = getDemoData();
    if (!fields) {
      return;
    }
    const action_map = {
      jsfiddle: () => postForm("https://jsfiddle.net/api/post/library/pure/", fields),
      codepen: () => postForm("https://codepen.io/pen/define/", { data: JSON.stringify(fields) }),
    };
    action_map[type]?.();
  };
</script>

<svelte:window onclick={handleWindowClick} />

<template lang="pug">
b(bind:this={ container_el })
  button(
    type="button"
    class!={ open ? 'open' : '' }
    onclick!={ toggleDropdown }
    aria-label="在线调试"
  ) 在线调试
  +if open
    Menu(
      options={ [ { label: 'JSFiddle', value: 'jsfiddle' }, { label: 'CodePen', value: 'codepen' }, ] }
      align="right"
      width="90px"
      onSelect!={ clickOption }
    )
</template>

<style lang="stylus">
b
  position relative
  display inline-block

  > button
    display inline-flex
    align-items center
    justify-content center
    background transparent
    color #0071e3
    font-size 12px
    font-weight 500
    border none
    border-bottom 1px solid currentColor
    padding 2px 0
    cursor pointer
    transition all 0.2s ease
    outline none
    user-select none

    &:hover
      color #ff4500

    &:active
      opacity 0.7
</style>