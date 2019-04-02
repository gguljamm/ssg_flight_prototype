<template>
  <transition name="slide-bottom-fade">
    <div class="resultPopWrapper" v-if="init">
      <div>
        <button :class="flag === 'book' ? 'selected' : ''" @click="flag = 'book'">예약옵션</button>
        <button :class="flag === 'detail' ? 'selected' : ''" @click="flag = 'detail'">상세정보</button>
      </div>
      <div>
        <result-detail v-if="flag === 'detail'"></result-detail>
        <result-book v-else-if="flag === 'book'"></result-book>
      </div>
    </div>
  </transition>
</template>

<script>
  import ResultDetail from './resultDetail';
  import ResultBook from './resultBook';
  export default {
    components: {
      ResultDetail,
      ResultBook,
    },
    data() {
      return {
        init: false,
        flag: 'book',
      };
    },
    beforeDestroy() {
      window.document.body.style.overflowY = '';
      window.document.documentElement.style.overflowY = '';
    },
    mounted() {
      window.document.body.style.overflowY = 'hidden';
      window.document.documentElement.style.overflowY = 'hidden';
      setTimeout(() => {
        this.init = true;
      }, 10);
    }
  };
</script>

<style lang="scss">
  .resultPopWrapper{
    background-color: #f2f2f2;
    position: absolute;
    top: 64px;
    bottom: 0;
    left: 0;
    right: 0;
    > div:first-of-type{
      padding: 0 10px;
      height: 46px;
      display: flex;
      background-color: #FFF;
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
      z-index: 10;
      position: relative;
      > button{
        height: 46px;
        flex: 0 0 50%;
        border-bottom: 2px solid transparent;
        transition: .1s ease;
        letter-spacing: 0.6px;
        color: #595757;
        font-size: 14px;
        &.selected{
          border-radius: 1.5px;
          border-color: #13b1fa;
          font-weight: bold;
        }
      }
    }
    > div:nth-of-type(2){
      position: absolute;
      top: 46px;
      bottom: 0;
      left: 0;
      right: 0;
      overflow-y: auto;
      overflow-x: hidden;
      -webkit-overflow-scrolling: touch;
    }
  }
</style>
