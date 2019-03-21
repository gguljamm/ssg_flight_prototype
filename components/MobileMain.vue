<template>
  <div>
    <div class="header">
      <div :class="init ? 'fade' : ''">
        <a class="logo" href="/"></a>항공
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      init: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.init = true;
    });
  },
};
</script>

<style>
  .header{
    height: 54px;
    text-align: center;
  }
  .header > div{
    display: inline-block;
    line-height: 20px;
    padding: 17px 0;
    font-weight: bold;
    transform: translateY(-54px);
    opacity: 0;
    transition: .3s ease;
  }
  .header > div.fade{
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
</style>
