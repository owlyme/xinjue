<template>
    <div class="servuice-page bgWhite">
      <!-- <main-header></main-header> -->
      <b-row style="background: #465f87; margin-bottom: 120px;justify-content: flex-end;">
        <b-col cols="4" class="visible-md-block visible-lg-block">
          <img style="position: absolute;top: 40px;"
          src="http://www.hhjtwl.com/templets/hhwl/img/banner-pi.png" />
        </b-col>
        <b-col style="float: right" cols="8" class="padding30">
          <h3 class="white text0">一站式互联网+解决方案品牌专家，集聚最雄厚与最专业的技术实力</h3>
          <p class="white">多年技术开发与移动互联网行业经验沉淀，集合对二十多个主流行业的深度研究，从根本出发把握您的实际需求做到开发更快捷、更完善，营销更精准、更高效、并实施落地。</p>
        </b-col>
      </b-row>
      <div class="container badge-container ">
        <div class="line"></div>
        <b-badge class="bage7" pill
         v-for="(item, index) in ['网站建设','APP开发','微信开发','软件开发','小程序开发']"
         :key='index'
         :variant="activeIndex == index ? 'danger' : 'light'"
         @click="setBage(index)">{{item}}</b-badge>
      </div>
      <siteDev v-show="activeIndex === 0"></siteDev>
      <appdev v-show="activeIndex === 1"></appdev>
      <wxdev v-show="activeIndex === 2"></wxdev>
      <softdev v-show="activeIndex === 3"></softdev>
      <applets v-show="activeIndex === 4"></applets>

      <mainFooter></mainFooter>
    </div>
</template>

<script>
export default {
  name: 'servuice-page',
  components: {
    mainHeader: () => import('@/layout/header'),
    appdev: () => import('./appdev'),
    softdev: () => import('./softdev'),
    applets: () => import('./applets'),
    siteDev: () => import('./sitedev'),
    wxdev: () => import('./wxdev'),
    mainFooter: () => import('@/layout/footer')
  },
  data () {
    return {
      activeIndex: 0
    }
  },
  mounted () {

  },
  methods: {
    setBage (index) {
      this.activeIndex = index
    }
  }

}
</script>

<style lang="stylus">
  .servuice-page
    .badge-container
      position relative
      text-align right
      .bage7
        height: 32px;
        width 118px
        line-height: 26px
        margin 11px
        cursor pointer
</style>
