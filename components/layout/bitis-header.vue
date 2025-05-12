<template>
  <div class="main-header">
    <div class="main-header__container">
      <div class="main-header__logo">
        <img src="./../../assets/logo.svg" alt="" srcset="">
      </div>
      <ul class="main-header__list">
        <li class="main-header__item">VỀ BITI'S</li>
        <li class="main-header__item">NAM</li>
        <li class="main-header__item">NỮ</li>
        <li class="main-header__item">BÉ TRAI</li>
        <li class="main-header__item">BÉ GÁI</li>
        <li class="main-header__item">PHỤ KIỆN</li>
        <li class="main-header__item">CHIA SẺ</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.main-header {
  &__container {
    display: flex;
  }
  &__list {
    padding: 0;
    margin: 0;
  }
  &__item {
    list-style: none;
    display: inline-block;
    margin: 0 10px;
  }
}
</style>