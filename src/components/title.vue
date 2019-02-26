<template>
    <div class="s-title text-center" :style="{background: bgColor}">
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'main-title',
  props: {
    bgColor: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="stylus">
  .s-title
    padding: 50px 0
    h1
      font-family: Roboto;
      color: #666;
      font-size: 36px;
      font-weight: 100;
    h2
      font-size: 20px;
      margin: 0 auto;
      padding: 10px 15px;
    > div
      margin-bottom 15px
    p
      font-size: 12px;
      color: #aaa;
      padding: 0 15px;
</style>
