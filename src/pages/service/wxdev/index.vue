<template>
    <div class="servuice-site-page">
      <div>
        <img style="width: 100%" src="http://www.hhjtwl.com/templets/hhwl/img/tab3-bg1.jpg" />
      </div>
      <mainTitle class="padding30 bgGray">
      <h2>丰富的功能体验</h2>
      <div class="fn24 color333 fnw100">Function Show</div>
      <p>公众平台搭配丰富的第三方功能后如虎添翼，在保留公众平台所有优势的前提下对接百度直达号、支付宝服务窗、微信企业号；全方位的O2O解决方案，铸造新的传奇。</p>
      </mainTitle>

       <b-row class="padding30 bgGray" no-gutters>
        <b-col xs='12' sm='4' md='4' lg='4'
        v-for="(item, index) in wxList" :key="index">
          <card2 v-bind="item"></card2>
        </b-col>
      </b-row>

      <mainTitle class="padding30">
      <h2>丰富的多样界面</h2>
      <div class="fn24 color333 fnw100">Construction Process</div>
      <p>公众平台搭配丰富的第三方功能后如虎添翼，在保留公众平台所有优势的前提下对接百度直达号、支付宝服务窗、微信企业号；全方位的O2O解决方案，铸造新的传奇。</p>
      </mainTitle>

      <div class="margin30">
        <img style="width: 100%" src="http://www.hhjtwl.com/templets/hhwl/img/tab3-bg2.png" />
      </div>
    </div>
</template>

<script>
export default {
  name: 'servuice-page',
  components: {
    mainTitle: () => import('@/components/title'),
    card2: () => import('@/components/card2')
  },
  data () {
    return {
      wxList: [
        {
          icon: '&#xe62f;',
          title: '微官网',
          text: '让你的微网站绝对与众不同，微官网有多种风格的行业模板，精致美观，适合各类企业选用！'
        },
        {
          icon: '&#xe69c;',
          title: '微商城',
          text: '在线浏览、选购商品、加入购物车、支付、填写配送地址，实现微信在线购物，通过微支付付款；保障企业和顾客安全和利益。'
        },
        {
          icon: '&#xe611;',
          title: '微会员',
          text: '发卡零成本，携带方便，同时实现会员储值和积分等功能，商家只要用原有实体卡扫描枪扫描，即可验证会员卡信息。'
        },
        {
          icon: '&#xe600;',
          title: '微社区',
          text: '打破以往公众账号“一对多”单向推送信息方式，使用“用户与用户”、“用户与平台”双向交流模式。'
        },
        {
          icon: '&#xe618;',
          title: '微支付',
          text: '用户在支付时只需在自己的智能手机上输入密码，无需任何刷卡步骤即可完成支付，整个过程简便流畅。'
        },
        {
          icon: '&#xe619;',
          title: '微游戏',
          text: '互动营销引爆人气，大转盘、刮刮卡，水果达人 客户互动很轻松'
        }
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

</style>
