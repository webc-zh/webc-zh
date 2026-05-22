<script>
let { search_query = $bindable() } = $props();
</script>

<template lang="pug">
b
  input(type="text" placeholder="搜索组件..." bind:value={ search_query })
</template>

<style lang="stylus">
b
  position relative
  display flex

  @media (max-width 767px)
    align-items center
    gap 12px
    padding 20px 16px 8px

  input
    box-sizing border-box
    flex 1
    min-width 0
    padding 10px 36px 10px 16px
    font-size 14px
    border-radius 10px
    font-family inherit
    transition all 0.3s cubic-bezier(0.4, 0, 0.2, 1)
    background transparent url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' stroke='%2386868b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='7' cy='7' r='4'/%3E%3Cpath d='m11 11 3.5 3.5'/%3E%3C/svg%3E") no-repeat right 12px center
    border 1px solid #0000001f
    color #1d1d1f
    outline none

    &::placeholder
      color #86868b
      font-weight normal

    &:focus
      border-color #0071e359
      background-color transparent
      box-shadow 0 0 0 3px #0071e326, 0 4px 12px #0000000d

    @media (max-width 767px)
      font-size 16px
</style>