<template>
  <div class="wrapper">
    <div v-swiper:mySwiper="swiperOption" ref="swiper">
      <div class="swiper-wrapper" :style="{ height: 'auto' }">
        <div class="menu swiper-slide" :class="init ? 'show' : ''">
          <side-pop-up v-show="init"></side-pop-up>
        </div>
        <div class="content swiper-slide">
          <div class="main">
            <div class="header">
              <button
                @click="toggleMenu"
              >메뉴</button>
              <div :class="init ? 'fade' : ''">
                <a class="logo" href="/"></a>
              </div>
            </div>
            <div>
              <div v-for="x in 100" :key="x">{{ x }}</div>
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
    const self = this;
    return {
      menuCross: false,
      swiperOption: {
        initialSlide: 1,
        resistanceRatio: 0,
        slidesPerView: 'auto',
        slideToClickedSlide: true,
        on: {
          slideChange() {
            if (this.activeIndex === 0) {
              self.menuCross = true
            } else {
              self.menuCross = false
            }
          }
        }
      },
      init: false,
    };
  },
  computed: {
    swiper() {
      return this.$refs.swiper ? this.$refs.swiper.swiper : ''
    }
  },
  mounted() {
    setTimeout(() => {
      this.init = true;
    });
  },
  methods: {
    toggleMenu() {
      if (this.swiper.activeIndex === 0) {
        this.swiper.slideNext()
      } else {
        this.menuCross = false
        this.swiper.slidePrev()
      }
    }
  }
};
</script>

<style lang="scss">
  .wrapper{
    width: 100%;
    /*> div:first-of-type{*/
      /*top: 0;*/
      /*position: fixed;*/
      /*z-index: 3000;*/
      /*-webkit-tap-highlight-color: transparent;*/
      /*background-color: black;*/
      /*opacity: 0;*/
      /*left: 325px;*/
      /*right: 0;*/
      /*height: 100%;*/
      /*display: block;*/
    /*}*/
  }
  .main{
    min-height: 100vh;
    position: relative;
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
  .menu{
    width: 325px;
    overflow: hidden;
    height: 100vh;
    -webkit-overflow-scrolling: touch;
    z-index: 100;
    &.show:before{
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0px;
      width: 7px;
      background-image: linear-gradient(to right,rgba(0,0,0,0),rgba(0,0,0,0.5));
      z-index: 1100;
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
</style>
