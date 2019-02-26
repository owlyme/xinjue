<template>
<owlyGrid :data="team" type="2">
    <div slot="header" class="customer-team-head">
      <h2>CUSTOMER SHOW</h2>
      <div>客户服务</div>
    </div>
    <template slot-scope="item">
      <div class="customer-card">
      <cover duration="0" :scale="0.60866" noCover>
          <img :src="item.imgSrc" />
      </cover>
      </div>
    </template>
  </owlyGrid>
</template>
<script>
export default {
  components: {
    cover: () => import('@/components/cover'),
    owlyGrid: () => import('@/components/owlyGrid')
  },
  data () {
    return {
      active: 1,
      team: [{
        imgSrc: 'http://pic31.nipic.com/20130802/13163193_145819676170_2.jpg',
        msg: '12313'
      },
      {
        imgSrc: 'http://pic31.nipic.com/20130802/13163193_145819676170_2.jpg',
        msg: '12313'
      }, {
        imgSrc: 'http://pic31.nipic.com/20130802/13163193_145819676170_2.jpg',
        msg: '12313'
      },
      {
        imgSrc: 'http://pic31.nipic.com/20130802/13163193_145819676170_2.jpg',
        msg: '12313'
      }, {
        imgSrc: 'http://pic31.nipic.com/20130802/13163193_145819676170_2.jpg',
        msg: '12313'
      }, {
        imgSrc: 'http://pic31.nipic.com/20130802/13163193_145819676170_2.jpg',
        msg: '12313'
      }]
    }
  },
  methods: {

  }
}
</script>

<style lang="stylus">
  .customer-card
    background #ffffff
    padding 10px
    transition all .5s
    &:hover
      background #eee
    img
      display block
      width 100%
      height 100%

</style>
