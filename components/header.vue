<template>
  <div class="headerWrapper">
    <div
      v-show="sidePopActive"
      @click.stop="$emit('close-side')"
    ></div>
    <div class="header">
      <button
        @click="$emit('open-side')"
      >메뉴</button>
      <button
        @click="$router.push('cart')"
      >장바구니</button>
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
  </div>
</template>

<script>
  export default {
    props: ['sidePopActive', 'init'],
  };
</script>

<style lang="scss">
  .headerWrapper{
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
          display: block;
          float: left;
          width: 121px;
          background-size: 121px auto;
          height: 20px;
          background-image: url(~assets/cm_logo_home_ssg.png);
        }
      }
      > button:first-of-type{
        position: absolute;
        left: 0;
        width: 47px;
        height: 54px;
        font-size: 11px;
        color: #4a4a4a;
        text-align: center;
        vertical-align: top;
        letter-spacing: -1px;
        line-height: 14px;
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
      > button:nth-of-type(2){
        position: absolute;
        right: 7px;
        width: 47px;
        height: 54px;
        font-size: 11px;
        color: #4a4a4a;
        text-align: center;
        vertical-align: top;
        letter-spacing: -1px;
        line-height: 14px;
        &:before{
          width: 22px;
          background-position: -50px 0;
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
</style>
