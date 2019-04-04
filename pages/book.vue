<template>
  <div class="bookWrapper">
    <div class="header"><button @click="$router.back()"></button>예약하기<button @click="$router.back()"></button></div>
    <div class="searchContainer">
      <div>
        본 항공권은 예약서비스 와이페이모어 책임하에 운영됩니다.<br>
        입력하신 정보는 예약/결제/발권진행에 사용될 수 있습니다.
      </div>
      <div>
        <div @click="$router.push({
          params: { popup: 'detail' },
        })">
          <div>인천(ICN) - 런던(LHR) | 3월 13일(목)</div>
          <div>런던(LHR) - 인천(ICN) | 3월 19일(수)</div>
          <div>에어프랑스 | 일반석 | 성인1명</div>
        </div>
        <div>
          <div>와이페이모어 <span>성인 | 삼성taptap카드</span></div>
          <div>758,000원</div>
        </div>
      </div>
      <h3>탑승객 선택</h3>
      <div>
        <button>
          <div>GILDONG HONG</div>
          <div>성인 | 여권번호 M123456</div>
        </button>
        <button><div></div>탑승객 추가</button>
      </div>
      <h3>연락처</h3>
      <div>
        <div><input placeholder="이름"></div>
        <div><input placeholder="휴대폰 번호"></div>
        <div><input placeholder="이메일"></div>
      </div>
      <h3>이용약관</h3>
      <div>
        <button @click="isConfirm = !isConfirm" :class="isConfirm ? 'check' : ''"></button>
        다음 약관 내용에 모두 동의합니다. <a href="#">항공권 예약 이용약관</a>
      </div>
    </div>
    <div class="btnWrap">
      <button @click="$router.push('/confirm')">예약하기</button>
    </div>
    <pop-wrapper v-if="$route.params.popup === 'detail'"></pop-wrapper>
  </div>
</template>

<script>
  import PopWrapper from '~/components/popWrapper';

  export default {
    components: {
      PopWrapper,
    },
    data() {
      return {
        isConfirm: false,
      };
    },
  };
</script>

<style lang="scss">
  .bookWrapper{
    background-color: #f2f2f2;
    min-height: 100vh;
    padding-top: 44px;
    padding-bottom: 78px;
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
    .searchContainer{
      padding: 10px;
      > div:nth-of-type(1){
        font-size: 12px;
        line-height: 15px;
        letter-spacing: 0.3px;
      }
      > div:nth-of-type(2){
        margin-top: 10px;
        background-color: #FFF;
        padding: 10px;
        border-radius: 2px;
        > div:nth-of-type(1){
          line-height: 20px;
          font-size: 12px;
          position: relative;
          cursor: pointer;
          &:after{
            position: absolute;
            top: 50%;
            right: 4px;
            width: 8px;
            height: 14px;
            margin-top: -8px;
            background: url(http://static.ssgcdn.com/ui/m_ssg/img/sp_cdtl_renew.png) -150px 0 no-repeat;
            background-size: 240px 240px;
            content: '';
          }
          > div:nth-of-type(1){
            &:before{
              margin-top: 2px;
              line-height: 16px;
              text-align: center;
              float: left;
              margin-right: 6px;
              width: 36px;
              height: 16px;
              background-color: #13b1fa;
              color: #FFF;
              font-size: 10px;
              content: '가는편';
            }
          }
          > div:nth-of-type(2){
            &:before{
              margin-top: 2px;
              line-height: 16px;
              text-align: center;
              float: left;
              margin-right: 6px;
              width: 36px;
              height: 16px;
              background-color: #13b1fa;
              color: #FFF;
              font-size: 10px;
              content: '오는편';
            }
          }
          > div:nth-of-type(3){
            margin-top: 4px;
            line-height: 12px;
            font-size: 10px;
            letter-spacing: 0.3px;
          }
        }
        > div:nth-of-type(2){
          border-top: 1px solid #f2f2f2;
          margin-top: 8px;
          padding-top: 8px;
          > div:nth-of-type(1){
            font-size: 12px;
            line-height: 15px;
            > span{
              color: #9b9b9b;
              font-size: 10px;
            }
          }
          > div:nth-of-type(2){
            font-size: 16px;
            font-weight: bold;
            margin-top: 4px;
          }
        }
      }
      h3{
        margin-top: 20px;
        margin-bottom: 6px;
        font-size: 14px;
        letter-spacing: 0.6px;
        line-height: 17px;
      }
      > div:nth-of-type(3){
        > button:nth-of-type(1){
          background-color: #FFF;
          border-radius: 2px;
          margin-bottom: 6px;
          padding: 10px;
          text-align: left;
          width: 100%;
          > div:nth-of-type(1){
            font-size: 16px;
            font-weight: bold;
            line-height: 19px;
          }
          > div:nth-of-type(2){
            margin-top: 2px;
            font-size: 12px;
            font-weight: normal;
          }
          &:after{
            position: absolute;
            top: 50%;
            right: 14px;
            width: 8px;
            height: 14px;
            margin-top: -8px;
            background: url(http://static.ssgcdn.com/ui/m_ssg/img/sp_cdtl_renew.png) -150px 0 no-repeat;
            background-size: 240px 240px;
            content: '';
          }
        }
        > button:nth-of-type(2){
          background-color: #FFF;
          border-radius: 2px;
          padding-left: 38px;
          height: 56px;
          line-height: 56px;
          font-size: 16px;
          font-weight: 500;
          width: 100%;
          text-align: left;
          > div{
            width: 20px;
            height: 20px;
            border-radius: 100px;
            background-color: #13b1fa;
            position: absolute;
            left: 10px;
            top: 18px;
            &:before{
              width: 8px;
              height: 1px;
              border-bottom: 1px solid #FFF;
              content: '';
              position: absolute;
              left: 6px;
              top: 9px;
            }
            &:after{
              transform: rotate(90deg);
              width: 8px;
              height: 1px;
              border-bottom: 1px solid #FFF;
              content: '';
              position: absolute;
              left: 6px;
              top: 9px;
            }
          }
        }
        > button{
          position: relative;
        }
      }
      > div:nth-of-type(4){
        padding: 0 10px;
        background-color: #FFF;
        border-radius: 2px;
        > div{
          border-bottom: 1px solid #f2f2f2;
          height: 48px;
          > input{
            border: 0;
            height: 48px;
            width: 100%;
          }
        }
      }
      > div:nth-of-type(5){
        position: relative;
        > button{
          cursor: pointer;
          left: 12px;
          top: 12px;
          position: absolute;
          width: 13px;
          height: 13px;
          border-radius: 2px;
          border: solid 1px #13b1fa;
          &.check{
            &:before{
              content: '';
              background: url(~assets/check.png) center center no-repeat;
              background-size: contain;
              display: block;
              width: 11px;
              height: 11px;
            }
          }
        }
        font-size: 14px;
        background-color: #FFF;
        padding: 11px 13px 11px 37px;
        > a{
          color: #13b1fa;
        }
      }
    }
    > .btnWrap{
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 78px;
      background-color: #ffffff;
      padding: 17px 20px 16px;
      box-shadow: 0 0 4px 0 rgba(0,0,0,.1);
      z-index: 1;
      > button{
        width: 100%;
        height: 45px;
        border-radius: 3px;
        background-color: #13b1fa;
        font-size: 18px;
        letter-spacing: 0.7px;
        text-align: center;
        color: #ffffff;
      }
    }
  }
</style>
