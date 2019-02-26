<template>
<div>
  <div class="container">
  <owlyGrid :data="contactList">
    <div slot-scope="item" style="text-align: center">
      <span class="icon white" v-html="item.icon" style="font-size: 60px;"></span>
      <h2 class="text0">{{item.style}}</h2>
      <div class="text1" v-for="i in item.info" >
        {{i}}
      </div>
    </div>
  </owlyGrid>
  </div>
</div>
  <!-- -->
</template>

<script>
export default {
  components: {

    owlyGrid: () => import('@/components/owlyGrid.vue')
  },
  data () {
    return {
      contactList: [
        {
          icon: '&#xe60e;',
          style: 'Telephone',
          info: [
            '189-8945-8881  王经理',
            '133-4004-3530  李经理'
          ]
        },
        {
          icon: '&#xe683;',
          style: 'Hours',
          info: [
            '早上8：30—下午22：30(周一至周日)'
          ]
        },
        {
          icon: '&#xe609;',
          style: 'E-mail',
          info: [
            '13340043530@163.com',
            '1158881764@qq.com'
          ]
        }
      ]
    }
  }
}
</script>

<style lang="">

</style>
