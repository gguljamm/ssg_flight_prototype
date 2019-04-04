<template>
  <div class="filterWrap">
    <div class="filterContent">
      <div>
        <div>정렬</div>
        <div class="filterBtnWrap">
          <div><button
            :class="localSortState === 'curation' ? 'selected' : ''"
            @click="localSortState = 'curation'"
          >추천순</button></div>
          <div><button
            :class="localSortState === 'price' ? 'selected' : ''"
            @click="localSortState = 'price'"
          >최저가순</button></div>
          <div><button
            :class="localSortState === 'duration' ? 'selected' : ''"
            @click="localSortState = 'duration'"
          >총 이동시간순</button></div>
        </div>
      </div>
      <div>
        <div>경유</div>
        <div class="filterBtnWrap">
          <div><button
            :class="localFilter.stops.indexOf(0) < 0 ? 'selected' : ''"
            @click="filterStop(0)"
          >직항</button></div>
          <div><button
            :class="localFilter.stops.indexOf(1) < 0 ? 'selected' : ''"
            @click="filterStop(1)"
          >1회</button></div>
          <div><button
            :class="localFilter.stops.indexOf(2) < 0 ? 'selected' : ''"
            @click="filterStop(2)"
          >2회 이상</button></div>
        </div>
      </div>
      <div>
        <div>출발시간</div>
        <p><strong>서울에서 출발</strong>하는 항공권</p>
        <div class="times">
          <span class="min">{{ getTime(deptTime.value[0]) }}</span> - <span class="max">{{ getTime(deptTime.value[1]) }}</span>
        </div>
        <div class="needPadding">
          <vue-slider ref="slider1" v-bind="deptTime" v-model="deptTime.value"></vue-slider>
        </div>
        <p><strong>서울로 돌아</strong>오는 항공권</p>
        <div class="times">
          <span class="min">{{ getTime(retnTime.value[0]) }}</span> - <span class="max">{{ getTime(retnTime.value[1]) }}</span>
        </div>
        <div class="needPadding">
          <vue-slider ref="slider2" v-bind="retnTime" v-model="retnTime.value"></vue-slider>
        </div>
      </div>
      <div>
        <div>공항</div>
        <div
          v-for="x in Object.keys(allList.airport)"
          :key="Object.keys(allList.airport)[x]"
        >
          <p><strong>{{ allList.airport[x].name }}</strong></p>
          <div class="filterBtnWrap">
            <div
              v-for="(y, index) in allList.airport[x].list"
              :key="index"
            ><button
              v-if="allList.airport[x].list.length > 1"
              :class="localFilter.airports.indexOf(y.code) < 0 ? 'selected' : ''"
              @click="localFilter.airports.indexOf(y.code) >= 0 ? localFilter.airports.splice(localFilter.airports.indexOf(y.code), 1) : localFilter.airports.push(y.code)"
            >{{ y.name }}</button><button
              v-else
              class="disable"
            >{{ y.name }}</button></div>
          </div>
        </div>
      </div>
      <div>
        <div>얼라이언스</div>
        <div class="filterBtnWrap">
          <div><button
            :class="isGroupSelected('skyteam')"
            @click="groupFilter('skyteam')"
          >스카이팀</button></div>
          <div><button
            :class="isGroupSelected('staralliance')"
            @click="groupFilter('staralliance')"
          >스타얼라이언스</button></div>
          <div><button
            :class="isGroupSelected('oneworld')"
            @click="groupFilter('oneworld')"
          >원월드</button></div>
        </div>
      </div>
      <div>
        <div>항공사<button
          @click="airlineAddAll(localFilter.airlines.length > 0)"
        >{{ localFilter.airlines.length > 0 ? '전체선택' : '전체해제' }}</button></div>
        <div class="filterInputBox">
          <div class="searchIcon"></div>
          <input type="text" v-model="searchValue">
        </div>
        <div class="filterBtnWrap">
          <div
            v-for="x in allList.airline"
            v-if="searchValue.length === 0 ? true : x.name.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0"
            :key="x.code"
          ><button
            :class="localFilter.airlines.indexOf(x.code) < 0 ? 'selected' : ''"
            @click="filterAirline(x.code)"
          >{{ x.name }}</button></div>
        </div>
      </div>
    </div>
    <div class="btnWrap">
      <button @click="submit">적용</button>
    </div>
  </div>
</template>

