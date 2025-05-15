<template>
  <div class="bitis-home">
    <bitis-header />
    <bitis-slider />
    <bitis-body>
      <bitis-home-banner />
      <div class="d-flex home-product">
        <bitis-card :title="''" />
        <bitis-card :title="'Sản phẩm mới'" />
        <bitis-card :title="'Sản phẩm nổi bật'" />
      </div>
    </bitis-body>
    <section class="banner-stitch">
      <a href="#" class="banner-effect">
        <NuxtImg src="/banner/banner_stitch.webp" alt="banner stitch" format="webp" :width="1950" :height="750" />
      </a>
    </section>
    <bitis-footer />
  </div>
</template>

<script setup>
import BitisHeader from "~/components/layout/bitis-header.vue";
import BitisBody from "~/components/layout/bitis-body.vue"
import BitisSlider from "~/components/layout/bitis-slider.vue";
import BitisCard from '~/components/layout/bitis-card.vue'
import BitisFooter from "~/components/layout/bitis-footer.vue";
import bitisHomeBanner from "~/components/layout/bitis-home-banner.vue";

import { useHead } from 'nuxt/app'

useHead({
  title: `Trang bán hàng trực tuyến của Biti's Việt Nam`,
  meta: [
    { name: 'description', content: `Trang bán hàng chính thức trực thuộc công ty TNHH Bình Tiên (Biti’s), kênh bán hàng trực tuyến sản phẩm giày dép Biti's Việt Nam` },
    { name: 'keywords', content: 'Bán giày online' },
    { property: 'og:title', content: 'Trang web bán hàng chính hãng' },
    { property: 'og:description', content: `Trang bán hàng chính thức trực thuộc công ty TNHH Bình Tiên (Biti’s), kênh bán hàng trực tuyến sản phẩm giày dép Biti's Việt Nam` }
  ],
  htmlAttrs: {
    lang: 'en'
  }
})

</script>

<style lang="scss" scoped>
.home-product {
  flex-direction: column;
  gap: 60px;
}

.banner-stitch {
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
  img {
    width: 100%;
    height: auto;
    transition: transform 0.3s ease-in-out;
    &:hover {
      transform: scale(1.05);
    }

  }
}
</style>