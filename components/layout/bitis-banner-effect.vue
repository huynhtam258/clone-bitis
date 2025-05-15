<template>
  <section class="bitis-banner-effect">
    <a href="#" class="banner-effect">
      <slot></slot>
    </a>
  </section>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.bitis-banner-effect {
  width: 100%;
  height: auto;
  overflow: hidden;

  .banner-effect {
    position: relative;
    overflow: hidden;
    display: block;

    &::after {
      content: "";
      display: inline-block;
      width: 150%;
      height: 80%;
      position: absolute;
      right: 30%;
      top: -75%;
      background: rgba(255, 255, 255, 0.25);
      transform: skewY(-50deg);
      transition: all 0.5s ease 0s;
    }

    &:hover {
      &::after {
        right: -75%;
        top: 120%;
      }
    }
  }

  a {
    img {
      width: 100% !important;
      height: auto !important;
      transition: transform 0.3s ease-in-out;

      &:hover {
        transform: scale(1.05);
      }
    }
  }

}
</style>