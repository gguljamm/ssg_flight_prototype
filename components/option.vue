<template>
  <div class="optionWrap">
    <div>
      <p>탑승객</p>
      <div class="passenger">
        <div>
          <div>성인</div>
          <div>만 12세 이상</div>
          <div>
            <button
              :class="adults === 1 ? 'disable' : ''"
              @click="adults > 1 ? changeNum('adults', -1) : ''"
            ></button>
            <span>{{ adults }}</span>
            <button
              :class="adults === 9 ? 'disable' : ''"
              @click="adults < 9 ? changeNum('adults', 1) : ''"
            ></button>
          </div>
        </div>
        <div>
          <div>소아</div>
          <div>만 2 ~ 12세 미만</div>
          <div>
            <button
              :class="children === 0 ? 'disable' : ''"
              @click="children > 0 ? changeNum('children', -1) : ''"
            ></button>
            <span :class="children === 0 ? 'disable' : ''">{{ children }}</span>
            <button
              :class="children === 9 ? 'disable' : ''"
              @click="children < 9 ? changeNum('children', 1) : ''"
            ></button>
          </div>
        </div>
        <div>
          <div>유아</div>
          <div>만 24개월 미만</div>
          <div>
            <button
              :class="infants === 0 ? 'disable' : ''"
              @click="infants > 0 ? changeNum('infants', -1) : ''"
            ></button>
            <span :class="infants === 0 ? 'disable' : ''">{{ infants }}</span>
            <button
              :class="infants === 9 ? 'disable' : ''"
              @click="infants < 9 ? changeNum('infants', 1) : ''"
            ></button>
          </div>
        </div>
      </div>
    </div>
    <div>
      <p>좌석등급</p>
      <div class="cabin">
        <div>
          <div><button
            :class="cabinClass==='Economy'?'active':''"
            @click="changeCabin('Economy')"
          >일반석</button></div>
          <div><button
            :class="cabinClass==='PremiumEconomy'?'active':''"
            @click="changeCabin('PremiumEconomy')"
          >프리미엄 일반석</button></div>
        </div>
        <div>
          <div><button
            :class="cabinClass==='Business'?'active':''"
            @click="changeCabin('Business')"
          >비즈니스석</button></div>
          <div><button
            :class="cabinClass==='First'?'active':''"
            @click="changeCabin('First')"
          >일등석</button></div>
        </div>
      </div>
    </div>
    <div class="acceptButton">
      <button
        @click="submit()"
      >적용하기</button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      let children = 0;
      return {
        adults: 1,
        children,
        infants: 0,
        cabinClass: 'Economy',
      };
    },
    methods: {
      changeNum(flag, num) {
        this[flag] = this[flag] + num;
        if (flag === 'rooms' && this.rooms > this.adults) {
          this.adults = this.rooms;
        } else if (flag === 'adults' && this.rooms > this.adults) {
          this.rooms = this.adults;
        } else if (flag === 'infants' && this.adults < this.infants) {
          this.adults = this.infants;
        } else if (flag === 'adults' && this.adults < this.infants) {
          this.infants = this.adults;
        }
      },
      changeCabin(data) {
        this.cabinClass = data;
      },
      submit() {
        this.$router.back();
      },
    },
  };
</script>

<style lang="scss">
  .optionWrap{
    background-color: #FFF;
    min-height: 100%;
    > div{
      padding: 16px;
      > p{
        font-size: 14px;
        padding: 8px 0;
        font-weight: bold;
      }
      .passenger{
        margin-bottom: 22px;
        > div{
          position: relative;
          height: 67px;
          padding: 12px 0;
          border-bottom: 1px solid #f8f8f8;
          > div:first-of-type{
            padding-top: 7px;
            font-size: 14px;
            line-height: 17px;
          }
          > div:nth-of-type(2) {
            font-size: 12px;
            margin-top: 1px;
            line-height: 15px;
            color: #9b9b9b;
            .hotel &{
              display: none;
            }
          }
          > div:nth-of-type(3) {
            position: absolute;
            right: 0;
            top: 12px;
            height: 42px;
            width: 168px;
            text-align: center;
            line-height: 42px;
            font-weight: bold;
            > div{
              position: absolute;
              left: 0;
              top: 0;
              pointer-events: none;
              width: 100%;
              height: 100%;
              &:after{
                content: '';
                right: 10px;
                top: 16px;
                position: absolute;
                border-top: 5px solid #4a4a4a;
                border-left: 4px solid transparent;
                border-right: 4px solid transparent;
              }
            }
            > select{
              width: 100%;
              height: 100%;
              text-align: center;
              opacity: 0;
            }
            > span.disable{
              color: #ccc;
            }
            > button{
              width: 42px;
              height: 42px;
              top: 0;
              position: absolute;
              border-radius: 4px;
              background-repeat: no-repeat;
              background-position: center center;
              background-color: #13b1fa;
              transition: .3s ease;
              &:first-of-type{
                left: 0;
                background-image: url(~assets/minus.svg);
              }
              &:nth-of-type(2){
                right: 0;
                background-image: url(~assets/plus.svg);
              }
              &.disable{
                background-color: #e9e9e9;
              }
            }
          }
        }
      }
      .cabin{
        margin-top: 16px;
        > div{
          display: flex;
          &:first-of-type{
            margin-bottom: 9px;
          }
          > div{
            flex: auto;
            width: 50%;
            &:first-of-type{
              padding-right: 5px;
            }
            &:nth-of-type(2) {
              padding-left: 5px;
            }
            > button{
              width: 100%;
              height: 53px;
              border-radius: 2px;
              background-color: #f8f8f8;
              font-size: 14px;
              color: #9b9b9b;
              transition: .3s ease;
              &.active{
                background-color: #13b1fa;
                box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
                color: #FFF;
                font-weight: bold;
              }
            }
          }
        }
      }
    }
    .acceptButton{
      position: absolute;
      bottom: 0;
      height: 70px;
      width: 100%;
      left: 0;
      box-shadow: 0 -4px 10px 0 rgba(0, 0, 0, 0.1);
      padding: 13px 20px;
      > button{
        background-color: #13b1fa;
        color: #FFF;
        width: 100%;
        height: 44px;
      }
    }
  }
</style>
