<template>
  <div class="bitis-collection">
    <h2>Chúng tôi có gì mới</h2>
    <div class="bitis-grid-banner container">
      <bitis-banner-effect>
        <NuxtImg src="/banner/banner_giaytennis.jpg" alt="banner stitch" format="webp" :width="403" :height="217" />
      </bitis-banner-effect>
      <bitis-banner-effect>
        <NuxtImg src="/banner/banner_gauchuatam.webp" alt="banner stitch" format="webp" :width="403" :height="217" />
      </bitis-banner-effect>
      <bitis-banner-effect>
        <NuxtImg src="/banner/banner_stitch.webp" alt="banner stitch" format="webp" :width="403" :height="217" />
      </bitis-banner-effect>
    </div>
  </div>
</template>

<script setup>
import BitisBannerEffect from "~/components/common/bitis-banner-effect.vue";
</script>

<style lang="scss" scoped>
.bitis-collection {
  padding: 50px 0 30px 0;
  background: url('/bg_banner_center.webp');
  background-position: center top;

  h2 {
    text-align: center;
    margin: 0;
    font-size: 18px;
    color: #000;
    font-weight: bold;
  }

  .bitis-grid-banner {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    width: 80%;
    margin: 50px auto 0;
  }

  .bitis-banner-effect {
    img {
      width: 100%;
      height: auto;
    }
  }
}

// @media (max-width: 768px) {
//   .bitis-grid-banner {
//     grid-template-columns: unset !important;
//   }
// }
</style>