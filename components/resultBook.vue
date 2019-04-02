<template>
  <div class="resultBook">
    <ul>
      <li @click="$router.push('/book')">
        <div>와이페이모어 <span>성인 | 삼성taptap카드</span></div>
        <div>758,000원 <span>891,8000원</span></div>
        <div><button class="coupon">할인쿠폰</button><button>요금정보</button></div>
        <button>예약하기</button>
      </li>
      <li @click="$router.push('/book')">
        <div>와이페이모어 <span>성인 | 삼성taptap카드</span></div>
        <div>758,000원</div>
        <div><button>요금정보</button></div>
        <button>예약하기</button>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {};
</script>

<style lang="scss">
  .resultBook{
    ul{
      padding: 10px;
      > li{
        background-color: #FFF;
        height: 84px;
        border-radius: 2px;
        margin-bottom: 6px;
        padding: 10px;
        position: relative;
        cursor: pointer;
        > div:first-of-type{
          font-size: 12px;
          line-height: 15px;
          > span{
            font-size: 10px;
            color: #9b9b9b;
          }
        }
        > div:nth-of-type(2){
          margin-top: 4px;
          line-height: 19px;
          font-size: 16px;
          font-weight: bold;
          > span{
            font-size: 10px;
            color: #9b9b9b;
            text-decoration: line-through;
          }
        }
        > div:nth-of-type(3){
          margin-top: 6px;
          > button{
            height: 16px;
            border: solid 1px #4a4a4a;
            font-size: 10px;
            color: #4a4a4a;
            margin-right: 6px;
            padding: 0 7px;
            &.coupon{
              border-color: #f36766;
              color: #f36766;
              padding-right: 14px;
              position: relative;
              &:after{
                content: '';
                background: url(~assets/download.png) center center no-repeat;
                background-size: cover;
                position: absolute;
                right: 2px;
                top: 0;
                height: 14px;
                width: 12px;
              }
            }
          }
        }
        > button{
          position: absolute;
          height: 20px;
          font-size: 14px;
          letter-spacing: 0.6px;
          right: 10px;
          top: 32px;
          padding-right: 20px;
          &:after{
            position: absolute;
            top: 50%;
            right: 0;
            width: 8px;
            height: 14px;
            margin-top: -8px;
            background: url(http://static.ssgcdn.com/ui/m_ssg/img/sp_cdtl_renew.png) -150px 0 no-repeat;
            background-size: 240px 240px;
            content: '';
          }
        }
      }
    }
  }
</style>
