<template>
    <div class="contact-page">

      <div class="paddingTop">
        <div class="bgWhite">
        <mainTitle >
        <h1 class="fn24 color333 fnw100">CONTACT US</h1>
        <h2 >联系我们</h2>
        <p class="text1">我们的成长依靠着你们的关注和支持</p>
        <p class="text1">希望您能多给我们提出宝贵的意见，让我们做得更好</p>
        <p class="text1">您可以通过以下方式与我们联系</p>
        </mainTitle>

        <contactList></contactList>

        <qqList></qqList>
        </div>
      </div>
    </div>

</template>

<script>
export default {
  name: 'contact-page',
  components: {
    mainTitle: () => import('@/components/title.vue'),
    contactList: () => import('./contactList'),
    qqList: () => import('./qqList')
  },
  data () {
    return {
      contactList: [
        {

        },
        {

        }
      ]
    }
  },
  mounted () {

  },
  methods: {

  }

}
</script>

<style lang="stylus">
  .contact-page
    background: url(http://www.hhjtwl.com/templets/hhwl/jpg/banner-contact.jpg)   no-repeat fixed;
    background-color: #fff;
    .paddingTop
      padding-top 260px
</style>
