<template>
  <bitis-header />
  <slot></slot>
  <bitis-footer />
</template>

<script lang="ts" setup>
import BitisHeader from "~/components/layout/home/header/bitis-header.vue";
import BitisFooter from "~/components/layout/home/footer/bitis-footer.vue";
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
