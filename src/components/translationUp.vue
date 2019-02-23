<template>
    <div refs="box" class="transilation-up">
        <div class="transilation-up-content">
            <div class="inner">{{label}}</div>
            <div class="inner red">{{label}}</div>
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
            display: block;
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
