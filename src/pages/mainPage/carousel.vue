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
      imgs: [ 'http://pic31.nipic.com/20130802/13163193_145819676170_2.jpg',
        'http://pic1.nipic.com/2008-12-30/200812308231244_2.jpg',
        'http://img.bimg.126.net/photo/ZZ5EGyuUCp9hBPk6_s4Ehg==/5727171351132208489.jpg' ]
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