<script>
  import Format from '~/utils/format'; // eslint-disable-line

  export default {
    data() {
      /* eslint-disable */
      const staralliance = [1280, 819, 835, 841, 929, 1482, 1464, 1530, 1523, 854, 1710, 941, 1525, 898, 1427, 1044, 1375, 1368, 940, 1707, 2040, 1713, 241, 1384, 1760, 1751, 1755, 1793];
      const skyteam = [1717, 850, 845, 1816, 838, 858, 1949, 937, 1429, 954, 1515, 988, 1121, 1329, 1324, 1889, 1317, 1413, 1718, 1663, 1854, 1414];
      const oneworld = [833, 881, 952, 857, 1218, 1276, 1361, 221, 1376, 1948, 1274, 1416, 1606, 1618, 1658, 1687, 1804];
      /* eslint-enable */
      const filter = {
        departureTime: {
          min: 0,
          max: 1440,
        },
        returnTime: {
          min: 0,
          max: 1440,
        },
        stops: [],
        airports: [],
        airlines: [],
      };
      const localFilter = {
        airlines: [],
        departureTime: {
          min: filter.departureTime.min,
          max: filter.departureTime.max,
        },
        returnTime: {
          min: filter.returnTime.min,
          max: filter.returnTime.max,
        },
        maxDuration: filter.maxDuration,
        stops: [],
        airports: [],
      };
      for (let x = 0; x < filter.stops.length; x += 1) {
        localFilter.stops.push(filter.stops[x]);
      }
      for (let x = 0; x < filter.airports.length; x += 1) {
        localFilter.airports.push(filter.airports[x]);
      }
      for (let x = 0; x < filter.airlines.length; x += 1) {
        localFilter.airlines.push(filter.airlines[x]);
      }
      return {
        format: Format,
        allList: {"airport":{"SEL":{"name":"서울","list":[{"name":"서울 김포","code":"GMP"},{"name":"인천국제공항","code":"ICN"}],"id":7001},"LON":{"name":"런던","list":[{"name":"런던시티","code":"LCY"},{"name":"런던 개트윅","code":"LGW"},{"name":"런던 히드로","code":"LHR"},{"name":"런던스탠스테드","code":"STN"}],"id":4698}},"airline":[{"code":124,"name":"helvetic"},{"code":288,"name":"에티하드항공"},{"code":821,"name":"HOP!"},{"code":838,"name":"에어프랑스"},{"code":857,"name":"핀에어"},{"code":858,"name":"알이탈리아"},{"code":881,"name":"영국항공 (BA)"},{"code":885,"name":"Flybe"},{"code":898,"name":"에바항공"},{"code":929,"name":"중국국제항공 (에어차이나)"},{"code":938,"name":"BA Cityflyer"},{"code":940,"name":"Lufthansa CityLine"},{"code":952,"name":"캐세이퍼시픽"},{"code":954,"name":"중국남방항공"},{"code":1035,"name":"에미레이트항공"},{"code":1085,"name":"상하이항공"},{"code":1121,"name":"가루다항공"},{"code":1276,"name":"일본항공 (JAL)"},{"code":1315,"name":"Air Astana"},{"code":1317,"name":"대한항공 (KAL)"},{"code":1324,"name":"KLM (네덜란드항공)"},{"code":1368,"name":"루프트한자 (독일항공)"},{"code":1375,"name":"LOT"},{"code":1384,"name":"스위스항공"},{"code":1416,"name":"말레이시아항공"},{"code":1429,"name":"중국동방항공"},{"code":1448,"name":"Hong Kong Airlines"},{"code":1464,"name":"ANA (전일본공수)"},{"code":1523,"name":"오스트리아항공"},{"code":1530,"name":"아시아나항공"},{"code":1570,"name":"필리핀항공"},{"code":1606,"name":"콴타스"},{"code":1618,"name":"카타르항공"},{"code":1713,"name":"싱가포르항공"},{"code":1717,"name":"러시아항공 (아에로플로트)"},{"code":1751,"name":"타이항공"},{"code":1755,"name":"터키항공"},{"code":1859,"name":"버진애틀랜틱"},{"code":1889,"name":"KLM Cityhopper"}]},
        searchValue: '',
        localSortState: 'curation',
        localFilter,
        init: false,
        flightGroup: {
          staralliance,
          skyteam,
          oneworld,
        },
        deptTime: {
          value: [
            localFilter.departureTime.min,
            localFilter.departureTime.max,
          ],
          width: '100%',
          height: 4,
          dotSize: 26,
          interval: 30,
          min: 0,
          max: 1440,
          disabled: false,
          show: false,
          tooltip: 'none',
          bgStyle: {
            backgroundColor: '#f2f2f2',
            borderRadius: '2px',
          },
          dotStyle: {
            border: '1px solid #f2f2f2',
            boxShadow: '0 1px 2px 0 rgba(0,0,0,.2)',
          },
          processStyle: {
            backgroundColor: '#13b1fa',
          },
        },
        retnTime: {
          value: [
            localFilter.returnTime.min,
            localFilter.returnTime.max,
          ],
          width: '100%',
          height: 4,
          dotSize: 26,
          interval: 30,
          min: 0,
          max: 1440,
          disabled: false,
          show: false,
          tooltip: 'none',
          bgStyle: {
            backgroundColor: '#f2f2f2',
            borderRadius: '2px',
          },
          dotStyle: {
            border: '1px solid #f2f2f2',
            boxShadow: '0 1px 2px 0 rgba(0,0,0,.2)',
          },
          processStyle: {
            backgroundColor: '#13b1fa',
          },
        },
        group: [],
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
        this.deptTime.show = true;
        this.retnTime.show = true;
      }, 300);
    },
    methods: {
      getTime(time) {
        if (time === 1440) {
          return '오후 11시 59분';
        }
        const hour = parseInt(time / 60, 10);

        return `${hour < 12 ? '오전' : '오후'} ${hour > 12 ? hour - 12 : hour}시 ${this.format.zeros((time % 60))}분`;
      },
      isGroupSelected(value) {
        if (this.group.indexOf(value) >= 0) {
          return 'selected';
        }
        return '';
      },
      filterStop(stopNum) {
        if (this.localFilter.stops.includes(stopNum)) {
          this.localFilter.stops.splice(this.localFilter.stops.indexOf(stopNum), 1);
        } else {
          this.localFilter.stops.push(stopNum);
        }
      },
      filterAirline(code) {
        if (this.localFilter.airlines.indexOf(code) >= 0) {
          this.localFilter.airlines.splice(this.localFilter.airlines.indexOf(code), 1);
        } else {
          this.localFilter.airlines.push(code);
        }
        this.group = [];
      },
      submit() {
        this.$router.back();
      },
      groupFilter(value) {
        if (this.group.indexOf(value) >= 0) {
          this.group.splice(this.group.indexOf(value), 1);
        } else {
          this.group.push(value);
        }
        this.localFilter.airlines = [];
        if (this.group.length > 0) {
          for (let x = 0; x < this.allList.airline.length; x += 1) {
            let isFiltered = true;
            for (let y = 0; y < this.group.length; y += 1) {
              if (this.flightGroup[this.group[y]].indexOf(this.allList.airline[x].code) >= 0) {
                isFiltered = false;
                break;
              }
            }
            if (isFiltered) {
              this.localFilter.airlines.push(this.allList.airline[x].code);
            }
          }
        }
      },
    },
  };
