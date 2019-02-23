<template>
<div class="main-page-header big"
    :class="{'small': srcollTop > 80 }"
    :style="style">
    <!-- <header7 >
        <div slot="left" class="name">
            新珏科技
        </div>
        <template slot="right">
            <grow height="2" :bgColor="growBg" :color="growColor" class='nav-item'>
                <div class="nav-item-text">主页</div>
            </grow>
            <grow height="2" :bgColor="growBg" :color="growColor" class='nav-item'>
                <div class="nav-item-text">关于我们</div>
            </grow>
        </template>
    </header7> -->
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#">NavBar</b-navbar-brand>

        <b-navbar-toggle target="nav_collapse" />

        <b-collapse is-nav id="nav_collapse">
          <b-navbar-nav>
            <b-nav-item href="#">Link</b-nav-item>
            <b-nav-item href="#" disabled>Disabled</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search" />
              <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
            </b-nav-form>

            <b-nav-item-dropdown text="Lang" right>
              <b-dropdown-item href="#">EN</b-dropdown-item>
              <b-dropdown-item href="#">ES</b-dropdown-item>
              <b-dropdown-item href="#">RU</b-dropdown-item>
              <b-dropdown-item href="#">FA</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown right>
              <!-- Using button-content slot -->
              <template slot="button-content"><em>User</em></template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Signout</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>

</div>
</template>

<script>

export default {
  name: 'main-header',
  components: {
    header7: () => import('@/layout/header7'),
    grow: () => import('@/components/grow')
  },
  data () {
    return {
      srcollTop: 0,
      style: {}
    }
  },
  computed: {
    growBg () {
      return this.srcollTop > 80 ? '#000' : '#fff'
    },
    growColor () {
      return this.srcollTop > 80 ? '#000' : '#fff'
    }
  },
  mounted () {
    window.document.addEventListener('scroll', () => {
      this.srcollTop = document.documentElement.scrollTop
    })
  },
  methods: {

  }
}
</script>

<style lang="stylus">
  .main-page-header
    position fixed
    z-index 100
    width 100%
    top 0
    left 0
    color: #555
    font-size 12px
    transition all .3s
    padding 0 20px
    &.big
      height 80px
      background rgba(0,0,0,.4)
      .name
        color #fff
    &.small
      height 60px
      padding 0 10px
      background #f8f8f8
      .nav-item-text
        color #a3a3a3
        &:hover
          color #000
  .nav-item
    background: 0;
    color: #fff;
    margin 0 10px
    padding  0 10px
    cursor pointer

</style>
