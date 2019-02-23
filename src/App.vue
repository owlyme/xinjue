<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {

    }
  },
  components: {

  },
  created () {
  },
  mounted () {

  },
  methods: {

  }
}
</script>

<style>
  @font-face {
    font-family: 'iconfont';  /* project id 1047474 */
    src: url('//at.alicdn.com/t/font_1047474_0x1d4y4rjy89.eot');
    src: url('//at.alicdn.com/t/font_1047474_0x1d4y4rjy89.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_1047474_0x1d4y4rjy89.woff2') format('woff2'),
    url('//at.alicdn.com/t/font_1047474_0x1d4y4rjy89.woff') format('woff'),
    url('//at.alicdn.com/t/font_1047474_0x1d4y4rjy89.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_1047474_0x1d4y4rjy89.svg#iconfont') format('svg');
  }
  .icon {
    font-family: 'iconfont';
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .center-middle {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #app{
    background: #f5f5f5;
  }
</style>
