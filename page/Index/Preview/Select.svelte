<script>
import Menu from "./Menu.svelte";

let { label, mode, active = $bindable(), value = $bindable(), options = [], onChange } = $props();

let open = $state(false),
  container_el = $state();

const is_open = $derived(open && active == mode),
  toggleDropdown = (e) => {
    e.stopPropagation();
    if (active != mode) {
      active = mode;
      open = true;
      onChange?.(value);
    } else {
      open = !open;
    }
  },
  selectOption = (val, e) => {
    e.stopPropagation();
    value = val;
    open = false;
    onChange?.(val);
  },
  handleWindowClick = (e) => {
    if (open && container_el && !container_el.contains(e.target)) {
      open = false;
    }
  };
</script>

<svelte:window onclick={handleWindowClick} />

<template lang="pug">
b(bind:this={ container_el })
  button(
    type="button"
    class!={ (active == mode ? 'active ' : '') + (is_open ? 'open' : '') }
    onclick!={ toggleDropdown }
  )
    b
      | {label}
      +if active == mode
        i {value?.split(' ')[0]}
    +if active == mode
      svg(viewBox="0 0 24 24" width="12" height="12" class!={ open ? 'open' : '' })
        path(
          d="M6 9l6 6 6-6"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        )

  +if is_open
    Menu(options={ options } value={ value } onSelect!={ selectOption })
</template>

<style lang="stylus">
b
  position relative
  display inline-block

  button
    border 1px solid #00000014
    background transparent
    padding 0 14px
    height 30px
    display inline-flex
    align-items center
    font-size 12px
    font-weight 300
    color #86868b
    border-radius 15px
    cursor pointer
    transition all 0.2s cubic-bezier(0.4, 0, 0.2, 1)
    outline none
    user-select none
    box-sizing border-box

    b
      display inline-flex
      align-items center
      white-space nowrap

      i
        font-style normal
        font-weight 500
        color #ffffffcc
        margin-left 4px

    &:hover
      color #1d1d1f
      border-color #00000029
      background #00000005

    &.active
      background transparent
      border-color #86868b
      color #424245
      box-shadow none
      padding-right 22px

      &:hover
        background transparent
        border-color #86868b

      b i
        color #424245

      &.open
        b i
          color #0071e3

    svg
      position absolute
      right 8px
      top 50%
      transform translateY(-50%)
      color #86868b
      pointer-events none
      transition transform 0.25s ease, color 0.2s ease

      &.open
        transform translateY(-50%) rotate(180deg)

    &:hover svg
      color #1d1d1f
</style>