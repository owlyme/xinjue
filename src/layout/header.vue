<template>
    <b-navbar
      :style="{positon: nofixed ? 'relative' : ''}"
      class="main-page-header"
      :class="{'small': showToggle,
               'big': !showToggle
               }"
      toggleable="md"
      :type="showToggle ? 'light' : ''"
      :variant="showToggle  ? 'light' : ''" >
      <b-navbar-brand href="#" class="name">新珏科技</b-navbar-brand>

      <b-navbar-toggle target="nav_collapse" />

      <b-collapse is-nav id="nav_collapse">
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#">
              <grow height="1" :bgColor="growBg" :color="growColor" class='nav-item'>
                <router-link class="nav-item-text" to="/">主页</router-link>
              </grow>
          </b-nav-item>
          <b-nav-item href="#" >
              <grow height="1" :bgColor="growBg" :color="growColor" class='nav-item'>
                  <router-link class="nav-item-text" to="/aboutus">关于我们</router-link>
              </grow>
          </b-nav-item>
          <b-nav-item href="#" >
              <grow height="1" :bgColor="growBg" :color="growColor" class='nav-item'>
                  <router-link class="nav-item-text" to="/service">服务项目</router-link>
              </grow>
          </b-nav-item>
          <b-nav-item href="#" >
              <grow height="1" :bgColor="growBg" :color="growColor" class='nav-item'>
                  <router-link class="nav-item-text" to="/contact">联系我们</router-link>
              </grow>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
</template>

<script>
import windowResize from '@/utils/domEvent.js'
export default {
  name: 'main-header',
  props: {
    nofixed: {
      type: Boolean,
      default: false
    }
  },
  components: {
    grow: () => import('@/components/grow')
  },
  data () {
    return {
      srcollTop: 0,
      style: {},
      clientWidth: document.body.clientWidth
    }
  },
  computed: {
    growBg () {
      return this.showToggle ? '#000' : '#fff'
    },
    growColor () {
      return this.showToggle ? '#000' : '#fff'
    },
    showToggle () {
      return this.srcollTop > 80 || this.clientWidth < 768
    }
  },
  mounted () {
    window.document.addEventListener('scroll', () => {
      this.srcollTop = document.documentElement.scrollTop
    })
    windowResize(() => {
      this.clientWidth = document.body.clientWidth
    })
  },
  methods: {

  }
}
</script>

<style lang="stylus">
  .main-page-header
    position fixed
    z-index 10000
    width 100%
    top 0
    left 0
    font-size 12px
    transition all .3s
    &.big
      padding 20px
      background rgba(0,0,0,.4)
      .name, .nav-item-text
        color #fff
    &.small
      padding 0 10px
      background #f8f8f8
      .name
        color #000
      .nav-item-text
        color #a3a3a3
        &:hover
          color #000
      .ml-auto
        text-align center
    .navbar-toggler
      margin-top: 8px;
      margin-right: 15px;
      margin-bottom: 8px;
      .navbar-toggler-icon
          display: inline-block;
          width: 1em;
          height: 1em;
          vertical-align: middle;
          content: "";
          background-size: 100% 100%;

</style>
