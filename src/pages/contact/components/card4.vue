<template>
    <div class="qq-card-container">
        <!-- <a target="_blank" :href="`http://wpa.qq.com/msgrd?v=3&amp;uin=${data.qq}&amp;site=qq&amp;menu=yes`"> -->
        <div class="card-img center-middle">
            <strong class="icon big-icon" v-html="data.icon"></strong>
        </div>
        <h1 class="card-title center-middle">{{data.title}}</h1>
        <p class="card-profile">{{data.info}}}</p>
        <div class="label-list">
            <button class="btn btn-block btn-default">
                点击咨询
            </button>
        </div>
        <!-- </a> -->
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
    padding 10px
    border 1px solid #eee
    background #ffffff

    &:hover .card-img .big-icon
        color #1cab1c
        box-shadow: 0 1px 5px #888888
    a {
        color: #999;
        text-decoration: none;
    }
    a:hover {
        color: #0056b3;
        text-decoration: none;
    }
    .btn-default
        color: #333;
        background-color: #fff;
        border-color: #ccc;
        &:hover
            background-color: #ccc;
    .card-img
        height 120px
        .big-icon
            color #999
            width: 60px;
            height: 60px;
            font-size: 60px;
            line-height: 60px;
            border-radius: 100%;
            transition all .3s
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
