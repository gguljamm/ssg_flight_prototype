<template>
  <div class="placeWrapper">
    <input placeholder="도시명 또는 공항명을 입력해주세요." type="text">
  </div>
</template>

<script>
  export default {};
</script>

<style lang="scss">
  .placeWrapper{
    input{
      width: 100%;
      height: 40px;
      border: 0;
      padding: 0 20px;
      font-size: 18px;
      font-weight: 600;
      letter-spacing: 0.2px;
      &::placeholder{
        color: #9b9b9b;
      }
      &::-webkit-input-placeholder{
        color: #9b9b9b;
      }
      &::-ms-input-placeholder{
        color: #9b9b9b;
      }
    }
  }
</style>
