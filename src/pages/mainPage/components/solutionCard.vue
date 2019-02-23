<template>
    <div class="solution-banner">
        <div class="solution-banner-item">
            <cover type="up" >
                <div><img :src="solution.imgSrc" alt=""></div>
                <div slot="move" class="solution-cover">
                    <div class="inner">
                        {{solution.msg}}
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
  components: {
    cover
  },
  data () {
    return {
      solution:
        {
          imgSrc: 'http://pic31.nipic.com/20130802/13163193_145819676170_2.jpg',
          msg: '12313'
        }
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
</style>
