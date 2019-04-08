<template>
  <div class="cartWrapper">
    <div
      @touchstart="touchStart"
      @touchmove="touchMove"
      @touchend="touchEnd"
    >
      <div class="menu"
           :style="{
          transform: `translateX(${swiperLeft}px)`,
        }"
      >
        <side-pop-up v-show="init"></side-pop-up>
      </div>
      <div class="content"
           :style="{
          transform: swiperLeft === -325 ? '' : `translateX(${swiperLeft + 325}px)`,
        }"
      >
        <div class="main">
          <Header
            :init="init"
            :sidePopActive="sidePopActive"
            @open-side="openSide()"
            @close-side="closeSide()"
          ></Header>
          <div>
            <div class="subHeader">
              <button
                @click="$router.back()"
              ></button>
              예약내역
            </div>
            <div class="subContent">
              <div>
                <div>
                  <div>
                    <div>
                      <span>예약번호</span> SSG_LOVE1004
                      <div>좌석확정</div>
                      <div>요금확정</div>
                    </div>
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
                    <div>
                      <button>1:1 문의</button>
                      <button @click="$router.push('/payment')">결제하기</button>
                    </div>
                  </div>
                </div>
                <button>
                  <div>여행, 안전하게 떠나요.</div>
                  <div>여행자보험</div>
                </button>
              </div>
              <h3>런던 호텔 추천</h3>
              <ul
                @touchstart.stop
                @touchmove.stop
                @touchend.stop
              >
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
            </div>
          </div>
        </div>
      </div>
    </div>
    <pop-wrapper v-if="$route.params.popup === 'detail'"></pop-wrapper>
  </div>
</template>

<script>
  import Header from '~/components/Header';
  import SidePopUp from '~/components/SidePopUp.vue';
  import PopWrapper from '~/components/popWrapper';

  export default {
    components: {
      Header,
      SidePopUp,
      PopWrapper,
    },
    data() {
      return {
        init: false,
        swiperLeft: -325,
        tempStampX: 0,
        tempStampY: 0,
        activeHorizon: false,
        activeVertical: false,
        sidePopActive: false,
      };
    },
    mounted() {
      setTimeout(() => {
        this.init = true;
      });
    },
    methods: {
      closeSide() {
        this.swiperLeft = -325;
        this.sidePopActive = false;
        window.document.body.style.overflowY = '';
        window.document.documentElement.style.overflowY = '';
      },
      openSide() {
        this.swiperLeft = 0;
        this.sidePopActive = true;
        window.document.body.style.overflowY = 'hidden';
        window.document.documentElement.style.overflowY = 'hidden';
      },
      touchStart(e) {
        this.tempStampX = e.touches[0].clientX;
        this.tempStampY = e.touches[0].clientY;
      },
      touchMove(e) {
        const stampX = e.touches[0].clientX;
        const stampY = e.touches[0].clientY;
        if (!this.sidePopActive) {
          if (!this.activeHorizon && !this.activeVertical) {
            if (stampX > this.tempStampX + 30) {
              this.activeHorizon = true;
              this.tempStampX = stampX;
            } else if (stampY > this.tempStampY + 30 || stampY < this.tempStampY - 30){
              this.activeVertical = true;
            }
          } else if (this.activeHorizon) {
            const gap = stampX - this.tempStampX;
            if (gap < 0) {
              this.swiperLeft = -325;
            } else if (gap > 325) {
              this.swiperLeft = 0;
            } else {
              this.swiperLeft = (325 - gap) * -1 ;
            }
          }
        } else {
          if (!this.activeHorizon && !this.activeVertical) {
            if (stampX < this.tempStampX - 30) {
              this.activeHorizon = true;
              this.tempStampX = stampX;
            } else if (stampY > this.tempStampY + 30 || stampY < this.tempStampY - 30){
              this.activeVertical = true;
            }
          } else if (this.activeHorizon) {
            const gap = this.tempStampX - stampX;
            if (gap < 0) {
              this.swiperLeft = 0;
            } else if (gap > 325) {
              this.swiperLeft = -325;
            } else {
              this.swiperLeft = 0 - gap ;
            }
          }
        }
      },
      touchEnd() {
        if (this.activeHorizon) {
          if (!this.sidePopActive) {
            if (this.swiperLeft > -275) {
              this.openSide();
            } else {
              this.closeSide();
            }
          } else {
            if (this.swiperLeft < -50) {
              this.closeSide();
            } else {
              this.openSide();
            }
          }
        }
        this.tempStampX = 0;
        this.tempStampY = 0;
        this.activeHorizon = false;
        this.activeVertical = false;
      },
    }
  };
