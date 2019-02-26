<template>
<owlyGrid :data="team" type="2">
    <div slot="header" class="team-head">
      <b-row>
        <b-col><h2>MY TEAM</h2></b-col>
      </b-row>
      <b-row>
        <b-col> <h2>精英团队</h2></b-col>
        <b-col>
          <div>
            <span class="" :class="{'active-btn': active===1}" @click="select(1)">技术核心</span>
            <span class="" :class="{'active-btn': active===2}" @click="select(2)">商务精英</span>
          </div>
        </b-col>
      </b-row>
    </div>
    <template slot-scope="item">
      <cover duration="0" bgColor="#000">
        <img :src="item.imgSrc" alt="">
        <template slot="move">
            <div class="team-member">
                <span>{{item.msg}}</span>
            </div>
        </template>
      </cover>
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
      team: [],
      team1: [{
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
      }],
      team2: [{
        imgSrc: 'http://pic31.nipic.com/20130802/13163193_145819676170_2.jpg',
        msg: '222222s'
      },
      {
        imgSrc: 'http://pic31.nipic.com/20130802/13163193_145819676170_2.jpg',
        msg: '222222s'
      }, {
        imgSrc: 'http://pic31.nipic.com/20130802/13163193_145819676170_2.jpg',
        msg: '222222s'
      },
      {
        imgSrc: 'http://pic31.nipic.com/20130802/13163193_145819676170_2.jpg',
        msg: '222222s'
      }, {
        imgSrc: 'http://pic31.nipic.com/20130802/13163193_145819676170_2.jpg',
        msg: '222222s'
      }, {
        imgSrc: 'http://pic31.nipic.com/20130802/13163193_145819676170_2.jpg',
        msg: '222222s'
      }
      ]
    }
  },
  created () {
    this.team = this.team1
  },
  mounted () {

  },
  methods: {
    select (index) {
      this.active = index
      index === 1 ? (this.team = this.team1) : (this.team = this.team2)
    }
  }
}
</script>

<style lang="stylus">
  .team-head
    .active-btn
      color #fff
      line-height: 40px;
      background: #000;
    span
      float: left;
      width: 50%;
      text-align: center;
      line-height: 40px;
      background: #eee;
      color #000
  .team-member
    width 100%
    height 100%
    color #fff
    display flex
    align-items center
    justify-content center
</style>
