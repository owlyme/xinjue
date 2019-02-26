<template>
  <b-container>
    <b-row>
      <b-col :offset-md="index === 0 ? 2 : 0" class="padding5"
        sm="6" md="2" v-for="(item, index) in caseList" :key="index">
        <grow-border>
          <div class="center-middle" style="height: 30px">{{item}}</div>
        </grow-border>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import growBorder from '@/components/growBorder'
export default {
  name: 'main-title2',
  components: {
    growBorder
  },
  data () {
    return {
      caseList: [
        '品牌网站',
        'App开发',
        '微信开发',
        '电商平台'
      ]
    }
  }
}
</script>

<style lang="stylus">

</style>
