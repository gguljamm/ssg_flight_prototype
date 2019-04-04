<template>
  <div class="cwCalendar">
    <div>
      <div class="dayOfWeek">
        <ul>
          <li v-for="day in week" :key="day">
            {{ day }}
          </li>
        </ul>
      </div>
    </div>
    <div id="cwcalendar_view" class="calendarContent" ref="calScrollArea"
      :class="{
        done: deptDate && retnDate,
        active: deptDate
      }"
    >
      <div v-for="list in calInfo" :key="list.month">
        <div class="cwmonth_block" :class="list.month">
          {{ `${list.month.substr(0,4)}년 ${list.month.substr(4,6)}월` }}
        </div>
        <div class="cwmonth_week"
          v-for="(week, index) in list.week"
          :key="`${list.month}_${index}`"
        >
          <a href="javascript:"
            v-for="(day, index) in week"
            :class="chkDate(`${list.month}${format.zeros(day.date)}`, day.date)"
            :key="`${list.month}${index}`"
            @click="day.date !== 0 ? clickDate(`${list.month}${format.zeros(day.date)}`) : ''"
          >
            <div>{{ day.date === 0 ? '&nbsp;' : day.date }}</div>
            <div></div>
            <div v-if="!deptDate && day.date !== 0 && (parseInt(`${list.month}${format.zeros(day.date)}`) >= todayNumber)"
              v-show="Math.random() > 0.25"
              :class="{
                lowPrice: Math.random() > 0.5,
                highPrice: Math.random() > 0.75,
              }"
            >21만원</div>
            <div v-else-if="deptDate && !retnDate && day.date !== 0 && (parseInt(`${list.month}${format.zeros(day.date)}`) > parseInt(deptDate.replace(/-/g, '')))"
              v-show="Math.random() > 0.25"
              :class="{
                lowPrice: Math.random() > 0.5,
                highPrice: Math.random() > 0.75,
              }"
            >45만원</div>
          </a>
        </div>
      </div>
    </div>
    <div v-if="!(deptDate && retnDate)" class="notification">
      <div>
        <div>
          <div>최저</div>
          <div>평균</div>
          <div>최고</div>
        </div>
      </div>
    </div>
    <transition name="fade">
      <div v-if="deptDate && retnDate" class="selectBtn">
        <button
          @click="submit()"
        >
          {{ format.getBetweenDay(deptDate, retnDate) }}박
          {{ format.getBetweenDay(deptDate, retnDate) + 1 }}일
        </button>
      </div>
    </transition>
  </div>
</template>

