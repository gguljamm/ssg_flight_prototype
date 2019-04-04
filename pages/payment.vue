<template>
  <div>
    <div class="paymentTitle">
      <button @click="$router.back()"></button>
      결제하기
    </div>
    <img style="width: 100%;" :src="require('~/assets/payment.svg')">
    <div class="pad_hide">
      <!-- 옵션바 -->
      <div id="_cdtl_opt_bar" class="cdtl_opt_bar _fixed_banner ty_btm"> <!-- 펼침 on class 추가 -->
        <div class="cdtl_opt_toggle">
          <a href="javascript:void(0);" class="cdtl_btn_toggle payTracking" data-pt-click="주문서|결제주요요소|웹바_열기닫기" role="button">
				<span class="cdtl_sp_cob">
					<span class="blind sr_off">웹바펼침</span>
					<span class="blind sr_on">웹바접음</span>
				</span>
          </a>
        </div>
        <div class="cdtl_opt_wrap">
          <div class="cdtl_totalodr v2">
            <div class="cdtl_totalodr_agree">
					<span class="codr_inp_chk">
						<input type="checkbox" id="chkPayAgreeAll2" name="chkPayAgreeAll" class="codr_inp_chk a-group-allcheck payTracking" data-pt-click="주문서|결제주요요소|웹바_동의체크">
						<label for="chkPayAgreeAll2">주문 상품정보 및 결제대행 서비스 이용약관에 모두 동의하십니까?</label>
					</span>
            </div>

            <div class="cdtl_opt_hide">
              <div class="cdtl_totalodr_row paySummaryAmtWebBarArea">
						<span class="cdtl_totalodr_tx">
							<em class="ssg_price paySummaryPayItemAmt">1,556,280</em><span class="ssg_tx">원</span>
							<span class="codr_tx_point paySummaryDcPointAmtWebBarArea"> – <em class="ssg_price paySummaryDcPointAmtWebBar">46,688</em><span class="ssg_tx">원</span>(할인)</span>




						</span>
              </div>
            </div>

            <div class="cdtl_totalodr_sec">
              <a @click="reload()" href="javascript:void(0)" id="processOrderButtonBar" class="cdtl_totalodr_btn payTracking" data-pt-click="주문서|결제주요요소|웹바_결제하기">
                <strong>1,509,592원 결제하기</strong>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      reload() {
        window.location.href = '/';
      },
    },
  };
</script>

<style lang="scss">
  .paymentTitle{
    height: 44px;
    text-align: center;
    line-height: 44px;
    font-size: 17px;
    color: #222;
    font-weight: bold;
    position: relative;
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
  }
  .cdtl_opt_bar {
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 2900;
    line-height: 1.5;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    .cdtl_opt_toggle {
      position: relative;
      text-align: center;
      &:before{
        position: absolute;
        right: 0;
        bottom: 8px;
        left: 0;
        height: 10px;
        background: url(http://static.ssgcdn.com/ui/m_ssg/img/cdtl_bg_pt.png) repeat-x;
        background-size: 1px 10px;
        content: '';
      }
      .cdtl_btn_toggle {
        display: block;
        position: relative;
        width: 100%;
        height: 29px;
        padding: 0 0 6px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        &:before{
          position: absolute;
          right: 0;
          bottom: 0;
          left: 0;
          height: 7px;
          border-top: 1px solid #262626;
          background-color: #fff;
          content: '';
        }
        .cdtl_sp_cob {
          overflow: hidden;
          position: relative;
          width: 65px;
          height: 22px;
          display: inline-block;
          background: url(http://static.ssgcdn.com/ui/m_ssg/img/cdtl_sp_cob.png) no-repeat;
          background-size: 250px 250px;
          background-position: 0 -175px;
          color: transparent;
          white-space: nowrap;
          vertical-align: top;
          text-overflow: ellipsis;
        }
      }
    }
    .cdtl_opt_wrap {
      overflow: hidden;
      position: relative;
      background: #fff;
      .cdtl_totalodr_agree {
        padding: 5px 15px 9px 15px;
        .codr_inp_chk {
          position: relative;
          min-width: 18px;
          display: inline-block;
          min-height: 18px;
          word-wrap: normal;
          word-break: normal;
          vertical-align: top;
          .codr_inp_chk input[type='checkbox'] {
            position: absolute;
            display: inline-block;
            width: 18px;
            height: 18px;
            margin: 0;
            padding: 0;
            border: 0;
            vertical-align: top;
            border-radius: 0;
            appearance: none;
            -webkit-appearance: none;
          }
        }
        label {
          font-size: 12px;
          color: #666;
          letter-spacing: -1px;
        }
      }
    }
    .cdtl_opt_hide {
      display: none;
    }
    .cdtl_totalodr .cdtl_totalodr_sec {
      position: relative;
      display: table;
      width: 100%;
      .cdtl_totalodr_btn {
        display: table-cell;
        height: 65px;
        box-sizing: border-box;
        background: #ff5b59;
        font-size: 18px;
        color: #fff;
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
      }
    }
  }
</style>
