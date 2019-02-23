<template>
  <div class="solution-list">
      <div class="solution-list-item" v-for="(item, index) in 1" :key="index">
        <solutionCard></solutionCard>
      </div>
  </div>
</template>
<script>
export default {
  components: {
    solutionCard: () => import('./components/solutionCard')
  }
}
</script>

<style lang="stylus">
.solution-list
  display flex
  flex-wrap wrap
  @media screen and (max-width: 9999px)
      .solution-list-item
          width 20%

  @media screen and (max-width: 1200px)
      .solution-list-item
          width 33.3333%

  @media screen and (max-width: 992px)
      .solution-list-item
          width 50%
  @media screen and (max-width: 768px)
      .solution-list-item
          width 100%
</style>
