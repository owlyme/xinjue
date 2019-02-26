<template>
    <div class="number">
      <b-row>
        <b-col sm='12' offset-md="2" md="2">
          <count :endVal="33333">
            <div>年</div>
          </count>
        </b-col>
        <b-col sm='12' md="4">
          <count :endVal="33333">
            <div>余件精品案例</div>
          </count>
        </b-col>
        <b-col sm='12' md="2">
          <count :endVal="33333">
            <div>余家企业</div>
          </count>
        </b-col>
      </b-row>
    </div>
</template>

<script>
export default {
  components: {
    count: () => import('@/components/number')
  },
  data () {
    return {

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
