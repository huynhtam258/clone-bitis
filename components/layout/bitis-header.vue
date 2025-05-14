<template>
  <div class="main-header">
    <bitis-header-contract />
    <div class="main-header__container">
      <div class="main-header__logo">
        <NuxtImg src="/logos/logo.svg" alt="bitis" />
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
      <div class="main-header__action"></div>
    </div>
    <bitis-banner />
  </div>
</template>

<script setup>
import BitisHeaderContract from './bitis-header-contract.vue';
import BitisBanner from './bitis-banner.vue';
</script>

<style lang="scss" scoped>
.main-header {
  &__logo {
    height: 60px;
    width: auto;
    padding: 5px 15px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  &__container {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
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