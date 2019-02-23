<template>
  <b-container fluid style="padding: 0">
    <!-- Stack the columns on mobile by making one full-width and the other half-width -->
    <b-row>
      <b-col sm="6" md="3" v-for="(item, index) in 4" :key="index">
        <news-card></news-card>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
export default {
  components: {
    newsCard: () => import('./components/newsCard')
  }
}
</script>

<style>

</style>
