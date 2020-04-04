<template>
  <div id="app">
      <mainHeader></mainHeader>
      <div class="auto-top">
        <router-view></router-view>
      </div>

      <main-footer class="mgtop30">
        <template v-if="$route.name === 'main'">
          <footerA></footerA>
          <b-container>
          <b-row class="second">
            <b-col>
              <footerC></footerC>
              <footerCr :showImg="false"></footerCr>
            </b-col>
            <b-col class="visible-sm-block"><footerS></footerS></b-col>
          </b-row>

          </b-container>
        </template>
        <template v-else>
          <footerC class="visible-sm-block text-center"></footerC>
          <footerCr></footerCr>
        </template>
      </main-footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    mainHeader: () => import('@/layout/header'),
    mainFooter: () => import('@/layout/footer'),
    footerA: () => import('@/components/footer/about'),
    footerC: () => import('@/components/footer/contact'),
    footerS: () => import('@/components/footer/service'),
    footerCr: () => import('@/components/footer/copyRight')
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="stylus">
@import "~@/assets/css/index.styl"
</style>
