<template>
    <div refs="box" class="owly-grow">
        <div class="owly-grow-content" >
            <slot></slot>
        </div>
        <div class="owly-grow-backgroud" :style="style">
            <slot name="move"></slot>
        </div>
    </div>
</template>

<script>
export default {
  name: 'owly-grow',
  props: {
    color: {
      type: String,
      default: () => '#fff'
    },
    bgColor: {
      type: String,
      default: () => '#f00'
    },
    type: {// up , under
      type: String,
      default: () => 'under'
    },
    width: {
      type: [String, Number],
      default: () => '0%'
    },
    height: {
      type: [String, Number],
      default: () => '100%'
    }
  },
  data () {
    return {
    }
  },
  computed: {
    style () {
      let height = this.height.includes('%') ? this.height : this.height + 'px'
      let width = this.width.includes('%') ? this.width : this.width + 'px'
      let zIndex = this.type === 'up' ? '3' : '1'
      return {height: height,
        width: width,
        'background': this.bgColor,
        'zIndex': zIndex }
    }
  },
  mounted () {

  },
  methods: {

  }
}
</script>

<style lang="stylus">
    .owly-grow
        position relative
        display flex
        overflow hidden
        .owly-grow-content
            width 100%
            height 100%
            z-index 2
            transition all .2s

        .owly-grow-backgroud
            overflow hidden
            position absolute
            width 100%
            height 100%
            bottom 0
            left 0
            background #e63a3e
            z-index 1
            transition all 1s

        &:hover
            .owly-grow-content
                color #ffffff
            .owly-grow-backgroud
                width 100% !important
</style>
