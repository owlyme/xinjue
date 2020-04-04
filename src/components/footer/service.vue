<template>
  <b-container fluid style="padding: 0">
    <b-row class="product">
      <b-col sm="12" md="6">
        <dt><a href="javascript:">服务</a></dt>
        <dd><router-link to="/service?tab=0">企业网站建设</router-link></dd>
        <dd><router-link to="/service?tab=1">APP/微信开发</router-link></dd>
        <dd><router-link to="/service?tab=2">软件开发</router-link></dd>
        <dd><router-link to="/service?tab=3">小程序开发</router-link></dd>
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
        <dd><router-link to="/aboutus">我们服务的客户</router-link></dd>
        <dd><router-link to="/aboutus">办公环境</router-link></dd>
        <dd><router-link to="/aboutus">荣誉资质</router-link></dd>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {

}
</script>
