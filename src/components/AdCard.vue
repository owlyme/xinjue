<template>
    <div refs="box" class="ad-card">
        <!--  -->
        <div ref="adimg" class="ad-card-img" :style="style">
            <img :src="info.src" alt="">
        </div>
        <div class="ad-card-info">
            <div class="ad-card-name">{{info.corpName}}</div>
            <div class="ad-card-time">{{info.time}}</div>
            <div class="ad-card-link" @click="goCorpPage">
                <span class="icon">&#xe615;</span>
            </div>
        </div>
    </div>
</template>

<script>
import windowResize from '@/utils/domEvent.js'
export default {
  name: 'transfrom-border',
  props: {
    color: {
      type: String,
      default: () => '#fff'
    },
    bgColor: {
      type: String,
      default: () => '#f00'
    }
  },
  data () {
    return {
      info: {
        src: 'http://pic31.nipic.com/20130802/13163193_145819676170_2.jpg',
        corpName: '新珏',
        time: '2019-01-12',
        url: 'www.badi.com'
      },
      style: {}
    }
  },
  mounted () {
    this.imgHeight()
    windowResize(this.imgHeight)
  },
  methods: {
    imgHeight () {
      let width = this.$refs.adimg.getBoundingClientRect().right - this.$refs.adimg.getBoundingClientRect().left
      let height = width / 1.481 + 'px'
      this.style = {height: height}
    },
    goCorpPage (url) {
      window.location.href = 'http://www.baidu.com'
    }
  }
}
</script>

<style lang="stylus">
    .ad-card
        padding 2px
        position relative
        overflow hidden

        &:hover
            .ad-card-info
                background: #e63a3e
                padding: 10px 30px;
            .ad-card-img img
                transform scale(1.3)
            .ad-card-link
                right 45px
        .ad-card-img
            width 100%
            overflow hidden
            img
                left 0px
                top 0px
                transition: all 1s ease 0s;
                width 100%
                height 100%
        .ad-card-info
            position relative
            background: #fff;
            padding: 10px 15px;
            transition: all .5s ease 0s;
            .ad-card-name
                overflow hidden
                height 32px
            .ad-card-time
                height 20px
        .ad-card-link
            text-align center
            position: absolute;
            right: 25px;
            bottom: 20px;
            font-size: 16px;
            line-height: 30px;
            width: 32px;
            height: 32px;
            color: #ccc;
            border: 1px solid #eee;
            transition: all .5s ease 0s;
</style>
