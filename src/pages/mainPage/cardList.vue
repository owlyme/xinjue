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
    mainCard: () => import('./components/card')
  },
  data () {
    return {
      list: [
        {
          icon: '&#xe65a;',
          url: '/service/#tab1',
          title: '企业网站建设',
          info: ' 策划、设计、前端、程序开发全方位一条龙服务充分了解企业文化、行业特点，体现企业特色.设计师一对一沟通，充分了解你的需求和想法。时刻掌握新技术动向，打造高品质网站。',
          labels: ['网站策划', '网页设计', 'UI设计', '互动设计', '功能型网站', '电商平台']
        },
        {
          icon: '&#xe6a0;',
          url: '/service/#tab1',
          title: 'APP/微信开发',
          info: 'APP专业量身定制设计、定制功能、定制后台开发,追求质量同时保证速度追求完美，微信采用个性化设计风格，兼容主流手机浏览器和PC端数据同步，管理方便，全方位网络营销。',
          labels: ['APP开发', '微信开发', '微信公众号', '微商城', '微官网', '微信分销系统']
        },
        {
          icon: '&#xe706;',
          url: '/service/#tab1',
          title: '软件开发',
          info: '根据您的业务流程，专业量身定制各类软件。开发的架构能全面整合各种业务流程，快速高效地为您打造专属的业务管理平台',
          labels: ['电商管理系统', '软件定制', '门店管理', '工程管理', 'OA系统', 'CRM系统']

        },
        {
          icon: '&#xe653;',
          url: '/service/#tab1',
          title: '小程序开发',
          info: '一站式部署小程序资源套件，简化开发、提升效率；更有丰富的小程序模板，满足电商/餐饮/O2O等多场景定制化需求。',
          labels: ['餐饮行业', '电商行业', '旅游行业', '汽车行业', '健身行业', '美容行业']

        }
      ]
    }
  }
}
</script>

<style>

</style>
