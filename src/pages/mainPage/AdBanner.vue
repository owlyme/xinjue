<template>
    <div class="ad-banner">
        <div class="ad-banner-item">
            <ad-card></ad-card>
        </div>
    </div>
</template>

<script>
import adCard from '@/components/AdCard'
export default {
  name: 'ad-banner',
  components: {
    adCard
  }
}
</script>

<style lang="stylus">
    .ad-banner
        display flex
        justify-content center
        flex-wrap wrap
        .ad-banner-item
            padding 10px
    @media screen and (max-width: 9999px)
        .ad-banner-item
            width 25%

    @media screen and (max-width: 1200px)
        .ad-banner-item
            width 33.3333%

    @media screen and (max-width: 992px)
        .ad-banner-item
            width 50%
</style>
