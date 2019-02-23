<template>
    <div class="main-page">
        <main-header></main-header>
        <carousel></carousel>
        <main-title></main-title>
        <main-card></main-card>
        <main-title2></main-title2>
        <ad-banner></ad-banner>
        <view-more></view-more>
        <solutionCard></solutionCard>
    </div>
</template>

<script>
export default {
  name: 'main-page',
  components: {
    mainHeader: () => import('./header'),
    carousel: () => import('./carousel'),
    mainTitle: () => import('./title'),
    mainTitle2: () => import('./title2'),
    mainCard: () => import('./card'),
    adBanner: () => import('./AdBanner'),
    viewMore: () => import('@/components/translationUp'),
    solutionCard: () => import('./solutionCard')
  },
  data () {
    return {
    }
  },
  mounted () {

  },
  methods: {

  }

}
</script>

<style>

</style>
