<template>
    <div class="main-page">
        <carousel></carousel>
        <div class="padding">
        <main-title>
          <h1>WHAT CAN WE DO</h1>
          <h2>我们能为您做些什么</h2>
          <p>从PC到移动互联，杭州新珏投资科技有限公司打造一个全方位互联网营销体系</p>
        </main-title>

        <card-list></card-list>

        <main-title>
          <h1>OUR CASE</h1>
          <h2>新珏出品，精品展示</h2>
          <h2>专业的网络品牌塑造者，网络品牌设计服务机构</h2>
          <p>我们做网站更懂百度，我们更懂精准营销，我们在网站方面更懂你</p>
          <casList></casList>
        </main-title>

        <ad-banner></ad-banner>

        <view-more url="/aboutus"></view-more>

        <main-title>
          <h1>SOLUTION</h1>
          <h2>行业解决方案</h2>
          <h2>多年行业积累经验，专注于高品质设计及移动互联网应用程序开发解决方案</h2>
          <p>包含共享经济，教育行业、直播行业、智慧旅游、移动金融、远程医疗、掌上地产、物流配送、移动办公、智能家居、新闻阅读等移动解决方案</p>
        </main-title>
        <solutionList></solutionList>

        <!-- <main-title bgColor="none">
          <h1>NEWS</h1>
          <h2>新闻资讯</h2>
          <h2>专业的网络品牌塑造者，网络品牌设计服务机构</h2>
          <p>提供网站建设相关资讯、互联网行业资讯、网站设计知识、空间域名邮箱、网站解决方案、常见问题等</p>
        </main-title>
        <news-list></news-list>
        <view-more href="www.baidu.com"></view-more> -->
        </div>
    </div>

</template>

<script>
export default {
  name: 'main-page',
  components: {
    carousel: () => import('./carousel'),
    mainTitle: () => import('@/components/title'),
    casList: () => import('./casList'),
    cardList: () => import('./cardList'),
    newsList: () => import('./newsList'),
    adBanner: () => import('./AdBanner'),
    viewMore: () => import('@/components/translationUp'),
    solutionList: () => import('./solutionList')
  },
  data () {
    return {
      caseList: [
        '品牌网站',
        'App开发',
        '微信开发',
        '电商平台'
      ]
    }
  },
  mounted () {

  },
  methods: {

  }

}
</script>

<style lang="stylus">
  .padding
    padding 0 15px
</style>
