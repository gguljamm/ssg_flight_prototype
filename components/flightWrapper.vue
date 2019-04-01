<template>
  <div class="flightWrapper">
    <div class="header"><button @click="$router.back()"></button>항공권</div>
    <div class="searchContainer">
      <div>
        <button><span>편도</span></button>
        <button class="focused"><span>왕복</span></button>
        <button><span>다구간</span></button>
      </div>
      <div>
        <div>
          <div>
            <div :class="inputData.origin ? 'selected' : ''" @click="openPop('origin')">
              <div>{{  inputData.origin ? inputData.origin.name : '출발지'  }}</div>
              <div class="sub">{{  inputData.origin ? inputData.origin.code : '도시명 또는 공항명'  }}</div>
            </div>
            <div :class="inputData.destination ? 'selected' : ''" @click="openPop('destination')">
              <div>{{  inputData.destination ? inputData.destination.name : '도착지'  }}</div>
              <div class="sub">{{  inputData.destination ? inputData.destination.code : '도시명 또는 공항명'  }}</div>
            </div>
            <button @click="swipe()"></button>
          </div>
          <div>
            <div
              @click="openPop('departure')"
              :class="inputData.departure ? 'selected' : ''"
            >{{ inputData.departure ? format.dateFormat(inputData.departure) : '출발날짜' }}</div>
            <div
              @click="openPop('arrival')"
              :class="inputData.arrival ? 'selected' : ''"
            >{{ inputData.arrival ? format.dateFormat(inputData.arrival) : '귀국날짜' }}</div>
          </div>
          <div>
            <div class="selected" @click="openPop('option')">
              <div>일반석</div>
              <div class="sub">좌석등급</div>
            </div>
            <div class="selected" @click="openPop('option')">
              <div>성인 1명</div>
              <div class="sub">탑승</div>
            </div>
          </div>
          <div>
            <button
              @click="$router.push('/result')"
            >검색</button>
          </div>
        </div>
        <div>
          <div></div>
          <div>어디든 떠나볼까요?</div>
          <div>예산에 맞는 항공권을 찾아드립니다.</div>
        </div>
      </div>
    </div>
    <transition name="fade" mode="out-in">
      <div class="recentSearch" v-show="recentSearch.length > 0">
        <h2>최근 검색한 항공권</h2>
        <transition-group name="fade" mode="out-in" tag="div">
          <div v-for="(x, index) in recentSearch" :key="x.key" @click="$router.push('/result')">
            <div>왕복</div>
            <div><span>{{ x.origin }}</span><span></span><span>{{ x.destination }}</span></div>
            <div>{{ x.date }}</div>
            <button @click.stop="recentSearch.splice(index, 1)"></button>
          </div>
        </transition-group>
      </div>
    </transition>
    <div class="recommend">
      <h2>인기 여행지</h2>
      <div>
        <div v-for="x in 5" :key="x" @click="$router.push('/result')"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Format from '~/utils/format';

export default {
  props: ['inputData'],
  data() {
    return {
      format: Format,
      recentSearch: [
        {
          key: 0,
          origin: '서울(SEL)',
          destination: '파리(PAR)',
          date: '3월 10일 - 3월 13일 | 일반석 | 성인 1명',
        },
        {
          key: 1,
          origin: '서울(SEL)',
          destination: '파리(PAR)',
          date: '3월 10일 - 3월 13일 | 일반석 | 성인 1명',
        },
        {
          key: 2,
          origin: '서울(SEL)',
          destination: '파리(PAR)',
          date: '3월 10일 - 3월 13일 | 일반석 | 성인 1명',
        },
        {
          key: 3,
          origin: '서울(SEL)',
          destination: '파리(PAR)',
          date: '3월 10일 - 3월 13일 | 일반석 | 성인 1명',
        },
        {
          key: 4,
          origin: '서울(SEL)',
          destination: '파리(PAR)',
          date: '3월 10일 - 3월 13일 | 일반석 | 성인 1명',
        }
      ],
    };
  },
  methods: {
    openPop(flag) {
      this.$router.push(`/flight/${flag}`);
    },
    swipe() {
      let temp = {};
      if (this.inputData.origin) {
        temp.name = this.inputData.origin.name;
        temp.code = this.inputData.origin.code;
      } else {
        temp = '';
      }
      this.inputData.origin = this.inputData.destination;
      this.inputData.destination = temp;
    },
  },
};
</script>

