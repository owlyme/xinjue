<template>
    <div class="about-page">
        <main-header></main-header>
        <div>
          <div class="info">
            <div class="tit"> 互联网整体解决方案服务商 </div>
            <div class="intro">
              <div> 武汉汇海投资集团网络科技有限公司专业从事互联网应用技术、企业信息化网络平台搭建；</div>
              <div>为客户提供网站开发、移动APP开发、微信开发、小程序、系统开发等方面服务。</div>
              <div>汇海集团向企业客户提供一站式的互联网整体解决方案</div>
            </div>
          </div>
        </div>
        <main-footer></main-footer>
    </div>

</template>

<script>
export default {
  name: 'about-page',
  components: {
    mainHeader: () => import('@/layout/header')
    // carousel: () => import('./carousel'),
    // mainTitle: () => import('./title'),
    // casList: () => import('./casList'),
    // cardList: () => import('./cardList'),
    // newsList: () => import('./newsList'),
    // adBanner: () => import('./AdBanner'),
    // viewMore: () => import('@/components/translationUp'),
    // solutionList: () => import('./solutionList'),
    // mainFooter: () => import('./footer')
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
  .about-page
    .info
      text-align center
      .tit
        color #ffffff
        font-size 24px
      .intro
        font-size 14px
        line-height 24px
        color #aaa
</style>
