<template>
  <transition name="slide-bottom-fade" mode="out-in">
    <div class="bpPopWrap" v-if="init">
      <div class="header">
        <button v-show="$route.params.popup !== 'detail'" @click="$router.back()"></button>
        {{ title }}
        <button v-show="$route.params.popup === 'detail'" @click="$router.back()"></button>
      </div>
      <popup-date
        v-if="$route.params.popup === 'departure' || $route.params.popup === 'arrival'"
        :inputData="inputData"
        @change-date="changeDate"
      ></popup-date>
      <popup-place
        v-else-if="$route.params.popup === 'origin' || $route.params.popup === 'destination'"
      ></popup-place>
      <div
        class="scrollContainer"
        v-else-if="$route.params.popup === 'detail'"
      >
        <popup-result-detail></popup-result-detail>
      </div>
    </div>
  </transition>
</template>

<script>
import PopupDate from './date';
import PopupPlace from './place';
import PopupResultDetail from './resultDetail';
import Format from '~/utils/format'; // eslint-disable-line

export default {
  props: ['inputData'],
  components: {
    PopupDate,
    PopupPlace,
    PopupResultDetail,
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
      } else if (this.$route.params.popup === 'detail') {
        return '항공권 상세정보';
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
      > button:first-of-type{
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
      > button:nth-of-type(2){
        position: absolute;
        right: 0;
        top: 0;
        height: 44px;
        width: 44px;
        &:after{
          content: '';
          position: absolute;
          left: 50%;
          top: 50%;
          width: 1px;
          height: 22px;
          margin-top: -11px;
          background-color: #252524;
          -webkit-transform: rotate(45deg);
          transform: rotate(45deg);
        }
        &:before{
          content: '';
          position: absolute;
          left: 50%;
          top: 50%;
          width: 1px;
          height: 22px;
          margin-top: -11px;
          background-color: #252524;
          -webkit-transform: rotate(-45deg);
          transform: rotate(-45deg);
        }
      }
    }
    .scrollContainer{
      top: 44px;
      bottom: 0;
      left: 0;
      right: 0;
      overflow-y: auto;
      overflow-x: hidden;
      -webkit-overflow-scrolling: touch;
      background-color: #f2f2f2;
      position: absolute;
    }
  }
</style>
