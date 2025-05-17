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
    <bitis-collection />
    <bitis-banner-effect>
      <NuxtImg
        src="/banner/banner_stitch.webp"
        alt="banner stitch"
        format="webp"
        :width="1950"
        :height="750"
      />
    </bitis-banner-effect>
    <bitis-news />
    <bitis-stores />
    <bitis-footer />
  </div>
</template>

<script lang="ts" setup>
import BitisHeader from "~/components/layout/bitis-header.vue";
import BitisBody from "~/components/layout/bitis-body.vue"
import BitisSlider from "~/components/layout/bitis-slider.vue";
import BitisCard from '~/components/layout/bitis-card.vue'
import BitisCollection from "~/components/layout/bitis-collection.vue";
import BitisBannerEffect from "~/components/layout/bitis-banner-effect.vue";
import BitisFooter from "~/components/layout/bitis-footer.vue";
import BitisHomeBanner from "~/components/layout/bitis-home-banner.vue";
import BitisStores from "~/components/layout/bitis-stores.vue";
import BitisNews from "~/components/layout/bitis-news.vue";
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
.bitis-home {
  .home-product {
    flex-direction: column;
    gap: 60px;
  }
  .bitis-banner-effect {
    img {
      width: 100%;
      height: auto;
    }
  }
}

@media (max-width: 768px) {
  .bitis-home {
    .home-product {
      gap: 30px;
    }
  }
}
</style>