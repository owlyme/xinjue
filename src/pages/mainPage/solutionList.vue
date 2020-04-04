<template>
  <owlyGrid :data="data">
    <template slot-scope="item">
      <solutionCard v-bind="item"></solutionCard>
    </template>
  </owlyGrid>
</template>
<script>
export default {
  components: {
    solutionCard: () => import('./components/solutionCard'),
    owlyGrid: () => import('@/components/owlyGrid')
  },
  data () {
    return {
      data: [
        {
          title: '智控管家APP',
          imgSrc: '../../../static/img/solution/01.png',
          info: ['是家中电器设备控制管理平台通过',
            '无线触摸面板与移动终端APP',
            '控制各种智能设备并实现设备之间的互联互'
          ],
          url: ''
        },
        {
          title: '智慧出行app',
          imgSrc: '../../../static/img/solution/04.png',
          info: ['基于用户位置提供个性化的交通信息服务',
            '无线触摸面板与移动终端APP',
            '向各类用户提供交通信息服务',
            '收集终端各类交通信息数据',
            '转换成个性化服务后又服务于用户'
          ],
          url: ''
        },
        {
          title: '智慧阅读APP',
          imgSrc: '../../../static/img/solution/03.png',
          info: ['【扫码借书】：一键扫码，即可轻松把新书从书店借走。',
            '【极简体验】：精致书籍排版，定制化您的阅读喜好。',
            '【书友互动】：交流阅读感受，探讨阅读之美'
          ],
          url: ''
        },
        {
          title: '美食餐饮APP',
          imgSrc: '../../../static/img/solution/05.png',
          info: ['美食餐饮APP是商家点餐等位呼叫服务的中心',
            '资讯导航,美食展示',
            '订位点餐',
            '用餐点评'
          ],
          url: ''
        }
      ]
    }
  }
}
</script>

<style lang="stylus">

</style>
