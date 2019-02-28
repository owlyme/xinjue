<template>
  <div ref="modal-com" class="modal-box" @click="close" v-if="value">
    <div class="modal-inner">
    <slot>

    </slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    close () {
      this.$emit('input', false)
    }
  }
}
</script>

<style lang="stylus">
.modal-box
  position fixed
  left 0
  top 0
  width 100%
  height 100%
  z-index 20000
  background rgba(0,0,0,.4)
  .modal-inner
    position absolute
    left 50%
    top 50%
    transform  translate(-50%, -50%)

</style>
