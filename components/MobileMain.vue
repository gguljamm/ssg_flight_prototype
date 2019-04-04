<template>
  <div class="mobileMain">
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
          <div class="mainBack">
            <div class="mainPromo">
              <div v-swiper:myswiper="swiperOption">
                <div class="swiper-wrapper">
                  <div
                    v-for="(x, index) in 5"
                    :key="index"
                    class="swiper-slide"
                  ></div>
                </div>
              </div>
              <div>
                <div class="bp-pagination" slot="pagination"></div>
                <div class="bp-button-prev" slot="button-prev"></div>
                <div class="bp-button-next" slot="button-next"></div>
              </div>
            </div>
            <div class="tourButtons">
              <button
                @click="$router.push('/flight')"
              >항공권</button>
              <button>호텔</button>
              <button>패키지</button>
              <button>투어&티켓</button>
            </div>
            <div>
              <h2>프로모션</h2>
              <div
                @touchstart.stop
                @touchmove.stop
                @touchend.stop
              >
                <div v-for="x in 5" :key="x" @click="$router.push('/result')">
                  <div><strong>땡처리<br>항공권</strong><br>모—음</div>
                </div>
              </div>
            </div>
            <div>
              <h2>효도 패키지여행은 여기로</h2>
              <div
                @touchstart.stop
                @touchmove.stop
                @touchend.stop
              >
                <div
                  @click="$router.push('/result')"
                  v-for="x in 5"
                  :key="x"
                ></div>
              </div>
            </div>
            <div>
              <h2>ForYou_브랜드</h2>
              <div>
                <img :src="require('~/assets/promo.jpg')">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SidePopUp from './SidePopUp.vue';
import Header from './Header.vue';

export default {
  components: {
    SidePopUp,
    Header,
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
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        pagination: {
          el: '.bp-pagination',
          type: 'fraction'
        },
        navigation: {
          nextEl: '.bp-button-next',
          prevEl: '.bp-button-prev'
        }
      },
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
  .mobileMain{
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
      .mainBack{
        background-color: #F2F2F2;
        > div{
          background-color: #FFF;
          margin-top: 6px;
          h2{
            font-size: 14px;
            font-weight: bold;
            line-height: 17px;
            letter-spacing: 0.6px;
            color: #4a4a4a;
            padding-bottom: 14px;
          }
        }
        .mainPromo{
          margin-top: 0;
          .swiper-slide{
            height: 170px;
            background-image: url(~assets/main.png);
            background-size: cover;
            color: #FFF;
            position: relative;
            &:after{
              position: absolute;
              content: '';
              right: 0;
              bottom: 0;
              width: 50px;
              height: 50px;
              background-color: #13b1fa;
            }
          }
          > div:nth-of-type(2){
            height: 37px;
            position: relative;
            .bp-pagination{
              line-height: 37px;
              height: 37px;
              text-align: center;
            }
            .bp-button-prev{
              position: absolute;
              top: 0;
              left: 50%;
              margin-left: -50px;
              line-height: 37px;
              width: 30px;
              text-align: center;
              &:before{
                content: '<';
              }
            }
            .bp-button-next{
              position: absolute;
              top: 0;
              left: 50%;
              margin-left: 20px;
              line-height: 37px;
              width: 30px;
              text-align: center;
              &:before{
                content: '>';
              }
            }
          }
        }
        .tourButtons{
          display: flex;
          > button{
            flex: auto;
            height: 88px;
            letter-spacing: 0.6px;
            color: #4a4a4a;
            &:before{
              content: '';
              width: 54px;
              height: 54px;
              background-repeat: no-repeat;
              background-size: cover;
              background-position: center center;
              display: block;
              margin: 0 auto;
            }
            &:nth-of-type(1):before{
              background-image: url(~assets/flight.svg);
            }
            &:nth-of-type(2):before{
              background-image: url(~assets/hotel.svg);
            }
            &:nth-of-type(3):before{
              background-image: url(~assets/package.svg);
            }
            &:nth-of-type(4):before{
              background-image: url(~assets/ticket.svg);
            }
          }
        }
        > div:nth-of-type(3){
          padding: 14px 0;
          h2{
            padding-left: 10px;
          }
          > div{
            padding: 0 10px;
            overflow: auto;
            -webkit-overflow-scrolling: touch;
            white-space: nowrap;
            > div{
              display: inline-block;
              width: 262px;
              height: 147px;
              border-radius: 2px;
              margin-right: 10px;
              cursor: pointer;
              background-color: #e4eefb;
              > div{
                padding: 20px 18px;
                font-size: 20px;
                letter-spacing: 0.8px;
                color: #022f5f;
              }
              &:nth-of-type(1), &:nth-of-type(3), &:nth-of-type(5){
                background-image: url(~assets/mask.jpg);
                background-size: cover;
                background-position: center center;
                > div{
                  opacity: 0;
                }
              }
              &:last-of-type{
                margin-right: 0;
              }
            }
          }
        }
        > div:nth-of-type(4){
          padding: 14px 0;
          h2{
            padding-left: 10px;
          }
          > div{
            padding: 0 10px;
            overflow: auto;
            -webkit-overflow-scrolling: touch;
            white-space: nowrap;
            > div{
              cursor: pointer;
              display: inline-block;
              width: 143px;
              height: 198px;
              border-radius: 2px;
              background-color: #e4eefb;
              margin-right: 10px;
              background-size: cover;
              background-position: center center;
              background-image: url(~assets/teaser_2.jpg);
              &:last-of-type{
                margin-right: 0;
              }
              &:first-of-type, &:nth-of-type(3), &:nth-of-type(5){
                background-image: url(~assets/teaser1.jpg);
              }
            }
          }
        }
        > div:nth-of-type(5) {
          padding: 14px 0;
          h2{
            padding-left: 10px;
          }
          > div{
            >img{
              width: 100%;
            }
          }
        }
      }
    }
  }
</style>
