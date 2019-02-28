<template>
    <div class="about-page">
      <main-header nofixed></main-header>
      <div class="info1">
        <div class="tit"> 互联网整体解决方案服务商 </div>
        <div class="intro">
          <div> 杭州新珏科技有限公司专业从事互联网应用技术、企业信息化网络平台搭建；</div>
          <div>为客户提供网站开发、移动APP开发、微信开发、小程序、系统开发等方面服务。</div>
          <div>新珏向企业客户提供一站式的互联网整体解决方案</div>
        </div>
        <number></number>
      </div>
      <div style="background: #fff">
        <div class="container">
          <div class="profile-info">
            <div class="title">
              <h1 class="en">WHO WE ARE</h1>
              <h1>我们是谁</h1>
            </div>
            <div class="title-sm">
              <h2>杭州新珏投资科技有限公司</h2>
              <h3 class="fnw100">专注于提供互联网络与互动产品解决方案</h3>
            </div>
            <p>杭州新珏投资科技有限公司是一家专业从事互联网应用技术、企业信息化网络平台搭建，为企业提供品牌网站建设、移动APP开发、微信开发、微信小程序、系统研发、等项目服务。我们研发了互联网电子商务系统（CMS）、在线支付系统、手机网站和微信营销管理系统、办公自动化(OA)等互联网软件产品。
              新珏基于自己开发的"云平台"在国内率先开创了信息化服务模式，向企业客户提供一站式的互联网整体解决方案。
            </p>
            <p>
              杭州新珏科技专注定制软件开发，IOS移动端开发、安卓移动端开发，UE、UI互动实现、智能硬件对接app开发、教育app(线上报名抢单授课，视频教学，培训入驻)金融软件（股票，基金，债券,P2P金融平台）、直销软件（双轨、矩阵、级差、对碰，PK）、商城（B2B ,B2C,B2B2C,O2O,）、O2O移动开发（类似美团，滴滴，外卖、洗车、美甲、外卖、租车、约饭、直播、等平台），在AI场景人工智能版块支持语音，面部，虹膜，指纹等识别，以及5G,RFID,大数据，数据分析，可视化等，无论是功能应用规划/架构及界面搭建/数据操作和储存/客户端业务解析/页面跳转，皆可为用户提供具有高执行力、高安全性、高稳定性的技术支持。
            </p>
            <p>
              兼容平台：Mac、Windows、Linux、iOS、Android、Windows平板。
            </p>
            <p>
              开发语言：java、.Net、PHP、jsp、javascript、C/C++、object c等。
            <p>
              数据库：Mysql, SQL server，MongoDB，Oracle，DB2， PostgreSQL，Informix，Syase等。
            </p>
          </div>
          <!-- <team style="margin: 60px 0"></team> -->
          <customer style="margin: 60px 0 0"></customer>
          <div>

          </div>
        </div>
      </div>
      <main-footer>
        <footerC class="visible-sm-block text-center"></footerC>
        <footerCr></footerCr>
      </main-footer>

    </div>

</template>

<script>
export default {
  name: 'about-page',
  components: {
    mainHeader: () => import('@/layout/header'),
    number: () => import('./number'),
    team: () => import('./team'),
    customer: () => import('./customer'),
    mainFooter: () => import('@/layout/footer'),
    footerC: () => import('@/components/footer/contact'),
    footerCr: () => import('@/components/footer/copyRight')
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
  .about-page
    background: url(http://www.hhjtwl.com/templets/hhwl/img/wallpaper1_2.jpg) center  no-repeat fixed;

    .info1
      text-align center
      padding 140px 0 40px
      background rgba(0,0,0,.4)
      .tit
        color #ffffff
        font-size 24px
        height 52px
      .intro
        font-size 14px
        line-height 24px
        color #aaa
    .profile-info
      .title, .title-sm
        margin 30px 0
      h1
        font-size 32px
        &.en
          color #ccc
      h2
        font-size 24px
      h3
        font-size: 16px;
        color: #ff8b25;
      p
        font-size 12px
        color #aaaaaa
        line-height 24px
</style>
