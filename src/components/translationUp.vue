<template>
    <div refs="box" class="transilation-up" style="margin: 25px auto;">
        <div class="transilation-up-content" :style="{width: width + 'px'}">
          <b-link :href="href">
            <div class="inner">{{label}}</div>
            <div class="inner red">{{label}}</div>
          </b-link>
        </div>
    </div>
</template>

<script>
export default {
  name: 'transilation-up',
  props: {
    label: {
      type: String,
      default: () => 'view more'
    },
    width: {
      type: [String, Number],
      default: () => '300'
    },
    href: {
      type: String,
      default: () => '#'
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
  .transilation-up
      position relative
      text-align center
      height: 50px;
      overflow hidden
      &:hover
        .transilation-up-content
            transform translate(0, -50px)
      .transilation-up-content
        display: inline-block;
        min-width: 300px;
        transition: all .5s ease 0s;
        font-size 30px
        .inner
            border-radius: 25px;
            border 1px solid #e4e4e4
            line-height 50px
            height: 50px;
            color #bebebe

        .red
            background #e63a3e
            color #fff
</style>
