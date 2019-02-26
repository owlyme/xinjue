<template>
    <div class="card2-box">
      <slot>
        <div class="font-box"><span class="icon circle-font" v-html="icon"></span></div>
        <div class="title">{{title}}</div>
        <p class="text1">{{text}}</p>
      </slot>
    </div>
</template>

<script>
export default {
  props: ['icon', 'title', 'text'],
  computed: {

  },
  data () {
    return {

    }
  }
}
</script>

<style lang="stylus">
  .card2-box
    border: 1px solid #ddd;
    line-height: 22px;
    border-radius: 5px;
    box-shadow: 0 1px 1px rgba(0,0,0,.3);
    margin: 15px;
    padding: 15px;
    height: 260px;
    overflow: hidden;
    .font-box
      text-align: center;
      height 100px
      line-height 80px
      padding 10px
    .circle-font
      font-size: 60px;
      border-radius: 100%;
      background: #feb800;
      padding: 10px;
      color: #fff;
    .title
      margin-top 20px
      font-size: 16px;
      line-height: 2;
      text-align: center;
</style>
