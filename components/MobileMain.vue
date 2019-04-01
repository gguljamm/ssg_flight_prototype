<template>
  <div class="wrapper">
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
          <div
            v-show="sidePopActive"
            @click.stop="closeSide()"
          ></div>
          <div class="header">
            <button
              @click="openSide()"
            >메뉴</button>
            <div :class="init ? 'fade' : ''">
              <a class="logo" href="/"></a>
            </div>
          </div>
          <div id="m_sch_bottom" class="mcom_sch2">
            <div>
              <form id="m_sch_bottom_form" onsubmit="return false;">
                <div class="m_head_inparea2">
                  <div class="head_ipbx2">
                    <div class="m_schtype2 m_schclose">
                      <button type="button" class="btn_t">통합검색</button>
                      <ul class="m_schlayer">
                        <li class="active"><button title="6005" type="button">통합검색</button></li>
                        <li><button title="6004" type="button">신세계몰</button></li>
                        <li><button title="6009" type="button">신세계백화점</button></li>
                        <li><button title="6001" type="button">이마트몰</button></li>
                        <li><button title="6002" type="button">트레이더스</button></li>
                        <li><button title="6003" type="button">Boots</button></li>
                        <li><button title="6200" type="button">신세계TV쇼핑</button></li>
                        <li><button title="6300" type="button">SI빌리지</button></li>
                        <li><button title="6400" type="button">스타필드</button></li>
                        <li><button title="6100" type="button">하우디</button></li>
                      </ul>
                    </div>
                    <span class="inpbx2">
                      <input type="text" id="inp_sch" name="query" autocomplete="off" value="">
                      <label for="inp_sch" class="inp_ico_srch"><span class="blind">검색하기</span></label>
                    </span>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="sticky-wrapper" style="">
            <div id="_mcom_nav"
              @touchstart.stop
              @touchmove.stop
              @touchend.stop
              class="mcom_navwrap end" style="overflow: hidden; z-index: 2000; -webkit-tap-highlight-color: transparent; height: 47px;">
              <div class="mcom_nav" style="width: 100%; position: absolute; z-index: 1; left: 0px; top: 0px; transition-property: -webkit-transform; height: 100%;">
                <ul aria-hidden="true" style="width: 100%; overflow:auto; height: 100%; position: absolute; left: 0px; top: 0px;">
                  <li class="on" style="width: 57px;"><a href="/" class="clickable" data-react-tarea="스와이프|매장클릭|쓱항공"><span class="nav_mnu ">쓱투어</span></a></li>
                  <li index="0" style="width: 31px;"><a href="http://m.ssg.com/main.ssg" class="clickable" data-react-tarea="스와이프|매장클릭|쓱"><span class="nav_mnu ">쓱</span></a></li>
                  <li index="1" style="width: 57px;"><a href="http://m.ssg.com/service/obanjang.ssg" class="clickable" data-react-tarea="스와이프|매장클릭|오반장"><span class="nav_mnu ">오반장</span></a></li>
                  <li index="2" style="width: 62px;"><a href="http://m.ssg.com/service/ssgdeal.ssg" class="clickable" data-react-tarea="스와이프|매장클릭|쓱-배송"><span class="nav_mnu ">쓱-배송</span></a></li>
                  <li index="3" style="width: 95px;"><a href="http://m.ssg.com/service/happybuyrus.ssg" class="clickable" data-react-tarea="스와이프|매장클릭|해피바이러스"><span class="nav_mnu ">해피바이러스</span></a></li>
                  <li index="4" style="width: 94px;"><a href="http://m.ssg.com/variable/variableContent.ssg?dispCornrSetId=7200293621" class="clickable" data-react-tarea="스와이프|매장클릭|[펀딩] 우르르"><span class="nav_mnu ">[펀딩] 우르르</span></a></li>
                  <li index="5" style="width: 101px;"><a href="http://m.ssg.com/variable/variableContent.ssg?dispCornrSetId=7200360682" class="clickable" data-react-tarea="스와이프|매장클릭|미세먼지도쓱-"><span class="nav_mnu ">미세먼지도쓱-</span></a></li>
                  <li index="6" style="width: 69px;"><a href="http://m.ssg.com/service/clipsale.ssg" class="clickable" data-react-tarea="스와이프|매장클릭|클립할인"><span class="nav_mnu ">클립할인</span></a></li>
                  <li index="7" style="width: 57px;"><a href="http://m.ssg.com/service/market.ssg" class="clickable" data-react-tarea="스와이프|매장클릭|장보기"><span class="nav_mnu ">장보기</span></a></li>
                  <li index="8" style="width: 98px;"><a href="http://m.ssg.com/recipe/trecipeMain.ssg" class="clickable" data-react-tarea="스와이프|매장클릭|오늘은 e-요리"><span class="nav_mnu ">오늘은 e-요리</span></a></li>
                  <li index="9" style="width: 57px;"><a href="http://m.ssg.com/contents/lifeMagazineMain.ssg" class="clickable" data-react-tarea="스와이프|매장클릭|매거진"><span class="nav_mnu ">매거진</span></a></li>
                  <li index="10" style="width: 66px;"><a href="http://m.ssg.com/shopat/shopatMain.ssg" class="clickable" data-react-tarea="스와이프|매장클릭|SHOP@"><span class="nav_mnu ">SHOP@</span></a></li>
                  <li index="11" style="width: 89px;"><a href="http://m.ssg.com/trend/wordtrend.ssg" class="clickable" data-react-tarea="스와이프|매장클릭|#쓱스타그램"><span class="nav_mnu ">#쓱스타그램</span></a></li>
                  <li index="12" style="width: 91px;"><a href="http://m.ssg.com/event/eventMain.ssg" class="clickable" data-react-tarea="스와이프|매장클릭|이벤트&amp;쿠폰"><span class="nav_mnu ">이벤트&amp;쿠폰</span></a></li>
                  <li index="13" style="width: 82px;"><a href="http://m.ssg.com/special/index.ssg" class="clickable" data-react-tarea="스와이프|매장클릭|공식스토어"><span class="nav_mnu ">공식스토어</span></a></li>
                </ul>
              </div>
            <a href="#" class="btn_prev" aria-hidden="true"><span class="sp_com_v2">이전</span></a><a href="#" class="btn_next" aria-hidden="true"><span class="sp_com_v2">이후</span></a>
            </div>
          </div>
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
                <img :src="require('~/assets/promo.png')">
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

