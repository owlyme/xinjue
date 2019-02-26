<template>
  <b-row class="owly-row">
    <b-col
      :xs='xs' :sm='sm' :md='md' :lg='lg'
      v-for="(item, index) in data" :key="index">
      <slot v-bind="item"></slot>
    </b-col>
  </b-row>
</template>
<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => []
    },
    xs: {
      type: [String, Number],
      default: 0
    },
    sm: {
      type: [String, Number],
      default: 0
    },
    md: {
      type: [String, Number],
      default: 0
    },
    lg: {
      type: [String, Number],
      default: 0
    },
    gutters: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style>

</style>
