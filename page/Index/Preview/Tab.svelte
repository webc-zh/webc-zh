<script>
import Select from "./Select.svelte";

let {
  active = $bindable(),
  cdn = $bindable(),
  cdn_keys = [],
  runner = $bindable(),
  runner_keys = [],
  onChange,
} = $props();
</script>

<template lang="pug">
nav
  Select(
    label="直接使用"
    mode={ 0 }
    bind:active={ active }
    bind:value={ cdn }
    options={ cdn_keys }
    onChange!={ (val) => onChange?.(0, val) }
  )
  Select(
    label="打包构建"
    mode={ 1 }
    bind:active={ active }
    bind:value={ runner }
    options={ runner_keys }
    onChange!={ (val) => onChange?.(1, val) }
  )
</template>

<style lang="stylus">
nav
  display inline-flex
  align-items center
  margin-left -14px
  gap 8px
</style>