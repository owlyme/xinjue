<template>
    <div class="servuice-page bgWhite">
      <b-row style="background: #465f87; padding: 60px 0 120px;justify-content: flex-end;">
        <b-col sm="4" class="visible-md-block">
          <img style="position: absolute;top: 40px;"
          src="http://www.hhjtwl.com/templets/hhwl/img/banner-pi.png" />
        </b-col>
        <b-col style="float: right" cols="12" sm="8" class="padding30">
          <h3 class="white text0">一站式互联网+解决方案品牌专家，集聚最雄厚与最专业的技术实力</h3>
          <p class="white">多年技术开发与移动互联网行业经验沉淀，集合对二十多个主流行业的深度研究，从根本出发把握您的实际需求做到开发更快捷、更完善，营销更精准、更高效、并实施落地。</p>
        </b-col>
      </b-row>
      <div class="container badge-container">
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
    </div>
</template>

<script>
export default {
  name: 'servuice-page',
  components: {
    appdev: () => import('./appdev'),
    softdev: () => import('./softdev'),
    applets: () => import('./applets'),
    siteDev: () => import('./sitedev'),
    wxdev: () => import('./wxdev')
  },
  data () {
    return {
      activeIndex: 0
    }
  },
  mounted () {
    this.setBage()
  },
  methods: {
    setBage (index) {
      if (index !== undefined) {
        this.activeIndex = index
      } else {
        this.activeIndex = parseInt(this.$route.query.tab || 0)
      }
    }
  }

}
</script>

<style lang="stylus">
  .servuice-page
    .badge-container
      position relative
      text-align right
      margin-top 20px
      .bage7
        height: 32px;
        width 118px
        line-height: 26px
        margin 11px
        cursor pointer
</style>
