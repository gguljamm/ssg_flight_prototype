<template>
  <div class="display">
    http://ssg.bringprice.com
    <div>
      <iframe class="displayFrame" src="/" width="375" height="667"></iframe>
    </div>
  </div>
</template>

<script>
  export default {};
</script>

<style lang="scss">
  .display{
    font-size: 16px;
    text-align: center;
    line-height: 40px;
    > div{
      margin: 0 auto;
      background: url(~assets/iphone.png) center center no-repeat;
      background-size: contain;
      width: 850px;
      height: 850px;
      position: relative;
      .displayFrame{
        border-radius: 4px;
        border: 1px solid #dfdfdf;
        background-color: #FFF;
        top: 94px;
        position: absolute;
        width: 375px;
        height: 667px;
        left: 50%;
        margin-left: -187.5px;
      }
    }
  }
</style>
