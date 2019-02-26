<template>
  <div>
      <slot name="header"></slot>
      <div class="owly-row">
      <div
        :class="{
          'owly-col': type == 1,
          'owly-col-2': type ==2
          }"
       v-for="(item, index) in data" :key="index">
        <slot v-bind="item"></slot>
      </div>
      </div>
      <slot name="footer"></slot>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => []
    },
    type: {
      type: [Number, String],
      default: 1
    }
  }
}
</script>

<style>
  .owly-row{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100%;
  }
  @media screen and (max-width: 9999px){
      .owly-col{
        width: 20%;
      }
  }
  @media screen and (max-width: 1200px){
      .owly-col{
        width: 33.3333%;
      }
  }

  @media screen and (max-width: 992px){
      .owly-col{
        width: 50%;
      }
  }
  @media screen and (max-width: 768px){
      .owly-col{
        width: 100%;
      }
  }
/* type 2 */
  @media screen and (max-width: 9999px){
      .owly-col-2{
        width: 20%;
      }
  }
  @media screen and (max-width: 768px){
      .owly-col-2{
        width: 50%;
      }
  }
</style>
