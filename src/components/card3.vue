<template>
    <div class="card3-box" :style="backgroud">
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
        backgroundImage: `url(${this.bgUrl})`
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
  .card3-box
    border: 2px solid #ddd;
    background: no-repeat right top;
    border-radius: 5px;
    padding: 15px;
    margin: 20px 0;
    width: 100%;
</style>
