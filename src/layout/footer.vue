<template>
  <div class="main-footer">
    <b-container  style="padding: 0">
    <!-- Stack the columns on mobile by making one full-width and the other half-width -->
      <b-row no-gutters>
        <b-col xs="12" sm="12" md="8">
          <div class="aboutus">
            <div class="head">公司简介<span>About Us</span></div>
            <div class="body">杭州新珏网络科技有限公司是一家专业从事互联网应用技术、企业信息化网络平台搭建，为企业提供网站建设、移动APP开发、微信开发、系统开发、网络优化推广等项目服务。在PHP、NET、JAVA、Flash编程，以及SQL、Oracle数据库方面，积累了丰厚的行业经验 。我们研发了互联网电子商务系统（CMS）、在线支付系统、手机网站和微信营销管理系统、办公自动化(OA)等互联网软件产品。
              <router-link to="/aboutus">详细</router-link>
            </div>
          </div>
        </b-col>
        <b-col xs='12' md='4'>
          <div class="brand">
            <div class="head">新珏一站式企业服务平台旗下战略品牌</div>
            <b-container class="body">
              <b-row no-gutters>
                <b-col sm='6'><a href="javascript:">新珏品牌管理</a></b-col>
                <b-col sm='6'><a href="javascript:">新珏天下企业服务</a></b-col>
                <b-col sm='6'><a href="javascript:">新珏知识产权</a></b-col>
                <b-col sm='6'><a href="javascript:">易汇通企业服务</a></b-col>
                <b-col sm='6'><a href="javascript:">新珏时代网络</a></b-col>
                <b-col sm='6'><a href="javascript:">鑫海虹工商资质</a></b-col>
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
                <p><i class="fa fa-fw fa-phone"></i> 联系电话:189-8945-8881</p>
                <p><i class="fa fa-fw fa-mobile-phone"></i> 联系手机:133-4004-3530</p>
                <p><i class="fa fa-fw fa-qq"></i> 联系QQ:1158881764</p>
                <p><i class="fa fa-fw fa-building"></i> 地点：浙江省杭州经济技术开发区世茂江滨商业中心2幢3单元2504室</p>
              </div>
            </div>
          </div>
        </b-col>
        <b-col sm='12' md='6'>
          <b-container fluid style="padding: 0">
            <b-row class="product">
              <b-col sm="12" md="6">
                <dt><a href="javascript:">服务</a></dt>
                <dd><router-link to="/service/#tab1">企业网站建设</router-link></dd>
                <dd><router-link to="/service/#tab2">APP/微信开发</router-link></dd>
                <dd><router-link to="/service/#tab6">软件开发</router-link></dd>
                <dd><router-link to="/service/#tab4">小程序开发</router-link></dd>
              </b-col>
              <!-- <b-col sm="12" md="6">
                <dt><a href="javascript:">案例</a></dt>
                <dd><a href="/case/scmh/">APP案例</a></dd>
                <dd><a href="/case/ydyy/">微信开发</a></dd>
                <dd><a href="/case/case/rjkf/">定制软件</a></dd>
                <dd><a href="/case/ppgw/">品牌网站</a></dd>
                <dd><a href="/case/HTML5/">电商平台</a></dd>
              </b-col>
              <b-col sm="12" md="6">
                <dt><a href="javascript:">新闻</a></dt>
                <dd><a href="/news/gsxw/">公司新闻</a></dd>
                <dd><a href="/news/jzzs/">建站知识</a></dd>
                <dd><a href="/news/ydyy/">移动应用</a></dd>
                <dd><a href="/news/hyzx/">行业新闻</a></dd>
              </b-col> -->
              <b-col sm="12" md="6">
                <dt><a href="javascript:">了解我们</a></dt>
                <dd><router-link to="/aboutus">我们是谁</router-link></dd>
                <dd><router-link to="/aboutus">我们的优势</router-link></dd>
                <dd><router-link to="/aboutus">我们的团队</router-link></dd>
                <dd><router-link to="/aboutus">办公环境</router-link></dd>
                <dd><router-link to="/aboutus">荣誉资质</router-link></dd>
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
