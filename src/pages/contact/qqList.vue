<template>
    <!-- Stack the columns on mobile by making one full-width and the other half-width -->
    <b-row style="margin: 30px 0">
      <b-col sm="6" md="3" v-for="(item, index) in list" :key="index">
        <main-card :data="item"></main-card>
      </b-col>
    </b-row>
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
          info: '有网站、微信、APP、软件开发、网站优化推广需求的客户请联系',
          qq: '1158881764@qq.com'
        },
        {
          icon: '&#xe630;',
          url: '/service/#tab1',
          title: '售后服务',
          info: '有网站优化或续费需求的客户请联系',
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
          info: '空间域名备案的客户请联系/餐饮/O2O等多场景定制化需求。',
          qq: '13340043530@163.com'

        }
      ]
    }
  }
}
</script>

<style>

</style>
