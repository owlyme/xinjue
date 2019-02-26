<template>
    <div class="servuice-site-page">
      <mainTitle class="margin30">
      <h2>你为什么需要开发一个APP？</h2>
      <div class="fn24 color333 fnw100">APP Development</div>
      <p>随着智能手机越发普及、用户越发依赖手机软件商店，App开发的市场需求与发展前景也逐渐蓬勃，截止到2012年12月，App开发已变成红海市场。</p>
      <p>当然，移动互联网时代是全民的移动互联网时代、每个人的时代、每个企业的时代。APP便捷了每个人的生活，APP开发让每个企业都开始了移动信息化进程。</p>
      </mainTitle>

      <div class="margin30">
        <img style="width: 100%" src="http://www.hhjtwl.com/templets/hhwl/img/tab2-bg1.png" />
      </div>

      <mainTitle class="bgGray">
      <h2 class="font-weight">新珏APP解决方案</h2>
      <div class="fn24 color333 fnw100">APP Solutions</div>
      <p>杭州新珏科技致力于为中国企业提供全面互联网电子商务解决方案，包括网站建设，移动手机APP开发、 互联网营销推广服务，是国内互联</p>
      </mainTitle>

      <div class="margin30">
        <img style="width: 100%" src="http://www.hhjtwl.com/templets/hhwl/img/tab2-bg2.jpg" />
      </div>

      <mainTitle class="margin30">
      <h2>新珏APP建设流程</h2>
      <div class="fn24 color333 fnw100">Construction process</div>
      <p>互联网将连接一切，数据将我们变得更理性，智能应用将生活变得便捷</p>
      </mainTitle>

      <div class="margin30">
        <img style="width: 100%" src="http://www.hhjtwl.com/templets/hhwl/img/tab2-bg3.jpg" />
      </div>

    </div>
</template>

<script>
export default {
  name: 'servuice-page',
  components: {
    mainTitle: () => import('@/components/title'),
    card1: () => import('@/components/card1')

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
  .servuice-site-page
    .cando
      background #ffffff

</style>
