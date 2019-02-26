<template>
    <div class="qq-card-container">
        <a target="_blank" :href="`http://wpa.qq.com/msgrd?v=3&amp;uin=${data.qq}&amp;site=qq&amp;menu=yes`">
        <div class="card-img center-middle">
            <strong class="icon big-icon" v-html="data.icon"></strong>
        </div>
        <h1 class="card-title center-middle">{{data.title}}</h1>
        <p class="card-profile">策划、设计、前端、程序开发全方位一条龙服务充分了解企业文化、行业特点，体现企业特色.设计师一对一沟通，充分了解你的需求和想法。时刻掌握新技术动向，打造高品质网站。 </p>
        <div class="label-list">
            <button>
                点击咨询
            </button>
        </div>
        </a>
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
  props: ['data']

}
</script>

<style lang="stylus">
.qq-card-container
    background #ffffff

    &:hover .card-img .big-icon
        color #ffffff
        background #e63a3e
        box-shadow: 0 1px 5px #888888
    .card-img
        height 120px
        .big-icon
            width: 90px;
            height: 90px;
            font-size: 60px;
            padding-left: 15px;
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
        color: #666;

    .card-profile
        height 90px
        font-size: 12px;
        color: #aaa;
        padding: 0 15px;
        display: block;
        position: relative;
    .label-list
        display flex
        flex-wrap wrap
        .label-item
            text-align: center
            padding 5px
            width 50%
            span
                cursor pointer
                display block
                height 30px
                line-height 30px
                background: #eee;
            &:hover span
                background: none
</style>