</script>

<style lang="scss">
  .cartWrapper{
    width: 100%;
    > div{
      overflow: hidden;
      .content, .menu{
        transition: .3s ease;
      }
      .content{
        .main{
          min-height: 100vh;
          transition: .3s ease;
          position: relative;
          > div:nth-of-type(2){
            border-top: 1px solid #d8d8d8;
          }
          .subHeader{
            height: 44px;
            position: relative;
            text-align: center;
            line-height: 44px;
            border-bottom: 1px solid #dfdfdf;
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
          .subContent{
            padding-bottom: 40px;
            background-color: #f2f2f2;
            min-height: calc(100vh - 139px);
            > div:first-of-type{
              padding: 10px 10px 0;
              > div{
                background-color: #FFF;
                border-radius: 2px;
                > div:nth-of-type(1){
                  position: relative;
                  padding: 0 10px;
                  > div{
                    border-bottom: 1px solid #f2f2f2;
                    line-height: 38px;
                    height: 39px;
                    font-size: 12px;
                    color: #000000;
                    > span{
                      color: #9b9b9b;
                    }
                    > div{
                      position: absolute;
                      width: 47px;
                      line-height: 14px;
                      height: 16px;
                      border: solid 1px #0ed9ac;
                      font-size: 10px;
                      color: #0ed9ac;
                      top: 12px;
                      text-align: center;
                      &:nth-of-type(1){
                        right: 61px;
                      }
                      &:nth-of-type(2){
                        right: 10px;
                      }
                    }
                  }
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
                  > div:nth-of-type(3){
                    padding-top: 10px;
                    height: 58px;
                    > button{
                      width: calc(50% - 4px);
                      float: left;
                      height: 48px;
                      border-radius: 2px;
                      font-size: 16px;
                      letter-spacing: .6px;
                      &:nth-of-type(1){
                        color: #4a4a4a;
                        margin-right: 8px;
                        border: 1px solid #13b1fa;
                      }
                      &:nth-of-type(2){
                        color: #FFF;
                        background-color: #13b1fa;
                      }
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
                  opacity: .5;
                }
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
      }
      .menu{
        width: 325px;
        overflow: hidden;
        height: 100vh;
        -webkit-overflow-scrolling: touch;
        position: fixed;
        z-index: 9999;
        &:before {
          content: '';
          z-index: 2;
          position: absolute;
          top: 0;
          bottom: 0;
          left: 318px;
          width: 7px;
          background-image: linear-gradient(to right,rgba(0,0,0,0),rgba(0,0,0,0.5));
        }
      }
      .slide-left-enter-active {
        transition: all .3s ease;
      }
      .slide-left-leave-active {
        transition: all .3s ease;
      }
      .slide-left-enter, .slide-left-leave-to
        /* .slide-fade-leave-active below version 2.1.8 */ {
        opacity: 0;
        transform: translateX(-325px);
      }
      .mcom_nav{
        > ul{
          padding: 0 27px;
          > li{
            white-space: nowrap; display: inline-block;
          }
        }
      }
      .sticky-wrapper{
        height: 43px;
        display: none;
        .scrollTop &{
          > div{
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 43px;
          }
        }
      }
    }
  }
</style>
