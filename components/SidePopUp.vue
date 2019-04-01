<template>
  <aside id="leftlist" class="reveal-left-nav v2">
    <div id="_clnb" class="clnb"><div class="iscroll" style="transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1); transition-duration: 0ms; transform: translate(0px, 0px) translateZ(0px);"><header class="clnb_header"><div class="clnb_login"><div class="clnb_user"><a id="lnb_loginText" href="javascript:;" onclick="mobileLogin('login')" style=""><strong>로그인 해주세요</strong></a> <a id="lnb_logoutText" href="http://m.ssg.com/event/couponInfo.ssg?_mpop=new" style="display: none;"><strong id="lnbUserNm"></strong> <span id="lnbGradeNm" class="clnb_grade"></span></a></div> <ul class="clnb_util"><li><a href="http://m.ssg.com/common/showMEmallDelivery.ssg"><i class="clnb_ic clnb_ic_ssgdeliv"></i><em>쓱배송</em></a></li></ul></div> <ul class="clnb_menu"><li><a href="javascript:gnbPageMoveTo.mySsg();"><i class="clnb_ic clnb_ic_my"></i><strong>MY SSG</strong></a></li> <li><a href="https://pay.ssg.com/m/myssg/orderInfo.ssg?_mpop=new"><i class="clnb_ic clnb_ic_deliv"></i><strong>배송조회</strong></a></li> <li><a href="javascript:gnbPageMoveTo.myClip();"><i class="clnb_ic clnb_ic_clip"></i><strong>MY클립</strong></a></li> <li><a href="javascript:gnbPageMoveTo.myCpn();"><i id="lnb_loginCoupon" class="clnb_ic clnb_ic_coupon" style=""></i> <span id="lnb_logoutCoupon" class="clnb_menu_num" style="display: none;"><span id="lnbCouponCnt" class="num">0</span></span> <strong>쿠폰</strong></a></li></ul></header> <nav id="_clnb_nav" class="clnb_nav">
      <ul role="navigation" aria-label="공통 카테고리">
        <li class="clnb_item"><a @click="fold = fold === 0 ? -1 : 0" :class="fold === 0 ? 'selected' : ''" class="clnb_item_link folder"><span class="clnb_item_tx">패션</span> <span class="clnb_item_ic">[+]</span></a> <ul :style="{display: fold === 0 ? 'block' : 'none'}"><li class="clnb_sub_item"><a class="clnb_item_link"><span class="clnb_item_tx">여성캐주얼/정장</span> <!----></a> <!----></li><li class="clnb_sub_item"><a class="clnb_item_link"><span class="clnb_item_tx">남성캐주얼/정장</span> <!----></a> <!----></li><li class="clnb_sub_item"><a class="clnb_item_link"><span class="clnb_item_tx">유니섹스</span> <!----></a> <!----></li><li class="clnb_sub_item"><a class="clnb_item_link"><span class="clnb_item_tx">언더웨어</span> <!----></a> <!----></li></ul></li>
        <li class="clnb_item"><a @click="fold = fold === 1 ? -1 : 1" :class="fold === 1 ? 'selected' : ''" class="clnb_item_link folder"><span class="clnb_item_tx">잡화</span> <span class="clnb_item_ic">[+]</span></a> <ul :style="{display: fold === 1 ? 'block' : 'none'}"><li class="clnb_sub_item"><a class="clnb_item_link"><span class="clnb_item_tx">명품/수입의류</span> <!----></a> <!----></li><li class="clnb_sub_item"><a class="clnb_item_link"><span class="clnb_item_tx">가방/지갑/패션잡화</span> <!----></a> <!----></li><li class="clnb_sub_item"><a class="clnb_item_link"><span class="clnb_item_tx">시계/쥬얼리</span> <!----></a> <!----></li><li class="clnb_sub_item"><a class="clnb_item_link"><span class="clnb_item_tx">패션슈즈</span> <!----></a> <!----></li></ul></li>
        <li class="clnb_item"><a @click="fold = fold === 2 ? -1 : 2" :class="fold === 2 ? 'selected' : ''" class="clnb_item_link folder"><span class="clnb_item_tx">뷰티</span> <span class="clnb_item_ic">[+]</span></a> <ul :style="{display: fold === 2 ? 'block' : 'none'}"><li class="clnb_sub_item"><a class="clnb_item_link"><span class="clnb_item_tx">명품화장품</span> <!----></a> <!----></li><li class="clnb_sub_item"><a class="clnb_item_link"><span class="clnb_item_tx">화장품/향수</span> <!----></a> <!----></li><li class="clnb_sub_item"><a class="clnb_item_link"><span class="clnb_item_tx">헤어/바디/미용/구강</span> <!----></a> <!----></li></ul></li>
        <li class="clnb_item"><a @click="fold = fold === 3 ? -1 : 3" :class="fold === 3 ? 'selected' : ''" class="clnb_item_link folder"><span class="clnb_item_tx">가구/주방</span> <span class="clnb_item_ic">[+]</span></a> <ul :style="{display: fold === 3 ? 'block' : 'none'}"><li class="clnb_sub_item"><a class="clnb_item_link"><span class="clnb_item_tx">가구/침구</span> <!----></a> <!----></li><li class="clnb_sub_item"><a class="clnb_item_link"><span class="clnb_item_tx">주방용품/식기</span> <!----></a> <!----></li><li class="clnb_sub_item"><a class="clnb_item_link"><span class="clnb_item_tx">인테리어</span> <!----></a> <!----></li></ul></li>
        <li class="clnb_item"><a @click="fold = fold === 4 ? -1 : 4" :class="fold === 4 ? 'selected' : ''" class="clnb_item_link folder"><span class="clnb_item_tx">생활</span> <span class="clnb_item_ic">[+]</span></a> <ul :style="{display: fold === 4 ? 'block' : 'none'}"><li class="clnb_sub_item"><a class="clnb_item_link"><span class="clnb_item_tx">세제/제지/위생용품</span> <!----></a> <!----></li><li class="clnb_sub_item"><a class="clnb_item_link"><span class="clnb_item_tx">생활/건강/자동차용품</span> <!----></a> <!----></li><li class="clnb_sub_item"><a class="clnb_item_link"><span class="clnb_item_tx">문구/악기/취미</span> <!----></a> <!----></li><li class="clnb_sub_item"><a class="clnb_item_link"><span class="clnb_item_tx">반려동물</span> <!----></a> <!----></li></ul></li>
        <li class="clnb_item"><a @click="fold = fold === 5 ? -1 : 5" :class="fold === 5 ? 'selected' : ''" class="clnb_item_link folder"><span class="clnb_item_tx">유아동</span> <span class="clnb_item_ic">[+]</span></a> <ul :style="{display: fold === 5 ? 'block' : 'none'}"><li class="clnb_sub_item"><a class="clnb_item_link"><span class="clnb_item_tx">유아동용품/출산/임신</span> <!----></a> <!----></li><li class="clnb_sub_item"><a class="clnb_item_link"><span class="clnb_item_tx">유아동 의류/잡화</span> <!----></a> <!----></li><li class="clnb_sub_item"><a class="clnb_item_link"><span class="clnb_item_tx">유아동 완구/교구</span> <!----></a> <!----></li></ul></li>
        <li class="clnb_item"><a @click="fold = fold === 6 ? -1 : 6" :class="fold === 6 ? 'selected' : ''" class="clnb_item_link folder"><span class="clnb_item_tx">디지털</span> <span class="clnb_item_ic">[+]</span></a> <ul :style="{display: fold === 6 ? 'block' : 'none'}"><li class="clnb_sub_item"><a class="clnb_item_link"><span class="clnb_item_tx">주방가전/냉장고/세탁기</span> <!----></a> <!----></li><li class="clnb_sub_item"><a class="clnb_item_link"><span class="clnb_item_tx">계절가전/네비/블랙박스</span> <!----></a> <!----></li><li class="clnb_sub_item"><a class="clnb_item_link"><span class="clnb_item_tx">생활/소형가전</span> <!----></a> <!----></li><li class="clnb_sub_item"><a class="clnb_item_link"><span class="clnb_item_tx">컴퓨터/게임</span> <!----></a> <!----></li><li class="clnb_sub_item"><a class="clnb_item_link"><span class="clnb_item_tx">카메라/캠코더</span> <!----></a> <!----></li><li class="clnb_sub_item"><a class="clnb_item_link"><span class="clnb_item_tx">영상/음향가전</span> <!----></a> <!----></li><li class="clnb_sub_item"><a class="clnb_item_link"><span class="clnb_item_tx">휴대폰/스마트기기/ACC</span> <!----></a> <!----></li></ul></li>
        <li class="clnb_item"><a @click="fold = fold === 7 ? -1 : 7" :class="fold === 7 ? 'selected' : ''" class="clnb_item_link folder"><span class="clnb_item_tx">스포츠</span> <span class="clnb_item_ic">[+]</span></a> <ul :style="{display: fold === 7 ? 'block' : 'none'}"><li class="clnb_sub_item"><a class="clnb_item_link"><span class="clnb_item_tx">스포츠패션/용품</span> <!----></a> <!----></li><li class="clnb_sub_item"><a class="clnb_item_link"><span class="clnb_item_tx">등산/캠핑/낚시</span> <!----></a> <!----></li><li class="clnb_sub_item"><a class="clnb_item_link"><span class="clnb_item_tx">골프클럽/용품/의류</span> <!----></a> <!----></li><li class="clnb_sub_item"><a class="clnb_item_link"><span class="clnb_item_tx">자전거/인라인/헬스</span> <!----></a> <!----></li></ul></li>
        <li class="clnb_item"><a @click="fold = fold === 8 ? -1 : 8" :class="fold === 8 ? 'selected' : ''" class="clnb_item_link folder"><span class="clnb_item_tx">e쿠폰/여행</span> <span class="clnb_item_ic">[+]</span></a> <ul :style="{display: fold === 8 ? 'block' : 'none'}"><li class="clnb_sub_item"><a class="clnb_item_link"><span class="clnb_item_tx">e쿠폰/상품권</span> <!----></a> <!----></li><li class="clnb_sub_item"><a class="clnb_item_link"><span class="clnb_item_tx">서비스</span> <!----></a> <!----></li><li class="clnb_sub_item"><a class="clnb_item_link"><span class="clnb_item_tx">여행</span> <!----></a> <!----></li><li class="clnb_sub_item"><a class="clnb_item_link"><span class="clnb_item_tx">도서/음반/DVD</span> <!----></a> <!----></li></ul></li>
        <li class="clnb_item"><a @click="fold = fold === 9 ? -1 : 9" :class="fold === 9 ? 'selected' : ''" class="clnb_item_link folder"><span class="clnb_item_tx">식품</span> <span class="clnb_item_ic">[+]</span></a> <ul :style="{display: fold === 9 ? 'block' : 'none'}"><li class="clnb_sub_item"><a class="clnb_item_link"><span class="clnb_item_tx">과일/견과</span> <!----></a> <!----></li><li class="clnb_sub_item"><a class="clnb_item_link"><span class="clnb_item_tx">채소</span> <!----></a> <!----></li><li class="clnb_sub_item"><a class="clnb_item_link"><span class="clnb_item_tx">쌀/잡곡</span> <!----></a> <!----></li><li class="clnb_sub_item"><a class="clnb_item_link"><span class="clnb_item_tx">정육/계란류</span> <!----></a> <!----></li><li class="clnb_sub_item"><a class="clnb_item_link"><span class="clnb_item_tx">수산물/해산물/건어물</span> <!----></a> <!----></li><li class="clnb_sub_item"><a class="clnb_item_link"><span class="clnb_item_tx">건강식품/친환경/유기농</span> <!----></a> <!----></li><li class="clnb_sub_item"><a class="clnb_item_link"><span class="clnb_item_tx">반찬/밀키트/델리</span> <!----></a> <!----></li><li class="clnb_sub_item"><a class="clnb_item_link"><span class="clnb_item_tx">음료/주류/커피/분유</span> <!----></a> <!----></li><li class="clnb_sub_item"><a class="clnb_item_link"><span class="clnb_item_tx">과자/초콜릿/시리얼/빵</span> <!----></a> <!----></li><li class="clnb_sub_item"><a class="clnb_item_link"><span class="clnb_item_tx">라면/통조림/조미료/장류</span> <!----></a> <!----></li><li class="clnb_sub_item"><a class="clnb_item_link"><span class="clnb_item_tx">유제품/냉장/냉동/간편식</span> <!----></a> <!----></li></ul></li>
      </ul></nav> <div id="lnb_special_shop" class="clnb_sec clnb_speical">
      <h3>공식스토어</h3>
      <div id="_clnb_speical_iscroll">
        <ul
          @touchstart.stop
          @touchmove.stop
          @touchend.stop
        >
          <li><a href="http://m.shinsegaemall.ssg.com/specialStore/sulwhasoo/main.ssg?tarea=store6005index"><span class="thmb" style="background-image:url('//static.ssgcdn.com//cmpt/ctg/201903/2019031411051513372141336314_849.jpg')"></span><em>설화수</em></a></li>
          <li><a href="http://m.shinsegaemall.ssg.com/specialStore/montblanckorea/main.ssg?tarea=store6005index"><span class="thmb" style="background-image:url('//static.ssgcdn.com//cmpt/ctg/201903/2019030413502913338451331945_175.jpg')"></span><em>몽블랑</em></a></li>
          <li><a href="http://m.shinsegaemall.ssg.com/specialStore/brooks-brothers/main.ssg?tarea=store6005index"><span class="thmb" style="background-image:url('//static.ssgcdn.com//cmpt/ctg/201903/2019030813350528539122850022_503.jpg')"></span><em>브룩스 브라더스</em></a></li>
          <li><a href="http://m.shinsegaemall.ssg.com/specialStore/ralphlauren/main.ssg?tarea=store6005index"><span class="thmb" style="background-image:url('//static.ssgcdn.com//cmpt/ctg/201903/2019030609581689094538907553_991.jpg')"></span><em>RALPH LAUREN</em></a></li>
          <li><a href="http://m.emart.ssg.com/specialStore/nobrand/main.ssg?tarea=store6005index"><span class="thmb" style="background-image:url('//static.ssgcdn.com//cmpt/ctg/201707/2017072515134180441518048151_315.jpg')"></span><em>노브랜드</em></a></li>
          <li><a href="http://m.emart.ssg.com/specialStore/ssgpeacock/main.ssg?tarea=store6005index"><span class="thmb" style="background-image:url('//static.ssgcdn.com//cmpt/ctg/201804/2018042015444873533127358312_994.jpg')"></span><em>피코크</em></a></li>
          <li><a href="http://m.emart.ssg.com/specialStore/newjaju/main.ssg?tarea=store6005index"><span class="thmb" style="background-image:url('//static.ssgcdn.com//cmpt/ctg/201902/2019022116373289006708909670_991.jpg')"></span><em>자주</em></a></li>
          <li><a href="http://m.shinsegaemall.ssg.com/specialStore/massimodutti/main.ssg?tarea=store6005index"><span class="thmb" style="background-image:url('//static.ssgcdn.com//cmpt/ctg/201902/2019022209045199862249985424_738.jpg')"></span><em>MASSIMO DUTTI</em></a></li>
          <li><a href="http://m.shinsegaemall.ssg.com/special/gucci/main.ssg?tarea=store6005index"><span class="thmb" style="background-image:url('//static.ssgcdn.com//cmpt/ctg/201903/2019031809335913342231333323_900.png')"></span><em>GUCCI</em></a></li>
          <li><a href="http://m.shinsegaemall.ssg.com/specialStore/burberry/main.ssg?tarea=store6005index"><span class="thmb" style="background-image:url('//static.ssgcdn.com//cmpt/ctg/201808/2018080910472599890359988135_341.jpg')"></span><em>BURBERRY</em></a></li>
          <li><a href="http://m.shinsegaemall.ssg.com/specialStore/lululemon/main.ssg?tarea=store6005index"><span class="thmb" style="background-image:url('//static.ssgcdn.com//cmpt/ctg/201901/2019010415423128530652852165_556.jpg')"></span><em>룰루레몬</em></a></li>
          <li><a href="http://m.shinsegaemall.ssg.com/special/chanel/main.ssg?tarea=store6005index"><span class="thmb" style="background-image:url('//static.ssgcdn.com//cmpt/ctg/201903/2019031309391099824619981561_339.jpg')"></span><em>CHANEL</em></a></li>
        </ul>
      </div>
      <a href="http://m.ssg.com/special/index.ssg" class="clnb_more">전체보기</a>
    </div> <div class="clnb_sec clnb_help"><h3>무엇을 도와드릴까요?</h3> <ul><li><a href="javascript:;" onclick="appBroswer('http://m.ssg.com/customer/main.ssg?aplSiteNo=6005&amp;_mpop=new','stack'); return false;"><i class="clnb_ic clnb_ic_help"></i><em>고객센터</em></a></li> <li><a href="https://member.ssg.com/m/addr/zipcdShppInfo.ssg"><i class="clnb_ic clnb_ic_district"></i><em>쓱배송 가능지역</em></a></li> <li><a href="http://m.ssg.com/search/searchStoreList.ssg"><i class="clnb_ic clnb_ic_find"></i><em>점포찾기</em></a></li> <li><a href="http://m.ssg.com/comm/guide/en.ssg"><i class="clnb_ic clnb_ic_intl"></i><em>INTL.GUIDE</em></a></li></ul></div> <div class="clnb_sec clnb_banner"><ul><li><a href="http://m.ssg.com/comm/reportItem.ssg?&amp;divcTypeCd=50&amp;siteNo=6005"><img src="//static.ssgcdn.com/ui/m_ssg/img/com_v2/clnb_banner_suggest.jpg" alt="제안 해봐쓱?"></a></li></ul></div> <div id="lnb_recommend_app" class="clnb_sec clnb_download">
      <h3>모바일 앱 서비스</h3>
      <ul>
        <li>
          <a href="http://m.ssg.com/comm/app/appLink.ssg?mobilAppSvcNo=3" target="_self"><span class="thmb">
						<img src="//static.ssgcdn.com/cmpt/banner/201412/20141223192501_34.png" alt="SSG모바일앱"><i class="clnb_ic clnb_ic_download"></i>
					</span>
            <em>SSG모바일앱</em>
          </a></li>
        <li>
          <a href="http://m.ssg.com/comm/app/appLink.ssg?mobilAppSvcNo=2" target="_self"><span class="thmb">
						<img src="//static.ssgcdn.com/cmpt/banner/201604/2016040108323735780413576141_693.png" alt="신세계몰모바일"><i class="clnb_ic clnb_ic_download"></i>
					</span>
            <em>신세계몰 모바일앱</em>
          </a></li>
        <li>
          <a href="http://m.ssg.com/comm/app/appLink.ssg?mobilAppSvcNo=1" target="_self"><span class="thmb">
						<img src="//static.ssgcdn.com/cmpt/banner/201412/20141223192743_566.png" alt="이마트몰모바일앱"><i class="clnb_ic clnb_ic_download"></i>
					</span>
            <em>이마트몰 모바일앱</em>
          </a></li>
      </ul>
    </div> <div class="clnb_btm"><ul class="clnb_bta"><li id="lnb_loginBtn" style=""><a href="javascript:;" onclick="mobileLogin('login')"><i class="clnb_ic clnb_ic_login"></i><em>로그인</em></a></li> <li id="lnb_logoutBtn" style="display: none;"><a href="javascript:;" onclick="logout()"><i class="clnb_ic clnb_ic_logout"></i><em>로그아웃</em></a></li></ul></div></div></div>
  </aside>
</template>

<script>
export default {
  data() {
    return {
      fold: -1,
    };
  },
};
</script>

<style>
  aside#leftlist{
    background-color: #FFF;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    overflow-x: hidden;
    height: 100%;
    z-index: 999;
    position: relative;
  }
  .clnb_help li em{
    color: #000;
  }
  .clnb_menu strong{
    display: block;
  }
  .clnb:before{
    position: fixed;
  }
  .clnb_item_link{
    cursor: pointer;
  }
</style>
