<template>
    <div class="servuice-site-page">
      <mainTitle class="margin30">
      <h2>微信小程序解决方案</h2>
      <p>一站式部署小程序资源套件，简化开发、提升效率；</p>
      <p>更有丰富的小程序模板，满足电商/餐饮/O2O等多场景定制化需求</p>
      </mainTitle>

      <b-row class="margin30  bgWhite">
        <b-col xs="12" sm="12" md="6" lg="6">
          <img style="width: 100%" src="http://www.hhjtwl.com/templets/hhwl/img/tab4_ssa.jpg" />
        </b-col>
        <b-col xs="12" sm="12" md="6" lg="6">
        <row :data="msg" class="vertical">
          <div slot-scope="{title, text}">
            <div class="text0">{{title}}</div>
            <div class="text1">{{text}}</div>
          </div>
        </row>
        </b-col>
      </b-row>

      <mainTitle class="bgGray">
      <h2>核心功能</h2>
      <p>小程序是4年内最大的移动互联网商机，抢占流量红利，实现营收激增</p>
      </mainTitle>

      <div class="padding30 bgGray">
        <row xs='12' sm='6' md='4' :data="fnList">
          <card3 slot-scope="item"
            :bgUrl="item.img">
            <div class="text0">{{item.title}}</div>
            <div class="text1">{{item.text1}}</div>
            <div class="text1">{{item.text2}}</div>
          </card3>
        </row>
      </div>

      <mainTitle class="margin30">
      <h2>应用场景</h2>
      <p>率先抢占小程序发布先机，掘金微信8亿用户</p>
      </mainTitle>

      <div class="margin30">
        <img style="width: 100%" src="http://www.hhjtwl.com/templets/hhwl/img/tab4_scc.png" />
      </div>
    </div>
</template>

<script>
export default {
  name: 'servuice-page',
  components: {
    mainTitle: () => import('@/components/title'),
    card3: () => import('@/components/card3'),
    row: () => import('@/components/row')

  },
  data () {
    return {
      msg: [
        {
          title: '功能组件化',
          text: '按单独的功能收费，用户可以灵活选择，用什么买什么，告别不必要的资金浪费。需求明确，产品轻巧。'
        },
        {
          title: '用户体验佳',
          text: '操作简单，模板丰富，用户可以像发微博、朋友圈一样制作自己的小程序。重视用户需求，产品迭代快。'
        },
        {
          title: '外观自由DIY',
          text: '用户直接在后台拖拉组建，全自主布局，所见即所得。装修随心变，轻松打造与众不同的小程序。'
        }, {
          title: '傻瓜式操作方式',
          text: '查看每日放客，了解运营数据，用户可以在后台便捷的管理发布、订单核销等操作。'
        }
      ],
      fnList: [
        {
          img: 'http://www.hhjtwl.com/templets/hhwl/img/tab4_scb_a.png',
          title: '引流',
          text1: '10大流量入口',
          text2: '全方位获取9亿微信用户力量'
        },
        {
          img: 'http://www.hhjtwl.com/templets/hhwl/img/tab4_scb_b.png',
          title: '展示',
          text1: '企业品牌展示',
          text2: '商品展示、服务展示、案例展示'
        },
        {
          img: 'http://www.hhjtwl.com/templets/hhwl/img/tab4_scb_c.png',
          title: '预约',
          text1: '预约服务交付定金',
          text2: '在线1V1客服咨询'
        },
        {
          img: 'http://www.hhjtwl.com/templets/hhwl/img/tab4_scb_d.png',
          title: '交易',
          text1: '对接微信支付',
          text2: '线上下单极速交易'
        },
        {
          img: 'http://www.hhjtwl.com/templets/hhwl/img/tab4_scb_e.png',
          title: '服务',
          text1: '服务流程线上化',
          text2: '减少人共投入，数据化经营'
        },
        {
          img: 'http://www.hhjtwl.com/templets/hhwl/img/tab4_scb_f.png',
          title: '沉淀',
          text1: '支付即会员',
          text2: '积分促销提高用户复购率'
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
  .servuice-site-page
    .cando
      background #ffffff

</style>
