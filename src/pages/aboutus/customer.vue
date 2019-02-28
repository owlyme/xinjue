<template>
<owlyGrid :data="team" type="2">
    <div slot="header" class="customer-team-head">
      <h2>CUSTOMER SHOW</h2>
      <div>客户服务</div>
    </div>
    <template slot-scope="item">
      <div class="customer-card">
      <cover duration="0" :scale="0.60866" noCover>
          <img class="img1" :src="item.imgSrc" />
          <img class="img2" :src="item.imgSrc1" />
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
      team: [
        {
          imgSrc: 'http://www.hhjtwl.com/templets/hhwl/jpg/11.jpg',
          imgSrc1: 'http://www.hhjtwl.com/templets/hhwl/jpg/11-1.jpg'
        },
        {
          imgSrc: 'http://www.hhjtwl.com/templets/hhwl/jpg/13.jpg',
          imgSrc1: 'http://www.hhjtwl.com/templets/hhwl/jpg/13-1.jpg'
        },

        {
          imgSrc: 'http://www.hhjtwl.com/templets/hhwl/jpg/15.jpg',
          imgSrc1: 'http://www.hhjtwl.com/templets/hhwl/jpg/15-1.jpg'
        },
        {
          imgSrc: 'http://www.hhjtwl.com/templets/hhwl/jpg/19.jpg',
          imgSrc1: 'http://www.hhjtwl.com/templets/hhwl/jpg/19-1.jpg'
        },
        {
          imgSrc: 'http://www.hhjtwl.com/templets/hhwl/jpg/14.jpg',
          imgSrc1: 'http://www.hhjtwl.com/templets/hhwl/jpg/14-1.jpg'
        },
        {
          imgSrc: 'http://www.hhjtwl.com/templets/hhwl/jpg/17.jpg',
          imgSrc1: 'http://www.hhjtwl.com/templets/hhwl/jpg/17-1.jpg'
        },
        {
          imgSrc: 'http://www.hhjtwl.com/templets/hhwl/jpg/18.jpg',
          imgSrc1: 'http://www.hhjtwl.com/templets/hhwl/jpg/19-1.jpg'
        },
        {
          imgSrc: 'http://www.hhjtwl.com/templets/hhwl/jpg/2.jpg',
          imgSrc1: 'http://www.hhjtwl.com/templets/hhwl/jpg/2-2.jpg'
        },
        {
          imgSrc: 'http://www.hhjtwl.com/templets/hhwl/jpg/3.jpg',
          imgSrc1: 'http://www.hhjtwl.com/templets/hhwl/jpg/3-3.jpg'
        },
        {
          imgSrc: 'http://www.hhjtwl.com/templets/hhwl/jpg/5.jpg',
          imgSrc1: 'http://www.hhjtwl.com/templets/hhwl/jpg/5-5.jpg'
        },
        {
          imgSrc: 'http://www.hhjtwl.com/templets/hhwl/jpg/4.jpg',
          imgSrc1: 'http://www.hhjtwl.com/templets/hhwl/jpg/4-4.jpg'
        },
        {
          imgSrc: 'http://www.hhjtwl.com/templets/hhwl/jpg/6.jpg',
          imgSrc1: 'http://www.hhjtwl.com/templets/hhwl/jpg/6-6.jpg'
        },
        {
          imgSrc: 'http://www.hhjtwl.com/templets/hhwl/jpg/7.jpg',
          imgSrc1: 'http://www.hhjtwl.com/templets/hhwl/jpg/7-7.jpg'
        },
        {
          imgSrc: 'http://www.hhjtwl.com/templets/hhwl/jpg/8.jpg',
          imgSrc1: 'http://www.hhjtwl.com/templets/hhwl/jpg/8-8.jpg'
        },
        {
          imgSrc: 'http://www.hhjtwl.com/templets/hhwl/jpg/9.jpg',
          imgSrc1: 'http://www.hhjtwl.com/templets/hhwl/jpg/9-9.jpg'
        }
      ]
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
    img
      display block
      width 100%
      height 100%
    .img1
      display block
    .img2
      display none
    &:hover
      background #eee
      .img1
        display none
      .img2
        display block

</style>