<script>
  import Format from '~/utils/format'; // eslint-disable-line
  export default {
    props: ['inputData'],
    data() {
      const today = new Date();
      const todayString = `${today.getFullYear()}-${Format.zeros(today.getMonth() + 1)}-${Format.zeros(today.getDate())}`;
      let arrWish = [];
      let startCity = '';
      let serviceFlag = 'flight';
      return {
        format: Format,
        calInfo: [],
        week: ['일', '월', '화', '수', '목', '금', '토'],
        month: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        deptDate: this.inputData.departure || '',
        retnDate: this.inputData.arrival || '',
        deptFlag: true,
        todayStr: parseInt(todayString.replace(/-/gi, ''), 10),
        holiday: ['20180924', '20180925', '20180926',
          '20190204', '20190205', '20190206', '20190912', '20190913', '20190914',
          '20200124', '20200125', '20200415', '20200430', '20200930', '20201001', '20201002',
          '20210211', '20210212', '20210213', '20210519', '20210920', '20210921', '20210922',
          '20220131', '20220201', '20220202', '20220122', '20220909', '20220910',
          '20230121', '20230123', '20230527', '20230928', '20230929', '20230930',
          '20240209', '20240210', '20240410', '20240515', '20240916', '20240917', '20240918',
          '20250128', '20250129', '20250130', '20251006', '20251007'],
        generalHoliday: ['0101', '0301', '0505', '0606', '0815', '1003', '1009', '1225'],
        todayString,
        serviceFlag,
        arrOffsetTop: [],
        touchOn: false,
        scrollDate: '',
        wishCities: arrWish,
        startCity,
        todayNumber: parseInt(todayString.replace(/-/g, '')),
      };
    },
    methods: {
      chkDate(date, day) {
        const arr = [];
        const numDept = this.deptDate.replace(/-/g, '');
        const numRetn = this.retnDate.replace(/-/g, '');
        if (day === 0) {
          arr.push('disabled');
        } else if (parseInt(date, 10) < this.todayStr) {
          arr.push('cwdate_block');
          arr.push('disabled');
        } else {
          arr.push('cwdate_block');
          if (numDept &&
            date === numDept) {
            arr.push('start');
          } else if (numRetn &&
            date === numRetn) {
            arr.push('end');
          } else if (numDept &&
            numRetn &&
            parseInt(numDept, 10) < parseInt(date, 10) &&
            parseInt(numRetn, 10) > parseInt(date, 10)) {
            arr.push('range');
          }
        }
        if (this.generalHoliday.indexOf(date.substr(4, 8)) >= 0 || this.holiday.indexOf(date) >= 0) {
          arr.push('holiday');
        }
        return arr;
      },
      clickDate(date) {
        const strDate = `${date.substr(0, 4)}-${date.substr(4, 2)}-${date.substr(6, 2)}`;
        if (parseInt(date, 10) < this.todayStr) {
          return;
        }
        if (this.deptFlag) {
          this.deptDate = strDate;
          this.retnDate = '';
          this.deptFlag = false;
        } else if (parseInt(date, 10) < parseInt(this.deptDate.replace(/-/g, ''), 10)) {
          this.deptDate = strDate;
        } else if (parseInt(date, 10) !== parseInt(this.deptDate.replace(/-/g, ''), 10)) {
          this.retnDate = strDate;
          this.deptFlag = true;
        }
      },
      submit() {
        this.$emit('change-date', this.deptDate, this.retnDate);
      },
      scrollTo (element, to, duration) {
        const start = element.scrollTop
        const change = to - start
        const increment = 20
        let currentTime = 0

        const animateScroll = () => {
          currentTime += increment
          var val = this.easeInOutQuad(currentTime, start, change, duration)
          element.scrollTop = val
          if (currentTime < duration) {
            setTimeout(animateScroll, increment)
          }
        }
        animateScroll()
      },
      easeInOutQuad (t, b, c, d) {
        t /= d / 2
        if (t < 1) return c / 2 * t * t + b
        t--
        return -c / 2 * (t * (t - 2) - 1) + b
      }
    },
    mounted() {
      const today = new Date();
      today.setDate(1);
      for (let x = 1; x <= 12; x += 1) {
        const thisToday = new Date(this.todayString);
        thisToday.setDate(1);
        thisToday.setMonth(today.getMonth() + x);
        thisToday.setDate(0);
        const key = `${thisToday.getFullYear()}${this.format.zeros(thisToday.getMonth() + 1)}`;
        const lastDay = thisToday.getDate();
        const lastDay2 = thisToday.getDay();
        thisToday.setDate(1);
        const firstDay = thisToday.getDay();
        const arrDate = [];
        for (let y = 0; y < firstDay; y += 1) {
          arrDate.push({ date: 0 });
        }
        for (let y = 1; y <= lastDay; y += 1) {
          arrDate.push({ deptPrice: 0, retnPrice: 0, date: y });
        }
        for (let y = lastDay2; y < 6; y += 1) {
          arrDate.push({ date: 0 });
        }
        const arrWeek = [];
        let k = 0;
        for (let y = 0; y < arrDate.length; y += 1) {
          if (!Array.isArray(arrWeek[k])) {
            arrWeek[k] = [];
          }
          arrWeek[k].push(arrDate[y]);
          if (arrWeek[k].length >= 7) {
            k += 1;
          }
        }
        this.calInfo.push({ month: key, week: arrWeek, price: false });
      }
      setTimeout(() => {
        if (this.deptDate) {
          const tag = this.deptDate.replace(/-/g, '').substr(0, 6);
          const offsetTop = window.document.getElementsByClassName(tag)[0].offsetTop;
          this.scrollTo(window.document.getElementById('cwcalendar_view'), offsetTop, 150);
        }
      }, 0);
    },
  }
</script>

