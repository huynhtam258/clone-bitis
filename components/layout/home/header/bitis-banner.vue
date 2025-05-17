<template>
  <div class="bitis-banner">
    <bitis-logo-hunter />
    <h3 class="desktop"> Biti's Hunter thế hệ mới</h3>
    <div></div>
  </div>
</template>

<script setup>
import BitisLogoHunter from '~/components/common/icon/bitis-logo-hunter.vue';
</script>

<style lang="scss" scoped>
.bitis-banner {
  min-height: 70px;
  background: #ff3d00;
  font-family: "MN HUNTER", sans-serif;
  font-size: 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  font-weight: 700;
  color: #111111;
  svg {
    margin-left: 17px;
  }
  h3 {
    margin: 0;
    font-style: italic;
  }
}
</style>