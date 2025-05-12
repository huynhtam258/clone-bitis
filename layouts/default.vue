<template>
  <bitis-header />
  <bitis-body>
    <bitis-grid>
      <bitis-grid-item v-for="i in 10">Item {{ i }}</bitis-grid-item>
    </bitis-grid>
  </bitis-body>

  <bitis-footer />
</template>

<script setup>
import BitisHeader from "~/components/layout/bitis-header.vue";
import BitisBody from "~/components/layout/bitis-body.vue"
import BitisGrid from "~/components/layout/bitis-grid.vue";
import BitisGridItem from "~/components/layout/bitis-grid-item.vue";
import BitisFooter from "~/components/layout/bitis-footer.vue";

import { useHead } from 'nuxt/app'

useHead({
  title: `Trang bán hàng trực tuyến của Biti's Việt Nam`,
  meta: [
    { name: 'description', content: `Trang bán hàng chính thức trực thuộc công ty TNHH Bình Tiên (Biti’s), kênh bán hàng trực tuyến sản phẩm giày dép Biti's Việt Nam` },
    { name: 'keywords', content: 'Bán giày online' },
    { property: 'og:title', content: 'Trang web bán hàng chính hãng' },
    { property: 'og:description', content: `Trang bán hàng chính thức trực thuộc công ty TNHH Bình Tiên (Biti’s), kênh bán hàng trực tuyến sản phẩm giày dép Biti's Việt Nam` }
  ]
})

</script>

<style></style>