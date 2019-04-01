<template>
  <div class="resultWrapper">
    <div class="header">
      <button @click="$router.back()"></button>
      <div><div>ICN</div><div></div><div>PAR</div></div>
      <div>3월 19일 - 3월 28일</div>
    </div>
    <div class="resultContainer">
      <div>
        <div></div>
        <div>주변일 최저가 확인하기</div>
        <div>9박 10일 일정의 주변일의 최저가가 궁금하신가요?</div>
      </div>
      <div>
        <div :class="order === 'price' ? 'selected' : ''" @click="order = 'price'">
          <div>최저가순</div>
          <div>123만원<br>28시간 20분</div>
        </div>
        <div :class="order === 'duration' ? 'selected' : ''" @click="order = 'duration'">
          <div>최단시간순</div>
          <div>145만원<br>9시간 20분</div>
        </div>
        <div :class="order === 'curation' ? 'selected' : ''" @click="order = 'curation'">
          <div>추천순</div>
          <div>133만원<br>16시간 05분</div>
        </div>
        <div :class="order === 'leg' ? 'selected' : ''" @click="order = 'leg'">
          <div>사용자 지정</div>
          <div>편도 조합</div>
        </div>
      </div>
      <ul>
        <li v-for="x in 10" :key="x" @click="$router.push({ params: { popup: 'book' } })">
          <div class="seg" v-for="y in 2" :key="y">
            <div></div>
            <div>
              <div>에어프랑스 | ICN - LHR</div>
              <div>오전 8:10 - 오후 1:10(+1)</div>
            </div>
            <div>
              <div>직항</div>
              <div>총 9시간 30분</div>
            </div>
          </div>
          <div>
            <button></button>
            <div></div>
            <div>1,450,000원 부터</div>
          </div>
        </li>
      </ul>
      <button class="btnFilter">필터</button>
    </div>
    <transition name="fade">
      <div class="popupResult" v-if="$route.params.popup === 'book'">
        <button @click="$router.back()"></button>
        <result-popup></result-popup>
      </div>
    </transition>
  </div>
</template>

<script>
  import ResultPopup from './resultPopup';

  export default {
    components: {
      ResultPopup,
    },
    data() {
      return {
        order: 'price',
      };
    },
  };
</script>

