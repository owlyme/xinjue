<template>
  <b-container fluid style="padding: 0">
    <!-- Stack the columns on mobile by making one full-width and the other half-width -->
    <b-row no-gutters>
      <b-col sm="6" md="3" v-for="(item, index) in list" :key="index">
        <main-card :data="item"></main-card>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
export default {
  components: {
    mainCard: () => import('./components/card4')
  },
  data () {
    return {
      list: [
        {
          icon: '&#xe630;',
          url: '/service/#tab1',
          title: '业务咨询',
          info: ' 有网站、微信、APP、软件开发、网站优化推广需求的客户请联系.设计师一对一沟通，充分了解你的需求和想法。时刻掌握新技术动向，打造高品质网站。',
          qq: '1158881764@qq.com'
        },
        {
          icon: '&#xe630;',
          url: '/service/#tab1',
          title: '售后服务',
          info: '有网站优化或续费需求的客户请联系,追求质量同时保证速度追求完美，微信采用个性化设计风格，兼容主流手机浏览器和PC端数据同步，管理方便，全方位网络营销。',
          qq: '13340043530@163.com'
        },
        {
          icon: '&#xe630;',
          url: '/service/#tab1',
          title: '开发维护',
          info: '有网站、微信、APP、软件开发、网站后期维护的需求的客户请联系',
          qq: '1158881764@qq.com'

        },
        {
          icon: '&#xe630;',
          url: '/service/#tab1',
          title: '空间域名备案的客户请联系',
          info: '一站式部署小程序资源套件，简化开发、提升效率；更有丰富的小程序模板，满足电商/餐饮/O2O等多场景定制化需求。',
          qq: '13340043530@163.com'

        }
      ]
    }
  }
}
</script>

<style>

</style>
