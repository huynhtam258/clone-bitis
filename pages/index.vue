<template>
  <main class="bitis-home">
    <bitis-slider />
    <bitis-body>
      <bitis-home-banner />
      <div class="d-flex home-product">
        <bitis-card :title="''" />
        <bitis-card :title="'Sản phẩm mới'" />
        <bitis-card :title="'Sản phẩm nổi bật'" />
      </div>
    </bitis-body>
    <client-only>
      <bitis-collection />
      <bitis-banner-effect>
        <NuxtImg src="/banner/banner_stitch.webp" alt="banner stitch" format="webp" :width="1950" :height="750" />
      </bitis-banner-effect>
    </client-only>
    <client-only>
      <bitis-news />
      <bitis-stores />
    </client-only>
  </main>
</template>

<script setup>
import BitisBody from "~/components/common/bitis-body.vue"
import BitisSlider from "~/components/layout/bitis-slider.vue";
import BitisCard from '~/components/layout/home/body/bitis-card.vue'
import BitisCollection from "~/components/layout/home/body/bitis-collection.vue";
import BitisBannerEffect from "~/components/common/bitis-banner-effect.vue";

import BitisHomeBanner from "~/components/layout/home/body/bitis-home-banner.vue";
const BitisStores = defineAsyncComponent(() => import("~/components/layout/bitis-stores.vue"));
const BitisNews = defineAsyncComponent(() => import("~/components/layout/home/body/bitis-news.vue"));
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