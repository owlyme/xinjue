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
    src: url('//at.alicdn.com/t/font_1047474_749f70ybt0s.eot');
    src: url('//at.alicdn.com/t/font_1047474_749f70ybt0s.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_1047474_749f70ybt0s.woff2') format('woff2'),
    url('//at.alicdn.com/t/font_1047474_749f70ybt0s.woff') format('woff'),
    url('//at.alicdn.com/t/font_1047474_749f70ybt0s.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_1047474_749f70ybt0s.svg#iconfont') format('svg');
  }
  .icon {
    font-family: 'iconfont';
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  li {
    list-style: none;
  }
  a {
    text-decoration: none;
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
