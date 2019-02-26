<template>
    <div class="solution-banner">
        <div class="solution-banner-item">
            <cover type="up" >
                <div><img :src="imgSrc" alt=""></div>
                <div slot="move" class="solution-cover">
                    <div class="inner">
                      <h2 class="title">{{title}}</h2>
                      <span class="short-line"></span>
                      <p v-for="item in info">{{item}}</p>
                    </div>
                </div>
            </cover>
        </div>
    </div>
</template>

<script>
import cover from '@/components/cover'
export default {
  name: 'solution-banner',
  props: ['title', 'imgSrc', 'info'],
  components: {
    cover
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="stylus">
    .solution-banner
      .solution-banner-item
        width 100%
      .solution-cover
        width 100%
        height 100%
        padding 10px
        .inner
          width 100%
          height 100%
          border 2px solid #fff
          text-align center
          color #fff
        .title
          margin 30px 0 20px

        .short-line
          display inline-block
          margin 20px
          height 8px
          width 33px
          border-radius 4px
          background #fff
</style>
