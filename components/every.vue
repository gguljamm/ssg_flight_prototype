<template>
  <div class="every">
    <div>
      <div>
        <button>
          <div>인천(ICN)</div>
          <div>출발지 변경가능</div>
        </button>
      </div>
      <div class="flex">
        <button>출발날짜</button>
        <button>도착날짜</button>
      </div>
      <div class="flex">
        <button>
          <div>일반석</div>
          <div>좌석등급</div>
        </button>
        <button>
          <div>성인 1명</div>
          <div>탑승객</div>
        </button>
      </div>
      <div>
        <div>{{ format.numberFormat(price.value[0]) }}원 - {{ format.numberFormat(price.value[1]) }}원</div>
        <div>예산범위</div>
      </div>
      <div>
        <vue-slider @drag-end="sliderChange" ref="slider1" v-bind="price" v-model="price.value"></vue-slider>
      </div>
      <button @click="$router.push('/result')">예산에 맞는 여행지 검색</button>
    </div>
    <button>
      <div></div>
      <div>지도로 검색</div>
      <div>위치와 가격으로 한눈에 가고싶은 여행지를 알아보세요.</div>
    </button>
  </div>
</template>

<script>
  import Format from '~/utils/format'

  export default {
    data() {
      return {
        format: Format,
        price: {
          value: [
            0,
            5000000,
          ],
          width: '100%',
          height: 4,
          dotSize: 26,
          interval: 1000,
          min: 0,
          max: 5000000,
          disabled: false,
          show: false,
          tooltip: 'none',
          bgStyle: {
            backgroundColor: '#f2f2f2',
            borderRadius: '2px',
          },
          dotStyle: {
            border: '1px solid #f2f2f2',
            boxShadow: '0 1px 2px 0 rgba(0,0,0,.2)',
          },
          processStyle: {
            backgroundColor: '#13b1fa',
          },
        },
      };
    },
    methods: {
      sliderChange() {},
    },
  };
</script>

<style lang="scss">
  .every{
    padding: 10px;
    > div{
      background-color: #FFF;
      border-radius: 2px;
      padding: 10px 12px;
      > div{
        border-bottom: 1px solid #f2f2f2;
        &:last-of-type{
          border-bottom: 0;
          padding: 10px 12px 0;
        }
        &.flex{
          display: flex;
        }
        > button{
          padding: 10px 0;
          font-size: 16px;
          font-weight: 600;
          > div:nth-of-type(2){
            font-weight: normal;
            font-size: 10px;
            color: #9b9b9b;
            line-height: 12px;
          }
        }
        > button:first-of-type{
          text-align: left;
          flex: 0 0 50%;
          width: 100%;
        }
        > button:nth-of-type(2){
          text-align: right;
          flex: 0 0 50%;
        }
        &:nth-of-type(2){
          > button{
            padding: 20px 0;
            color: #9b9b9b;
          }
        }
        &:nth-of-type(4){
          border-bottom: 0;
          padding-top: 10px;
          > div:nth-of-type(1){
            font-size: 16px;
            font-weight: 600;
            line-height: 19px;
          }
          > div:nth-of-type(2){
            font-size: 10px;
            color: #9b9b9b;
            margin-top: 2px;
            line-height: 12px;
          }
        }
      }
      > button{
        width: 100%;
        height: 45px;
        border-radius: 3px;
        background-color: #13b1fa;
        font-size: 18px;
        letter-spacing: 0.7px;
        color: #ffffff;
        margin-top: 20px;
      }
    }
    > button{
      text-align: left;
      width: 100%;
      height: 51px;
      background-color: #FFF;
      border-radius: 3px;
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
      margin-top: 6px;
      cursor: pointer;
      padding-left: 49px;
      position: relative;
      &:after{
        position: absolute;
        top: 50%;
        right: 14px;
        width: 8px;
        height: 14px;
        margin-top: -7px;
        background: url(http://static.ssgcdn.com/ui/m_ssg/img/sp_cdtl_renew.png) -150px 0 no-repeat;
        background-size: 240px 240px;
        content: '';
        opacity: .5;
      }
      > div:first-of-type{
        width: 41px;
        height: 41px;
        background-image: url(~assets/navigator.png);
        background-size: cover;
        background-repeat: no-repeat;
        position: absolute;
        left: 5px;
        top: 5px;
      }
      > div:nth-of-type(2){
        line-height: 15px;
        font-size: 12px;
        letter-spacing: 0.5px;
        color: #000000;
      }
      > div:nth-of-type(3){
        line-height: 12px;
        font-size: 10px;
        letter-spacing: 0.4px;
        color: #9b9b9b;
        margin-top: 2px;
      }
    }
  }
</style>
