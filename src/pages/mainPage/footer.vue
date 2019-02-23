<template>
  <div class="main-footer">
    <b-container  style="padding: 0">
    <!-- Stack the columns on mobile by making one full-width and the other half-width -->
      <b-row no-gutters>
        <b-col xs="12" sm="12" md="8">
          <div class="aboutus">
            <div class="head">公司简介<span>About Us</span></div>
            <div class="body">武汉汇海投资集团网络科技有限公司是一家专业从事互联网应用技术、企业信息化网络平台搭建，为企业提供网站建设、移动APP开发、微信开发、系统开发、网络优化推广等项目服务。在PHP、NET、JAVA、Flash编程，以及SQL、Oracle数据库方面，积累了丰厚的行业经验 。我们研发了互联网电子商务系统（CMS）、在线支付系统、手机网站和微信营销管理系统、办公自动化(OA)等互联网软件产品。
              <a rel="nofollow" href="/about_us/">详细</a>
            </div>
          </div>
        </b-col>
        <b-col xs='12' md='4'>
          <div class="brand">
            <div class="head">汇海一站式企业服务平台旗下战略品牌</div>
            <b-container class="body">
              <b-row>
                <b-col sm='6'><a rel="nofollow" href="javascript:">汇海品牌管理</a></b-col>
                <b-col sm='6'><a rel="nofollow" href="javascript:">汇海天下企业服务</a></b-col>
                <b-col sm='6'><a rel="nofollow" href="javascript:">汇海知识产权</a></b-col>
                <b-col sm='6'><a rel="nofollow" href="javascript:">易汇通企业服务</a></b-col>
                <b-col sm='6'><a rel="nofollow" href="javascript:">汇海时代网络</a></b-col>
                <b-col sm='6'><a rel="nofollow" href="javascript:">鑫海虹工商资质</a></b-col>
              </b-row>
            </b-container>
          </div>
        </b-col>
      </b-row>
      <b-row no-gutters class="second">
        <b-col sm='12' md='6'>
          <div class="aboutus">
            <div class="head">联系我们<span>Contant Us</span></div>
            <div class="body pull-left">
              <div class="info">
                <p><i class="fa fa-fw fa-phone"></i> 联系电话:1365-9888-291</p>
                <p><i class="fa fa-fw fa-mobile-phone"></i> 联系手机:1365-9896-487</p>
                <p><i class="fa fa-fw fa-qq"></i> 联系QQ:253652249</p>
                <p><i class="fa fa-fw fa-building"></i> 集团总部:武汉市江汉区新华路468号CFD财富中心裙楼6楼（1号商业入口上）</p>
                <p><i class="fa fa-fw fa-map-marker"></i> 武昌分部:武汉市武昌区中南路建设银行大厦1608室</p>
              </div>
            </div>
          </div>
        </b-col>
        <b-col sm='12' md='6'>
          <b-container fluid style="padding: 0">
            <b-row class="product">
              <b-col sm="6" md="3">
                <dt><a rel="nofollow" href="javascript:">服务</a></dt>
                <dd><a rel="nofollow" href="/service/#tab1">企业网站建设</a></dd>
                <dd><a rel="nofollow" href="/service/#tab2">APP/微信开发</a></dd>
                <dd><a rel="nofollow" href="/service/#tab4">软件开发</a></dd>
                <dd><a rel="nofollow" href="/service/#tab5">小程序开发</a></dd>
              </b-col>
              <b-col sm="6" md="3">
                <dt><a rel="nofollow" href="javascript:">案例</a></dt>
                <dd><a rel="nofollow" href="/case/scmh/">APP案例</a></dd>
                <dd><a rel="nofollow" href="/case/ydyy/">微信开发</a></dd>
                <dd><a rel="nofollow" href="/case/case/rjkf/">定制软件</a></dd>
                <dd><a rel="nofollow" href="/case/ppgw/">品牌网站</a></dd>
                <dd><a rel="nofollow" href="/case/HTML5/">电商平台</a></dd>
              </b-col>
              <b-col sm="6" md="3">
                <dt><a rel="nofollow" href="javascript:">新闻</a></dt>
                <dd><a rel="nofollow" href="/news/gsxw/">公司新闻</a></dd>
                <dd><a rel="nofollow" href="/news/jzzs/">建站知识</a></dd>
                <dd><a rel="nofollow" href="/news/ydyy/">移动应用</a></dd>
                <dd><a rel="nofollow" href="/news/hyzx/">行业新闻</a></dd>
              </b-col>
              <b-col sm="6" md="3">
                <dt><a rel="nofollow" href="javascript:">了解我们</a></dt>
                <dd><a rel="nofollow" href="/about_us/#page1">我们是谁</a></dd>
                <dd><a rel="nofollow" href="/about_us/#page1">我们的优势</a></dd>
                <dd><a rel="nofollow" href="/about_us/#page3">我们的团队</a></dd>
                <dd><a rel="nofollow" href="/about_us/#page5">办公环境</a></dd>
                <dd><a rel="nofollow" href="/about_us/#page6">荣誉资质</a></dd>
              </b-col>
            </b-row>
          </b-container>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  components: {

  }
}
</script>

<style lang="stylus">
  .main-footer
    background: #000;
    color: #aaa;
    padding: 20px 0;
    .head
      font-size: 20px;
      color #fff
      span
        font-size: 12px;
        margin-left: 6px;
    .body
      font-size 14px
      line-height: 24px;
    .aboutus
      // background: url(../img/foot_01.png) no-repeat right center;
      background-size: auto 100px;
      padding-right: 105px;
      margin-bottom: 20px;
      a
        color #fff
    .brand a
      display block
      height 30px
      color: #aaa;
      &:hover
        color #fff
        background #e63a3e

    .second
      border-top: 1px solid #222;
      padding-top: 20px;
      .product
        text-align right
        border-left 1px solid #222;
        a
          text-decoration: none;
        dt a
          font-size 20px
          color: #fff;
        dd a
          display block
          height 30px
          font-size 14px
          color: #aaa;
          padding-right 0
          transition all .3s
          &:hover
            padding-right 20px
</style>
