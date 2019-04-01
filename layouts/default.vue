<template>
  <div
    :class="scrollTop ? 'scrollTop' : ''"
  >
    <nuxt/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrollTop: false,
    };
  },
  methods: {
    bodyScroll() {
      const scrollY = (window.pageYOffset || document.documentElement.scrollTop);
      if (scrollY < 94) {
        this.scrollTop = false;
      } else {
        this.scrollTop = true;
      }
    },
  },
  mounted() {
    this.bodyScroll();
    window.addEventListener('scroll', this.bodyScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.bodyScroll);
  },
};
</script>

<style>
html {
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  font-size: 14px;
  font-family: 'AppleSDGothicNeo-Regular',sans-serif;
  color: #000;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}
:focus{
  outline: none;
}
.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
.slide-fade-enter-active,
.slide-bottom-fade-enter-active,
.slide-left-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active,
.slide-bottom-fade-leave-active,
.slide-left-fade-enter-active{
  transition: all .1s ease;
}
.slide-fade-enter, .slide-fade-leave-to,
.slide-bottom-fade-enter, .slide-bottom-fade-leave-to,
.slide-left-fade-enter, .slide-left-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.slide-fade-enter{
  transform: translateX(50px);
}
.slide-bottom-fade-enter{
  transform: translateY(50px);
}
.slide-left-fade-enter{
  transform: translateX(-50px);
}
</style>