<style lang="scss">
  .dayOfWeek{
    width: 100%;
    ul {
      list-style: none;
      width: 100%;
      display: flex;
      padding: 0 16px;
      li {
        color: #9b9b9b;
        font-size: 12px;
        flex: auto;
        text-align: center;
        line-height: 39px;
      }
    }
  }
  .calendarContent{
    background-color: #FFF;
    position: absolute;
    top: 83px;
    bottom: 0;
    left: 0;
    right: 0;
    padding-bottom: 71px;
    overflow-y: auto;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
    .bpPop &{
      bottom: 0;
    }
    > div{
      padding-bottom: 8px;
    }
    .cwmonth_block{
      color: #4a4a4a;
      font-size: 14px;
      font-weight: normal;
      padding: 16px;
    }
    .cwmonth_week{
      display: flex;
      padding: 0 16px;
      > a{
        -webkit-box-flex: 1 0 auto;
        -webkit-flex: 1 0 auto;
        flex: 1 0 auto;
        height: 42px;
        width: 42px;
        margin: 6px 0;
        position: relative;
        cursor: pointer;
        max-width: inherit;
        text-align: center;
        transition: .5s ease;
        color: #000;
        text-decoration: none;
        > div:first-of-type{
          transition: background-color .5s ease;
          line-height: 42px;
          font-size: 14px;
          font-weight: normal;
        }
        > div:nth-of-type(3) {
          position: absolute;
          bottom: -6px;
          font-size: 11px;
          white-space: nowrap;
          color: #9b9b9b;
          width: 100%;
          z-index: 1;
          text-align: center;
          &.lowPrice{
            color: #02d273;
          }
          &.highPrice{
            color: #d0021b;
          }
        }
        &.start > div:nth-of-type(3) {
          display: none;
        }
      }
    }
    .cwmonth_week > a.disabled{
      cursor: default;
      opacity: .3;
    }
    .cwmonth_week > a.cwdate_block{
    }
    .cwmonth_week > a.cwdate_block:first-of-type{
      border-top-left-radius: 2px;
      border-bottom-left-radius: 2px;
    }
    .cwmonth_week > a:first-child > div:first-of-type{
      color: #d0021b;
    }
    .cwmonth_week > a.cwdate_block:last-of-type{
      border-top-right-radius: 2px;
      border-bottom-right-radius: 2px;
    }
    .cwmonth_week > a:last-of-type > div:first-of-type{
      color: #d0021b;
    }
    .cwmonth_week > a.holiday > div:first-of-type{
      color: #d0021b;
    }
    .cwmonth_week > a.start, .cwmonth_week > a.end{
      background-color: #71d0fc;
    }
    .cwmonth_week > a.start:before{
      position: absolute;
      content: '';
      background-color: #FFF;
      left: 0;
      top: 0;
      height: 100%;
      width: 50%;
      z-index: 0;
    }
    .cwmonth_week > a:last-of-type.start:after{
      position: absolute;
      content: '';
      background-color: #FFF;
      right: 0;
      top: 0;
      height: 100%;
      width: 50%;
      z-index: 0;
    }
    .cwmonth_week > a.end:after{
      position: absolute;
      content: '';
      background-color: #FFF;
      right: 0;
      top: 0;
      height: 100%;
      width: 50%;
      z-index: 0;
    }
    .cwmonth_week > a.start > div:nth-of-type(2):after,
    .cwmonth_week > a.end > div:nth-of-type(2):after{
      width: 42px;
      height: 42px;
      background-color: #13b1fa;
      content: '';
      line-height: 42px;
      position: absolute;
      left: 0;
      top: 0;
      border-radius: 50%;
      margin-left: 50%;
      transform: translateX(-50%);
      z-index: 1;
    }
    .cwmonth_week > a.range{
      background-color: #71d0fc;
      &:first-of-type{
        border-top-left-radius: 50%;
        border-bottom-left-radius: 50%;
      }
      &:last-of-type{
        border-top-right-radius: 50%;
        border-bottom-right-radius: 50%;
      }
    }
    .cwmonth_week > a.range > div:first-child,
    .cwmonth_week > a.start > div:first-child,
    .cwmonth_week > a.end > div:first-child{
      color: #FFF;
      position: relative;
      z-index: 2;
    }
    .cwmonth_week > a.range.holiday > div:first-child{
      color: #71d0fc;
    }
  }
  .selectBtn{
    height: 71px;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #FFF;
    padding: 12px 20px;
    z-index: 11;
    &:before{
      border-top: 1px solid #dfdfdf;
      position: absolute;
      top: 0;
      left: 10px;
      right: 10px;
      content: '';
    }
    > div {
      width: 50%;
      float: left;
      &:first-of-type{
        height: 47px;
        padding-top: 6px;
        padding-right: 12px;
        text-align: right;
        > div:first-of-type{
          font-size: 12px;
          color: #9b9b9b;
          line-height: 15px;
        }
        > div:nth-of-type(2){
          font-size: 14px;
          margin-top: 2px;
          line-height: 21px;
          > span{
            font-size: 18px;
            font-weight: bold;
          }
        }
      }
      &:nth-of-type(2){
        height: 47px;
      }
    }
    button{
      background-color: #13b1fa;
      width: 100%;
      height: 47px;
      border-radius: 2px;
      color: #FFF;
      font-weight: bold;
      font-size: 16px;
      line-height: 47px;
      border: 0;
      cursor: pointer;
    }
  }
  .notification{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 27px;
    line-height: 27px;
    background-color: #FFF;
    z-index: 11;
    padding: 0 10px;
    > div{
      border-top: 1px solid #dfdfdf;
      padding: 0 40px;
      > div{
        display: flex;
        > div{
          flex: 0 0 33.33%;
          text-align: center;
          font-size: 10px;
          &:before{
            content: '';
            display: inline-block;
            width: 6px;
            height: 6px;
            margin-right: 4px;
            border-radius: 100%;
          }
        }
        > div:nth-of-type(1):before{
          background-color: #07c98f;
        }
        > div:nth-of-type(2):before{
          background-color: #d8d8d8;
        }
        > div:nth-of-type(3):before{
          background-color: #d0021b;
        }
      }
    }
  }
</style>
