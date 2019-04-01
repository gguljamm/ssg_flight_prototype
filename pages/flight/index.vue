<template>
  <div>
    <flight-wrapper :inputData="inputData"></flight-wrapper>
    <pop-wrapper v-if="$route.params.popup" :inputData="inputData"></pop-wrapper>
  </div>
</template>

<script>
import FlightWrapper from '~/components/flightWrapper.vue';
import popWrapper from '~/components/popWrapper.vue';

export default {
  components: {
    FlightWrapper,
    popWrapper,
  },
  data() {
    return {
      inputData: {
        origin: {
          name: '서울',
          code: 'SEL',
        },
        destination: {
          name: '파리',
          code: 'PAR',
        },
        departure: '',
        arrival: '',
      },
    };
  },
  created() {
    if (this.$route.params.popup) {
      this.$router.replace({
        params: {
          popup: undefined,
        },
      });
    }
  },
};
</script>

<style lang="scss"></style>
