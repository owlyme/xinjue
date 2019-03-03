<template>
    <div class="ad-banner">
        <div class="ad-banner-item"
            v-for="(item, index) in list" :key="index">
            <ad-card :info="item"></ad-card>
        </div>
    </div>
</template>

<script>
import adCard from '@/components/AdCard'
export default {
  name: 'ad-banner',
  components: {
    adCard
  },
  data () {
    return {
      list: [
        {
          src: '../../../static/img/case/5.jpg',
          corpName: '伙拉app',
          time: '2019-01-12',
          url: '/case/scmh/20180605/601.html'
        },
        {
          src: '../../../static/img/case/1.jpg',
          corpName: '一号仓',
          time: '2019-01-12',
          url: '/case/scmh/20190222/687.html'
        },
        {
          src: '../../../static/img/case/10.jpg',
          corpName: '万科微商城',
          time: '2019-01-12',
          url: '/case/scmh/20190222/686.html'
        },
        {
          src: '../../../static/img/case/9.jpg',
          corpName: '慧创园',
          time: '2019-01-12',
          url: '/case/scmh/20190222/685.html'
        },
        {
          src: '../../../static/img/case/3.jpg',
          corpName: '欧亚达装饰',
          time: '2019-01-12',
          url: '/case/ppgw/20180521/589.html'
        },
        {
          src: '../../../static/img/case/4.jpg',
          corpName: '善安四智堂医药门',
          time: '2019-01-12',
          url: '/case/ppgw/20180521/592.html'
        },
        {
          src: '../../../static/img/case/6.jpg',
          corpName: '雨之堂小程序',
          time: '2019-01-12',
          url: '/case/scmh/20190222/683.html'
        },
        {
          src: '../../../static/img/case/2.jpg',
          corpName: '鹏程经纪',
          time: '2019-01-12',
          url: '/case/ppgw/20180521/591.html'
        }
        // {
        //   src: '../../../static/img/case/7.jpg',
        //   corpName: '荆楚潮教育',
        //   time: '2019-01-12',
        //   url: '/case/scmh/20190222/682.html'
        // },
        // {
        //   src: '../../../static/img/case/8.jpg',
        //   corpName: '光电产业云',
        //   time: '2019-01-12',
        //   url: '/case/scmh/20190222/684.html'
        // }
      ]
    }
  }
}
</script>

<style lang="stylus">
    .ad-banner
        display flex
        justify-content center
        flex-wrap wrap
        .ad-banner-item
            padding 10px
    @media screen and (max-width: 9999px)
        .ad-banner-item
            width 25%

    @media screen and (max-width: 1200px)
        .ad-banner-item
            width 33.3333%

    @media screen and (max-width: 992px)
        .ad-banner-item
            width 50%
</style>
