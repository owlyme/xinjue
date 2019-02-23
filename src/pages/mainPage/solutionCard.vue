<template>
    <div class="solution-banner">
        <div class="solution-banner-item"
            v-for="(item, index) in solutions" :key="index">
            <cover type="up">
                <div><img :src="item.imgSrc" alt=""></div>
                <div slot="move" class="solution-cover">
                    <div class="inner">
                        {{item.msg}}
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
      solutions: [
        {
          imgSrc: 'http://pic31.nipic.com/20130802/13163193_145819676170_2.jpg',
          msg: '12313'
        },
        {
          imgSrc: 'http://pic31.nipic.com/20130802/13163193_145819676170_2.jpg',
          msg: '12313'
        },
        {
          imgSrc: 'http://pic31.nipic.com/20130802/13163193_145819676170_2.jpg',
          msg: '12313'
        },
        {
          imgSrc: 'http://pic31.nipic.com/20130802/13163193_145819676170_2.jpg',
          msg: '12313'
        },
        {
          imgSrc: 'http://pic31.nipic.com/20130802/13163193_145819676170_2.jpg',
          msg: '12313'
        }
      ]
    }
  }
}
</script>

<style lang="stylus">
    .solution-banner
        display flex
        justify-content center
        flex-wrap wrap
        .solution-cover
            width 100%
            height 100%
            padding 10px
            .inner
                width 100%
                height 100%
                border 2px solid #fff
                text-align center

    @media screen and (max-width: 9999px)
        .solution-banner-item
            padding 10px
            width 20%

    @media screen and (max-width: 1200px)
        .solution-banner-item
            padding 10px
            width 33.3333%

    @media screen and (max-width: 992px)
        .solution-banner-item
            padding 10px
            width 50%
</style>
