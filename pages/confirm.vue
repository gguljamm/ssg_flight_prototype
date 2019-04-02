<template>
  <div class="confirmWrapper">
    <div class="header"><button @click="$router.back()"></button>예약완료<button @click="$router.back()"></button></div>
    <div class="searchContainer">
      <div><div></div></div>
      <h3>런던 호텔 추천</h3>
      <ul>
        <li v-for="x in 5" :key="x">
          <div
            :class="x % 2 === 1 ? 'resort' : ''"
          ></div>
          <div>
            <div>{{ x % 2 === 1 ? '리조트' : '호텔' }}</div>
            <div>{{ x % 2 === 1 ? '오키나와 그랜드 메르 리조트' : '쉐라톤호텔' }}</div>
            <div>{{ x % 2 === 1 ? '2성급 | 9.8 우수 (908개의 리뷰) | 오키나와' : '5성급 | 9.8 우수 (37개의 리뷰) | 오키나와' }}</div>
            <div><strong>{{ x % 2 === 1 ? '1,250,000' : '1,450,000' }}</strong>원 부터</div>
          </div>
        </li>
      </ul>
      <div>
        <button @click="$router.push('/cart')">예약내역 확인하기</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {};
</script>

<style lang="scss">
  .confirmWrapper{
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
      padding: 10px 0;
      > div:last-of-type{
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
      > div:first-of-type{
        padding: 0 10px;
        > div{
          height: 309px;
          background: url(~assets/booking.png) center center no-repeat;
          background-size: contain;
          border-radius: 2px;
        }
      }
      > h3{
        font-size: 14px;
        color: #4a4a4a;
        margin-top: 20px;
        margin-bottom: 10px;
        padding: 0 10px;
      }
      > ul{
        height: 181px;
        white-space: nowrap;
        overflow-x: auto;
        overflow-y: hidden;
        -webkit-overflow-scrolling: touch;
        padding: 0 10px;
        > li{
          cursor: pointer;
          height: 181px;
          width: 188px;
          margin-right: 8px;
          background-color: #FFF;
          display: inline-block;
          border-radius: 2px;
          &:last-of-type{
            margin-right: 0;
          }
          > div:first-of-type{
            height: 102px;
            width: 100%;
            background: center center no-repeat;
            background-size: cover;
            background-image: url(~assets/sheraton.jpg);
            &.resort{
              background-image: url(~assets/resort.jpg);
            }
          }
          > div:nth-of-type(2){
            padding: 10px 8px;
            font-size: 12px;
            > div:nth-of-type(1), > div:nth-of-type(3){
              font-size: 10px;
              color: #9b9b9b;
              margin-bottom: 6px;
            }
          }
        }
      }
    }
  }
</style>
