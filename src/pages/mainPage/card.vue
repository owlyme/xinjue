<template>
    <div class="card-container">
        <div class="card-img center-middle"><strong class="icon big-icon">&#xe6a0;</strong></div>
        <h1 class="card-title center-middle">企业网站建设</h1>
        <p class="card-profile"> 策划、设计、前端、程序开发全方位一条龙服务充分了解企业文化、行业特点，体现企业特色.设计师一对一沟通，充分了解你的需求和想法。时刻掌握新技术动向，打造高品质网站。 </p>
        <div class="label-list">
            <div class="label-item">
                <grow>
                    <a>1</a>
                </grow>
            </div>
             <div class="label-item">
                <grow>
                    <a>1</a>
                </grow>
            </div>
             <div class="label-item">
                <grow>
                    <a>1</a>
                </grow>
            </div>
             <div class="label-item">
                <grow>
                    <a>1</a>
                </grow>
            </div>
        </div>
    </div>
</template>

<script>
import grow from '@/components/grow'
export default {
  name: 'main-page',
  components: {
    grow
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
.card-container
    margin 10px 20px
    background #ffffff

    &:hover .card-img .big-icon
        color #ffffff
        background #e63a3e
        box-shadow: 0 1px 5px #888888
    .card-img
        height 120px
        .big-icon
            font-size: 60px;
            padding: 15px;
            border-radius: 100%;
            transition all .1s
            &:hover
                color #ffffff
                background #e63a3e
                box-shadow: 0 1px 5px #888888
    .card-title
        height 64px
        font-size: 16px;
        color: #111;
        padding: 1em 0;
    .card-profile
        height 90px
        color: #666;
        display: block;
        position: relative;
    .label-list
        display flex
        flex-wrap wrap
        .label-item
            text-align: center
            padding 5px
            width 50%
            a
                cursor pointer
                display block
                height 30px
                background: #eee;
        &:hover a
            background: none
</style>
