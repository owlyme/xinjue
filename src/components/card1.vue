<template>
    <div class="card1-box" :style="backgroud">
      <slot></slot>
    </div>
</template>

<script>
export default {
  props: {
    bgUrl: {
      type: String,
      default: () => ''
    },
    bgColor: {
      type: String,
      default: () => '#fff'
    }
  },
  computed: {
    backgroud () {
      return {
        background: `url(${this.bgUrl}) no-repeat 10px 15px ${this.bgColor}`
      }
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="stylus">
  .card1-box
    min-height: 150px;
    padding-left: 120px;
    color: #fff;
    h1
      padding-top: 20px;
      font-size: 24px;
      font-weight: 400;
    p
      line-height 24px
    h2
      font-weight: 400;
      font-size: 18px;
      color: #666;
    p.light
      color: #666;
</style>
