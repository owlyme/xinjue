<template>
  <div>
    <div class="counter-name">
      <countTo class="counter" :startVal='startVal' :endVal='endVal' :separator="''" :duration='3000'></countTo>
      <slot></slot>
    </div>
  </div>
</template>

<script>
// https://www.cnblogs.com/tuspring/p/9801603.html
import countTo from 'vue-count-to'
export default {
  components: { countTo },
  data () {
    return {
      startVal: 0
      // endVal: 2017
    }
  },
  props: {
    endVal: {
      type: Number,
      default: 2017
    }
  }
}
</script>

<style>
  .counter {
    font-size: 64px;
    font-family: Roboto;
    font-weight: 100;
    color: #fff;
  }
  .counter-name{
    text-align: center;
    font-size: 14px;
    color: #fff;
  }
</style>
