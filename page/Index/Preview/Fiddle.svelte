<script>
import demos from "../../../gen/com/demo/index.js";
import coms from "../../../gen/com/index.js";
import CDN_PKG from "../../../conf/npm/CDN_PKG.js";

let { name, urls_text } = $props();

const clickFiddle = () => {
  const match = demos.find(([n]) => n == name);
  if (!match) {
    return;
  }

  const [_, [htm, js, css]] = match,
    com = coms.find(([n]) => n == name),
    desc = com ? com[1] : "",
    form = document.createElement("form"),
    html_field = urls_text + "\n" + htm,
    fields = {
      html: html_field,
      js: js,
      css: css,
      title: name + " - " + CDN_PKG,
      description: desc,
    };

  form.method = "POST";
  form.action = "https://jsfiddle.net/api/post/library/pure/";
  form.target = "_blank";

  for (const [key, val] of Object.entries(fields)) {
    const input = document.createElement("input");
    input.type = "hidden";
    input.name = key;
    input.value = val;
    form.appendChild(input);
  }

  document.body.appendChild(form);
  form.submit();
  document.body.removeChild(form);
};
</script>

<template lang="pug">
button(onclick!={ clickFiddle } aria-label="在线调试") 在线调试
</template>

<style lang="stylus">
button
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