<template>
  <transition name="slide-bottom-fade" mode="out-in">
    <div class="bpPopWrap" v-if="init">
      <div class="header"><button @click="$router.back()"></button>{{ title }}</div>
      <popup-date
        v-if="$route.params.popup === 'departure' || $route.params.popup === 'arrival'"
        :inputData="inputData"
        @change-date="changeDate"
      ></popup-date>
      <popup-place
        v-else-if="$route.params.popup === 'origin' || $route.params.popup === 'destination'"
      ></popup-place>
    </div>
  </transition>
</template>

<script>
import PopupDate from './date';
import PopupPlace from './place';
import Format from '~/utils/format'; // eslint-disable-line

export default {
  props: ['inputData'],
  components: {
    PopupDate,
    PopupPlace,
  },
  data() {
    const today = new Date();
    return {
      init: false,
      todayString: `${today.getFullYear()}-${Format.zeros(today.getMonth() + 1)}-${Format.zeros(today.getDate())}`,
    };
  },
  computed: {
    title() {
      if (this.$route.params.popup === 'origin') {
        return '출발지';
      } else if (this.$route.params.popup === 'destination') {
        return '도착지';
      } else if (this.$route.params.popup === 'departure') {
        return '여행날짜';
      } else if (this.$route.params.popup === 'arrival') {
        return '여행날짜';
      } else if (this.$route.params.popup === 'option') {
        return '검색 조건'
      }
      return '';
    },
  },
  methods: {
    changeDate(deptDate, retnDate) {
      this.inputData.departure = deptDate;
      this.inputData.arrival = retnDate;
      this.$router.back();
    },
  },
  beforeDestroy() {
    window.document.body.style.overflowY = '';
    window.document.documentElement.style.overflowY = '';
  },
  mounted() {
    window.document.body.style.overflowY = 'hidden';
    window.document.documentElement.style.overflowY = 'hidden';
    setTimeout(() => {
      this.init = true;
    }, 10);
  },
};
</script>

<style lang="scss">
  .bpPopWrap{
    padding-top: 44px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #FFF;
    z-index: 20;
    .header{
      width: 100%;
      height: 44px;
      border-bottom: 1px solid #dfdfdf;
      letter-spacing: 0.6px;
      font-size: 16px;
      line-height: 44px;
      top: 0;
      left: 0;
      text-align: center;
      position: absolute;
      background-color: #FFF;
      z-index: 10;
      > button{
        position: absolute;
        left: 0;
        top: 0;
        height: 44px;
        width: 44px;
        &:before{
          content: '';
          background: url('http://static.ssgcdn.com/ui/m_ssg/img/com_v2/sp_top_cate.png') 0 0 no-repeat;
          display: inline-block;
          background-size: 100px 100px;
          width: 22px;
          height: 20px;
          vertical-align: middle;
        }
      }
    }
  }
</style>