export default {
  components: {
    SidePopUp,
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
      window.document.body.style.overflowY = 'auto';
    },
    openSide() {
      this.swiperLeft = 0;
      this.sidePopActive = true;
      window.document.body.style.overflowY = 'hidden';
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
  .wrapper{
    width: 100%;
    > div{
      overflow: hidden;
    }
  }
  .content, .menu{
    transition: .3s ease;
  }
  .content{
    .main{
      min-height: 100vh;
      transition: .3s ease;
      position: relative;
      > div:first-of-type{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 9999;
      }
      .header{
        height: 54px;
        text-align: center;
        > div{
          display: inline-block;
          line-height: 20px;
          padding: 17px 0;
          font-weight: bold;
          transform: translateY(-54px);
          opacity: 0;
          transition: .3s ease;
          &.fade{
            transform: translateY(0);
            opacity: 1;
          }
          .logo{
            margin-right: 10px;
            display: block;
            float: left;
            width: 121px;
            background-size: 121px auto;
            height: 20px;
            background-image: url(~assets/cm_logo_home_ssg.png);
          }
        }
        button{
          position: absolute;
          left: 0;
          width: 47px;
          height: 54px;
          font-size: 11px;
          color: #4a4a4a;
          text-align: center;
          vertical-align: top;
          letter-spacing: -1px;
          &:before{
            width: 22px;
            background-position: 0 0;
            content: '';
            display: block;
            height: 18px;
            margin: 0 auto 2px;
            background-size: 150px auto;
            background-image: url(http://static.ssgcdn.com/ui/m_ssg/img/com_v2/sp_cmg.png);
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
</style>