</script>

<style lang="scss">
  .vue-slider-component{
    margin: 8px 0;
  }
  .filterWrap{
    padding-bottom: 78px;
    background-color: #FFF;
    .filterHeader{
      button:nth-of-type(2){
        top: 5px;
        width: 40px;
        right: 16px;
        position: absolute;
        height: 40px;
        line-height: 41px;
        font-size: 12px;
        font-weight: bold;
        border: 0;
        background-color: transparent;
      }
    }
    .filterContent{
      padding: 0 20px;
      > p{
        font-size: 20px;
        font-weight: bold;
      }
      > div{
        .needPadding{
          padding: 0 10px;
        }
        > div:first-of-type{
          color: #9b9b9b;
          font-size: 14px;
          padding-top: 30px;
          line-height: 20px;
          height: 50px;
          margin-bottom: 10px;
          > button{
            line-height: 20px;
            float: right;
            color: #9b9b9b;
            font-size: 12px;
            font-weight: bold;
          }
        }
        p{
          color: #9b9b9b;
          font-size: 12px;
          margin-bottom: 10px;
          margin-top: 2px;
        }
        .times{
          font-size: 18px;
        }
        .filterInputBox{
          .searchIcon{
            background-size: cover;
            width: 16px;
            height: 16px;
            position: absolute;
            pointer-events: none;
            margin-top: 12px;
            margin-left: 14px;
            opacity: .5;
          }
          input{
            height: 40px;
            border-radius: 4px;
            background-color: #f8f8f8;
            width: 100%;
            border: 0;
            margin-bottom: 10px;
            padding-left: 40px;
          }
        }
      }
      .filterBtnWrap{
        overflow: auto;
        margin-right: -8px;
        > div{
          float: left;
          width: 50%;
          height: 53px;
          padding-right: 8px;
          margin-bottom: 8px;
          > button{
            border-radius: 2px;
            background-color: #FFF;
            border: 1px solid #e1e1e1;
            color: #9b9b9b;
            width: 100%;
            height: 53px;
            font-size: 14px;
            transition: .3s ease;
            &.selected{
              border-color: #13b1fa;
              color: #FFF;
              background-color: #13b1fa;
            }
            &.disable{
              cursor: default;
            }
          }
        }
      }
    }
    .btnWrap{
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      height: 78px;
      z-index: 100;
      background-color: #FFF;
      padding: 12px 20px;
      box-shadow: 0 -2px 4px 0 rgba(0, 0, 0, 0.1);
      > button{
        width: 100%;
        height: 54px;
        background-color: #13b1fa;
        color: #FFF;
        font-size: 16px;
        font-weight: bold;
      }
    }
  }
</style>
