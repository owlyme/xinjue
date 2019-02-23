<template>
    <div refs="box" class="transfrom-border">
        <div class="transfrom-border-content">
            <slot></slot>
        </div>
        <div class="abs transfrom-border-left"></div>
        <div class="abs transfrom-border-top"></div>
        <div class="abs transfrom-border-right"></div>
        <div class="abs transfrom-border-bottom"></div>
    </div>
</template>

<script>
export default {
  name: 'transfrom-border',
  props: {
    color: {
      type: String,
      default: () => '#fff'
    },
    bgColor: {
      type: String,
      default: () => '#f00'
    }
  },
  data () {
    return {
    }
  },
  mounted () {

  },
  methods: {
  }

}
</script>

<style lang="stylus">
    .transfrom-border
        padding 2px
        position relative
        text-align center
        overflow hidden

        &:hover
            .transfrom-border-left, .transfrom-border-right
                height 100%
            .transfrom-border-top, .transfrom-border-bottom
                width 100%

        .abs
            transition all 1s
            position absolute
            background #e63a3e
        .transfrom-border-content
            width 100%
            height 100%
            z-index 2
        .transfrom-border-left
            width 1px
            height 0
            left 0
            top 0
        .transfrom-border-top
            width 0
            height 1px
            left 0
            top 0
        .transfrom-border-right
            width 1px
            height 0
            right 0
            bottom 0
        .transfrom-border-bottom
            width 0
            height 1px
            right 0
            bottom 0

</style>
