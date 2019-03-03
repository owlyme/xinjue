<template>
  <div class="case-page">

    <b-container>
      <b-row>
        <b-col cols='12' md='4'>
          <h2>客户案例</h2>
          <div class="text1 fnw100">Case Show</div>
        </b-col>
        <b-col class="badge-container" xs='12' md='8'>
          <b-row>
            <b-col
            sm='6' md='4' lg='2' :offset-lg="!index ? 2 : 0"
            v-for="(item, index) in ['品牌网站','APP开发','微信开发', '电商平台', '软件开发']"
            :key='index'>
              <b-badge class="bage7 fnw100"
              :variant="activeIndex == index ? 'danger' : 'light'"
               @click="setBage(index)">
               {{item}}
                </b-badge>
            </b-col>
          </b-row>
        </b-col>
      </b-row>

      <b-row no-gutters>
        <b-col class="padding10" cols='12' sm='6' md='4' lg='3'
          v-for="(item, index) in list" :key="index">
           <ad-card  :info="item"></ad-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import adCard from '@/components/AdCard'
export default {
  components: {
    adCard
  },
  data () {
    return {
      activeIndex: 0,
      sitelist: [
        {
          src: '../../../static/img/case/site/0.jpg',
          corpName: '武汉网站建设app开发公司案例：善安四智堂医药门',
          time: '2019-01-12',
          url: '/case/ppgw/20180521/592.html'
        },
        {
          src: '../../../static/img/case/site/1.jpg',
          corpName: '武汉网站建设app开发公司案例：欧亚达装饰',
          time: '2019-01-12',
          url: '/case/ppgw/20180521/589.html'
        },
        {
          src: '../../../static/img/case/site/2.jpg',
          corpName: '武汉网站建设app开发公司案例：鹏程经纪',
          time: '2019-01-12',
          url: '/case/ppgw/20180521/591.html'
        },
        {
          src: '../../../static/img/case/site/3.png',
          corpName: '武汉网站建设app开发公司案例：晟尔人力资源网',
          time: '2019-01-12',
          url: '/case/ppgw/20180521/590.html'
        },
        {
          src: '../../../static/img/case/site/4.jpg',
          corpName: '武汉网站建设app开发公司案例：中德名车',
          time: '2019-01-12',
          url: '/case/ppgw/20171016/344.html'
        },
        {
          src: '../../../static/img/case/site/5.jpg',
          corpName: '武汉网站建设app开发公司案例：中恩美联抗衰科技有限公司',
          time: '2019-01-12',
          url: '/case/ppgw/20161123/62.html'
        },
        {
          src: '../../../static/img/case/site/6.jpg',
          corpName: '武汉网站建设app开发公司案例：青岛正元恒邦贵金属交易中心',
          time: '2019-01-12',
          url: '/case/ppgw/20161122/58.html'
        },
        {
          src: '../../../static/img/case/site/7.jpg',
          corpName: '武汉网站建设app开发公司案例：武汉电子信息职业教育集团',
          time: '2019-01-12',
          url: '/case/ppgw/20171016/339.html'
        },
        {
          src: '../../../static/img/case/site/8.jpg',
          corpName: '武汉网站建设app开发公司案例：禧悦运动器材',
          time: '2019-01-12',
          url: '/case/ppgw/20161124/65.html'
        },
        {
          src: '../../../static/img/case/site/9.jpg',
          corpName: '武汉网站建设app开发公司案例：遇缘高端饮品',
          time: '2019-01-12',
          url: '/case/ppgw/20161125/67.html'
        }
      ],
      applist: [
        {
          src: '../../../static/img/case/app/0.jpg',
          corpName: '一号仓',
          time: '2019-01-12',
          url: '/case/scmh/20190222/687.html'
        },
        {
          src: '../../../static/img/case/app/1.jpg',
          corpName: '万科微商城',
          time: '2019-01-12',
          url: '/case/scmh/20190222/686.html'
        },
        {
          src: '../../../static/img/case/app/2.jpg',
          corpName: '慧创云',
          time: '2019-01-12',
          url: '/case/scmh/20190222/685.html'
        },
        {
          src: '../../../static/img/case/app/3.jpg',
          corpName: '光电产业云',
          time: '2019-01-12',
          url: '/case/scmh/20190222/684.html'
        },
        {
          src: '../../../static/img/case/app/4.jpg',
          corpName: '荆楚潮教育',
          time: '2019-01-12',
          url: '/case/scmh/20190222/682.html'
        },
        {
          src: '../../../static/img/case/app/5.jpg',
          corpName: '雨之堂小程序',
          time: '2019-01-12',
          url: '/case/scmh/20190222/683.html'
        },
        {
          src: '../../../static/img/case/app/6.jpg',
          corpName: '伙拉app',
          time: '2019-01-12',
          url: '/case/scmh/20180605/601.html'
        },
        {
          src: '../../../static/img/case/app/7.jpg',
          corpName: '建银汽车',
          time: '2019-01-12',
          url: '/case/scmh/20170717/237.html'
        },
        {
          src: '../../../static/img/case/app/8.jpg',
          corpName: '联想问答APP',
          time: '2019-01-12',
          url: '/case/cmh/20170317/141.html'
        },
        {
          src: '../../../static/img/case/app/9.jpg',
          corpName: '决策与信息',
          time: '2019-01-12',
          url: '/case/scmh/20161109/38.html'
        }
      ],
      wxlist: [
        {
          src: '../../../static/img/case/wx/0.jpg',
          corpName: '甄美整形微信商城',
          time: '2019-01-12',
          url: '/case/ydyy/20161109/41.html'
        },
        {
          src: '../../../static/img/case/wx/1.jpg',
          corpName: '叮咚e到家微信商城',
          time: '2019-01-12',
          url: '/case/ydyy/20161109/43.html'
        },
        {
          src: '../../../static/img/case/wx/2.jpg',
          corpName: '川崎昊业润滑油微活动平台',
          time: '2019-01-12',
          url: '/case/scmh/20190222/685.html'
        },
        {
          src: '../../../static/img/case/wx/3.jpg',
          corpName: '鹏程经纪',
          time: '2019-01-12',
          url: '/case/ppgw/20180521/591.html'
        },
        {
          src: '../../../static/img/case/wx/4.jpg',
          corpName: '欧亚达装饰',
          time: '2019-01-12',
          url: '/case/ppgw/20180521/589.html'
        },
        {
          src: '../../../static/img/case/wx/5.jpg',
          corpName: '善安四智堂医药门',
          time: '2019-01-12',
          url: '/case/ppgw/20180521/592.html'
        },
        {
          src: '../../../static/img/case/wx/6.jpg',
          corpName: '伙拉app',
          time: '2019-01-12',
          url: '/case/scmh/20180605/601.html'
        },
        {
          src: '../../../static/img/case/wx/7.jpg',
          corpName: '雨之堂小程序',
          time: '2019-01-12',
          url: '/case/scmh/20190222/683.html'
        }
      ],
      shoplist: [
        {
          src: '../../../static/img/case/shop/0.jpg',
          corpName: '中亿普惠P2P平台',
          time: '2018-11-12',
          url: '/case/HTML5/20161109/44.html'
        },
        {
          src: '../../../static/img/case/shop/1.jpg',
          corpName: '金融眼P2P平台',
          time: '2018-11-12',
          url: '/case/HTML5/20161110/45.html'
        },
        {
          src: '../../../static/img/case/shop/2.jpg',
          corpName: '360中房网房产平台',
          time: '2018-11-12',
          url: '/case/HTML5/20161110/46.html'
        },
        {
          src: '../../../static/img/case/shop/3.jpg',
          corpName: '乐居商城',
          time: '2018-11-12',
          url: '/case/HTML5/20161110/47.html'
        }
      ],
      softlist: [
        {
          src: '../../../static/img/case/soft/1.jpg',
          corpName: '综合检查信息化管理系统',
          time: '2018-03-19',
          url: '/case/case/rjkf/2016/1202/78.html'
        },
        {
          src: '../../../static/img/case/soft/0.jpg',
          corpName: '项目管理系统',
          time: '2018-03-19',
          url: '/case/case/rjkf/2016/1202/79.html'
        }
      ]
    }
  },
  computed: {
    list () {
      return this.activeIndex === 0 ? this.sitelist
        : this.activeIndex === 1 ? this.applist
          : this.activeIndex === 2 ? this.wxlist
            : this.activeIndex === 3 ? this.shoplist
              : this.softlist
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
.case-page
  padding-top 120px
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