<style lang="scss">
  .resultWrapper {
    background-color: #f2f2f2;
    min-height: 100vh;
    padding-top: 44px;
    .header {
      width: 100%;
      height: 44px;
      border-bottom: 1px solid #dfdfdf;
      letter-spacing: 0.6px;
      font-size: 16px;
      line-height: 44px;
      top: 0;
      left: 0;
      text-align: center;
      position: fixed;
      background-color: #FFF;
      z-index: 10;
      > button {
        position: absolute;
        left: 0;
        top: 0;
        height: 44px;
        width: 44px;
        &:before {
          content: '';
          background: url('http://static.ssgcdn.com/ui/m_ssg/img/com_v2/sp_top_cate.png') 0 0 no-repeat;
          display: inline-block;
          background-size: 100px 100px;
          width: 22px;
          height: 20px;
          vertical-align: middle;
        }
      }
      > div:first-of-type{
        margin-top: 4px;
        letter-spacing: 0.6px;
        text-align: center;
        color: #000000;
        line-height: 20px;
        height: 20px;
        font-size: 0;
        font-weight: 500;
        display: flex;
        > div{
          flex: auto;
          font-size: 16px;
          height: 20px;
          &:nth-of-type(1){
            text-align: right;
            padding-right: 4px;
          }
          &:nth-of-type(2){
            flex: 0 0 20px;
            background-image: url(~assets/recent.png);
            width: 20px;
            background-position-y: -2px;
          }
          &:nth-of-type(3){
            text-align: left;
            padding-left: 4px;
          }
        }
      }
      > div:nth-of-type(2){
        line-height: 15px;
        font-size: 12px;
        letter-spacing: 0.5px;
        text-align: center;
        color: #000000;
      }
    }
    .resultContainer{
      padding: 10px;
      > div:first-of-type{
        height: 51px;
        background-color: #FFF;
        border-radius: 3px;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
        cursor: pointer;
        padding: 11px 0 0 49px;
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
          background-image: url(~assets/time.png);
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
      > div:nth-of-type(2){
        display: flex;
        margin-top: 6px;
        > div{
          flex: 0 0 25%;
          color: #FFF;
          background-color: #7a8388;
          padding: 12px 0 6px 10px;
          border-left: 1px solid #FFF;
          transition: background-color .3s ease;
          > div:first-of-type{
            line-height: 15px;
            font-size: 12px;
            font-weight: bold;
            letter-spacing: 0.5px;
            margin-bottom: 2px;
          }
          > div:nth-of-type(2){
            line-height: 12px;
            font-size: 10px;
            letter-spacing: 0.4px;
          }
          &:nth-of-type(1){
            border-left: 0;
            border-top-left-radius: 3px;
            border-bottom-left-radius: 3px;
          }
          &:nth-of-type(4){
            border-top-right-radius: 3px;
            border-bottom-right-radius: 3px;
          }
          &.selected{
            background-color: #13b1fa;
          }
        }
      }
      .btnFilter{
        position: fixed;
        bottom: 12px;
        left: 50%;
        margin-left: -42px;
        width: 84px;
        height: 30px;
        border-radius: 19px;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
        background-color: #13b1fa;
        font-size: 14px;
        font-weight: 500;
        color: #ffffff;
        padding-left: 20px;
        &:before{
          top: 7px;
          left: 10px;
          width: 25px;
          height: 17px;
          content: '';
          position: absolute;
          background: url(~assets/filter.png) center center no-repeat;
          background-size: contain;
        }
      }
      ul{
        padding-top: 2px;
        padding-bottom: 40px;
        > li{
          cursor: pointer;
          margin-top: 6px;
          background-color: #FFF;
          padding: 2px 10px 0 10px;
          border-radius: 4px;
          > .seg{
            padding: 10px 0;
            border-bottom: 1px solid #f2f2f2;
            display: flex;
            > div{
              flex: auto;
              &:nth-of-type(1){
                flex: 0 0 30px;
                background: url(~assets/airFrance.png) center center no-repeat;
                background-size: contain;
              }
              &:nth-of-type(2){
                padding-left: 8px;
              }
              &:nth-of-type(3){
                text-align: right;
              }
              > div:nth-of-type(1){
                font-size: 12px;
              }
              > div:nth-of-type(2){
                margin-top: 3px;
                font-size: 14px;
              }
            }
          }
          > div:last-of-type{
            position: relative;
            height: 58px;
            > button{
              position: absolute;
              top: 17px;
              left: 4px;
              width: 23px;
              height: 23px;
              background: url(~assets/heart.png) center center no-repeat;
              background-size: contain;
            }
            > div:first-of-type{
              position: absolute;
              width: 45px;
              height: 23px;
              background: url(~assets/coupon.png) center center no-repeat;
              background-size: contain;
              right: 0;
              margin-right: -2px;
              bottom: 27px;
            }
            > div:nth-of-type(2){
              position: absolute;
              right: 0;
              bottom: 10px;
              line-height: 17px;
              font-size: 14px;
              font-weight: bold;
              text-align: right;
              color: #000000;
            }
          }
        }
      }
    }
    .popupResult{
      position: fixed;
      top: 44px;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 101;
      background-color: rgba(0,0,0,.7);
      > button{
        width: 24px;
        height: 24px;
        position: absolute;
        right: 10px;
        top: 30px;
        /* &:after{
          left: 0;
          top: 12px;
          content: '';
          transform: rotate(45deg);
          width: 24px;
          position: absolute;
          border-bottom: 1px solid #fff;
        }
        &:before{
          left: 0;
          top: 12px;
          content: '';
          transform: rotate(-45deg);
          width: 24px;
          position: absolute;
          border-bottom: 1px solid #fff;
        } */
        background: url(~assets/close.png) center center no-repeat;
        background-size: 20px;
      }
    }
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s ease;
  }
  .fade-enter, .fade-leave-to
    /* .component-fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