<style lang="scss">
  .flightWrapper{
    background-color: #f2f2f2;
    min-height: 100vh;
    padding-top: 44px;
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
      position: fixed;
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
    .searchContainer{
      height: 382px;
      > div:first-of-type{
        height: 56px;
        display: flex;
        > button{
          flex: 0 0 33.3333%;
          color: #595757;
          letter-spacing: 0.6px;
          > span{
            padding: 10px 24px;
          }
          &.focused{
            color: #000;
            font-weight: bold;
            > span{
              border-bottom: 2px solid #13b1fa;
              border-radius: 1.5px;
            }
          }
        }
      }
      > div:nth-of-type(2){
        font-size: 16px;
        line-height: 19px;
        font-weight: 600;
        color: #9b9b9b;
        padding: 0 10px;
        > div:first-of-type{
          background-color: #FFF;
          border-radius: 3px;
          box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
          padding: 14px 10px 0;
          > div{
            border-bottom: 1px solid #f2f2f2;
            display: flex;
            &:nth-of-type(1){
              position: relative;
              > button{
                width: 44px;
                height: 44px;
                background-image: url(~assets/swipe.png);
                background-repeat: no-repeat;
                background-position: center center;
                position: absolute;
                left: 50%;
                margin-left: -22px;
                top: 4px;
              }
            }
            &:nth-of-type(2){
              > div{
                padding-top: 20px;
                height: 58px;
              }
            }
            &:nth-of-type(3){
              .sub{
                color: #9b9b9b;
              }
            }
            > div{
              cursor: pointer;
              flex: 0 0 50%;
              height: 59px;
              padding: 16px 2px 0;
              &:nth-of-type(2){
                text-align: right;
              }
            }
            &:last-of-type{
              padding: 10px 0;
              > button{
                height: 45px;
                border-radius: 3px;
                background-color: #13b1fa;
                width: 100%;
                color: #FFF;
                font-size: 18px;
                letter-spacing: 0.7px;
              }
            }
          }
        }
        > div:nth-of-type(2){
          height: 51px;
          background-color: #FFF;
          border-radius: 3px;
          box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
          margin-top: 6px;
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
        .selected{
          color: #000;
        }
        .sub{
          margin-top: 2px;
          line-height: 12px;
          font-size: 10px;
        }
      }
    }
    .recentSearch, .recommend{
      background-color: #FFF;
      padding: 14px 0 16px;
      h2{
        line-height: 17px;
        font-size: 14px;
        font-weight: bold;
        letter-spacing: 0.6px;
        color: #4a4a4a;
        margin-bottom: 14px;
        padding: 0 10px;
      }
      > div{
        white-space: nowrap;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
        overflow-y: hidden;
        padding: 0 10px;
        height: 77px;
        > div{
          width: 249px;
          height: 77px;
          border-radius: 2px;
          border: solid 1px #dfdfdf;
          display: inline-block;
          margin-right: 6px;
          cursor: pointer;
          position: relative;
          &:last-of-type{
            margin-right: 0;
          }
        }
      }
    }
    .recentSearch{
      > div{
        > div{
          padding: 11px 0 0 10px;
          > div:first-of-type{
            font-size: 10px;
            font-weight: bold;
            letter-spacing: 0.4px;
            color: #bcbcbc;
            line-height: 12px;
          }
          > div:nth-of-type(2){
            margin-top: 10px;
            line-height: 20px;
            height: 20px;
            font-size: 14px;
            font-weight: 500;
            letter-spacing: 0.6px;
            color: #4a4a4a;
            > span{
              float: left;
            }
            > span:nth-of-type(2){
              background-image: url(~assets/recent.png);
              background-position-y: -1px;
              width: 20px;
              height: 20px;
              display: inline-block;
              margin: 0 4px;
            }
          }
          > div:nth-of-type(3){
            line-height: 12px;
            font-size: 10px;
            letter-spacing: 0.2px;
            color: #bcbcbc;
          }
          button{
            position: absolute;
            width: 34px;
            height: 34px;
            top: 0;
            right: 0;
            z-index: 5;
            &:after{
              content: '';
              display: inline-block;
              overflow: hidden;
              background: url(http://static.ssgcdn.com/ui/m_ssg/img/com_v2/sp_cmfloating_ssgtalk.png) no-repeat;
              background-size: 50px auto;
              vertical-align: top;
              width: 12px;
              height: 12px;
              transform: scale(.8);
              background-position: 0 -25px;
              cursor: pointer;
            }
          }
        }
      }
    }
    .recommend{
      padding-bottom: 44px;
      margin-top: 6px;
      > div{
        height: 147px;
        > div{
          height: 147px;
          background-image: url(~assets/flight_teaser.jpg);
          background-position: center center;
        }
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
