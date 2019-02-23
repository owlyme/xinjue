<template>
    <div ref="box" class="owly-cover" :style="height">
        <div class="owly-cover-content">
            <slot></slot>
        </div>
        <div class="owly-cover-backgroud">
            <slot name="move"></slot>
        </div>
    </div>
</template>

<script>
import windowResize from '@/utils/domEvent.js'
export default {
  name: 'owly-cover',
  props: {
    color: {
      type: String,
      default: () => '#fff'
    },
    bgColor: {
      type: String,
      default: () => '#e63a3e'
    },
    type: {// up , under
      type: String,
      default: () => 'under'
    }
  },
  data () {
    return {
      height: {}
    }
  },
  computed: {
    style () {
      return {
        'background': this.bgColor
      }
    }
  },
  mounted () {
    this.boxHeight()
    windowResize(this.boxHeight)
  },
  methods: {
    boxHeight () {
      let width = this.$refs.box.getBoundingClientRect().right - this.$refs.box.getBoundingClientRect().left
      this.height = {height: width + 'px'}
    }
  }
}
</script>

<style lang="stylus">
    .owly-cover
        position relative
        display flex
        overflow hidden
        .owly-cover-content
            width 100%
            height 100%
            z-index 2
            transition all .2s

        .owly-cover-backgroud
            overflow hidden
            position absolute
            width 100%
            height 100%
            top 100%
            left 0
            background #e63a3e
            z-index 3
            transition all 1s

        &:hover
            .owly-cover-content
                color #ffffff
            .owly-cover-backgroud
                top 0
        @media screen and (max-width: 768px)
          .owly-cover-backgroud
            background rgba(0,0,0,.4)
</style>
