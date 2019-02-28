<template>
    <div>
        <vue-flux :imgs="imgs"></vue-flux>
    </div>
</template>

<script>

export default {
  name: 'carousel',
  components: {
    vueFlux: () => import('@/components/vueFlux')
  },
  data () {
    return {
      imgs: [ '../../static/img/mainpage/banner1.jpeg',
        '../../static/img/mainpage/banner2.jpeg',
        '../../static/img/mainpage/banner3.jpeg' ]
    }
  },
  mounted () {

  },
  methods: {

  }

}
</script>

<style lang="stylus">

</style>
