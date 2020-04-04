<template>

  <div :class="{'text-center': showImg}">
  <!-- <div class="center-middle"><img src="http://www.hhjtwl.com/images/123.png"> 浙ICP备19004208号</div> -->
  <div :class="{'padding10': showImg}"> ©2015-2019 杭州新珏科技有限公司 版权所有
   <a style="color: #ffffff;" href="http://www.beian.miit.gov.cn/" target="blank">浙ICP备19004208号</a ></div>
  <img v-if='showImg' style='max-width: 100%' src="http://www.hhjtwl.com/templets/hhwl/jpg/footbar.jpg" />
  </div>
</template>

<script>
export default {
  props: {
    showImg: {
      type: Boolean,
      default: true
    }
  }
}
</script>
