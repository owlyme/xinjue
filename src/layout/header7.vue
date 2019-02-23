<template>
    <div class="header">
        <div ref='left' class="header-left">
            <slot name="left"></slot>
        </div>
        <div ref='right' class="header-right">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script>
export default {
  name: 'header7',
  data () {
    return {
      screenW: document.body.clientWidth || document.documentElement.clientWidth,
      showNavBtn: false
    }
  },
  mounted () {
    this.judgeNav()
  },
  methods: {
    judgeNav () {
      let left = this.$refs.left
      let right = this.$refs.right
      if (left + right > this.screenW) {
        this.showNavBtn = true
      } else {
        this.showNavBtn = false
      }
    }
  }

}
</script>

<style lang="stylus">
    .header
        display flex
        justify-content space-between
        height 100%
        .header-left
            display flex
            height 100%
            overflow hidden
            align-items center
            justify-content flex-start
            img
                height 100%
        .header-right
            line-height 60px
            display flex
            align-items center
            justify-content flex-end
</style>
