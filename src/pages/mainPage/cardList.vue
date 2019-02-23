<template>
  <b-container fluid style="padding: 0">
    <!-- Stack the columns on mobile by making one full-width and the other half-width -->
    <b-row no-gutters>
      <b-col sm="6" md="3" v-for="(item, index) in 1" :key="index">
        <main-card></main-card>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
export default {
  components: {
    mainCard: () => import('./components/card')
  }
}
</script>

<style>

</style>
