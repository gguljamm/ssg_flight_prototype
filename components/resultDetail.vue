<template>
  <div
    v-swiper:mySwiper="swiperOption"
    style="width: 100%;"
    ref="swiper"
    class="resultDetail"
  >
    <ul class="swiper-wrapper flightBox">
      <li class="swiper-slide">
        <result-detail-segment
          flag="0"
        ></result-detail-segment>
      </li>
      <li class="swiper-slide">
        <result-detail-segment
          flag="1"
        ></result-detail-segment>
      </li>
    </ul>
  </div>
</template>

<script>
  import ResultDetailSegment from './resultDetailSegment';

  export default {
    components: {
      ResultDetailSegment,
    },
    data() {
      return {
        swiperOption: {
          slidesPerView: 'auto',
          spaceBetween: 6,
        },
      };
    },
  };
</script>

<style lang="scss">
  .resultDetail{
    padding: 10px;
    .flightBox{
      .swiper-slide{
        width: 85%;
      }
    }
  }
</style>
