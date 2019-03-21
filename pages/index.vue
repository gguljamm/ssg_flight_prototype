<template>
  <section class="container">
    <mobile-main></mobile-main>
  </section>
</template>

<script>
import MobileMain from '~/components/MobileMain.vue'

export default {
  components: {
    MobileMain,
  }
}
</script>

<style>
.container {
  min-height: 100vh;
}
</style>

