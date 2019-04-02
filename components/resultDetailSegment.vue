<template>
  <div class="flightSegWrap">
    <div class="flightSegList">
      <div class="flightHead">
        <div>
          <div>7월 16일 화요일</div>
          <div>대한항공 | ICN - LHD</div>
        </div>
        <div>
          <div>총 6시간 15분</div>
          <div>{{ flag == 0 ? '직항' : '1회 경유' }}</div>
        </div>
      </div>
      <div class="flightList">
        <div
          v-for="x in length"
          :key="x"
        >
          <div class="flightDot"><div></div><div></div><div></div><div></div><div></div></div>
          <div v-if="x !== 1" class="layover">
            <strong>1시간 30분</strong>,
            쿠알라루름프 경유
          </div>
          <div v-if="x === 1" class="carrier">
            <img class="carrierImg" :src="require('~/assets/airline.png')">
            <div>대한항공</div>
            <div>BOEING 777</div>
          </div>
          <div class="departure">
            <div class="flightSign" :class="x === 1 ? 'main' : ''"></div>
            <div>
              <div>인천 (ICN)</div>
              <div><strong>오전 8:15</strong></div>
            </div>
            <div>
              <div>인천국제공항</div>
              <div>7월 16일 수요일</div>
            </div>
          </div>
          <div class="duration" v-if="flag == 1">비행시간 4시간 10분</div>
          <div class="arrival">
            <div class="flightSign" :class="x === 1 ? 'main' : ''"></div>
            <div>
              <div>런던 (LHD)</div>
              <div>오후 2:30</div>
            </div>
            <div>
              <div>히드로공항</div>
              <div>7월 16일 수요일</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flightSub">
      <div>항공권에 포함된 서비스</div>
      <ul>
        <li>위탁수하물</li>
        <li>사전좌석예약</li>
        <li>기내식/음료</li>
      </ul>
    </div>
    <button>
      <div>서비스 업그레이드</div>
      <div>나한테 맞는 부가서비스를 확인해보세요.</div>
    </button>
  </div>
</template>

<script>
  export default {
    props: ['flag'],
    data() {
      return {
        length: this.flag == 0 ? 1 : 2,
      };
    },
  };
</script>

<style lang="scss" scoped>
  .flightSegWrap{
    .flightSegList{
      background-color: #FFF;
      border-radius: 2px;
      .flightHead{
        border-bottom: 1px solid #f8f8f8;
        padding: 10px;
        display: flex;
        > div{
          flex: auto;
          > div:first-of-type{
            line-height: 20px;
            font-size: 14px;
          }
          > div:last-of-type{
            font-size: 12px;
            color: #9b9b9b;
            line-height: 18px;
          }
          &:first-of-type{
            > div:first-of-type{
              font-weight: bold;
            }
          }
          &:nth-of-type(2){
            text-align: right;
            > div:first-of-type{
            }
          }
        }
      }
      .flightList{
        padding: 0 10px;
        .flightDot{
          position: absolute;
          margin-top: 74px;
          margin-left: 8px;
          > div{
            width: 2px;
            height: 2px;
            border-radius: 2px;
            background-color: #e1e1e1;
            margin-bottom: 10px;
          }
        }
        .carrier{
          border-bottom: 1px solid #f8f8f8;
          padding: 4px 0;
          overflow: auto;
          line-height: 32px;
          font-size: 14px;
          > *{
            float: left;
          }
          > .carrierImg{
            height: 17px;
            width: 17px;
            margin-top: 6px;
          }
          > div:first-of-type{
            margin-left: 7px;
            color: #000;
          }
          > div:nth-of-type(2){
            float: right;
            font-size: 10px;
            color: #9b9b9b;
          }
        }
        .layover{
          height: 33px;
          border-radius: 2px;
          background-color: #f8f8f8;
          width: 100%;
          line-height: 33px;
          font-size: 12px;
          padding: 0 10px;
          margin-bottom: 10px;
        }
        .departure, .arrival{
          padding-left: 24px;
          padding-bottom: 10px;
          .flightSign{
            position: absolute;
            width: 6px;
            height: 6px;
            border-radius: 100%;
            margin-top: 6px;
            margin-left: -18px;
            &.main{
              background-color: #9b9b9b;
            }
            &:not(.main){
              border: 1px solid #979797;
            }
          }
          > div:nth-of-type(2){
            font-size: 14px;
            height: 20px;
            line-height: 20px;
            > div:first-of-type{
              float: left;
            }
            > div:nth-of-type(2){
              float: right;
              &.highlight{
                color: #d0021b;
              }
            }
          }
          > div:nth-of-type(3){
            font-size: 12px;
            height: 18px;
            line-height: 18px;
            > div:first-of-type{
              float: left;
            }
            > div:nth-of-type(2){
              float: right;
              &.highlight{
                color: #d0021b;
              }
            }
          }
          &.departure{
            padding-top: 10px;
            padding-bottom: 38px;
          }
        }
        .duration{
          padding-left: 24px;
          color: #9b9b9b;
          font-size: 12px;
          font-weight: bold;
          position: absolute;
          margin-top: -26px;
        }
      }
    }
    .flightSub{
      margin-top: 6px;
      width: 100%;
      border-radius: 2px;
      background-color: #ffffff;
      padding: 0 10px;
      > div:first-of-type{
        height: 31px;
        line-height: 31px;
      }
      > ul{
        > li{
          height: 48px;
          line-height: 48px;
          border-bottom: 1px solid #f2f2f2;
          &:last-of-type{
            border-bottom: 0;
          }
        }
      }
    }
    > button{
      margin-top: 6px;
      width: 100%;
      height: 51px;
      border-radius: 3px;
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
      background-color: #ffffff;
      padding-left: 53px;
      text-align: left;
      position: relative;
      &:before{
        left: 5px;
        top: 5px;
        content: '';
        background: url(~assets/service.svg);
        position: absolute;
        width: 41px;
        height: 41px;
      }
      > div:first-of-type{
        font-size: 12px;
        line-height: 16px;
        letter-spacing: 0.5px;
        margin-bottom: 2px;
      }
      > div:nth-of-type(2){
        font-size: 10px;
        line-height: 12px;
        letter-spacing: 0.4px;
        color: #9b9b9b;
      }
      &:after{
        position: absolute;
        top: 50%;
        right: 20px;
        width: 8px;
        height: 14px;
        margin-top: -8px;
        background: url(http://static.ssgcdn.com/ui/m_ssg/img/sp_cdtl_renew.png) -150px 0 no-repeat;
        background-size: 240px 240px;
        content: '';
      }
    }
  }
</style>
