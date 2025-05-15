<template>
  <section class="bitis-gallery d-flex">
    <div class="bitis-gallery__item">
      <NuxtImg src="/gallery/gallery_1.webp" width="320" height="320" format="webp" alt="gallery image" />
    </div>
    <div class="bitis-gallery__item">
      <NuxtImg src="/gallery/gallery_2.webp" width="320" height="320" format="webp" alt="gallery image" />
    </div>
    <div class="bitis-gallery__item">
      <NuxtImg src="/gallery/gallery_3.jpg" width="320" height="320" format="webp" alt="gallery image" />
    </div>
    <div class="bitis-gallery__item">
      <NuxtImg src="/gallery/gallery_4.webp" width="320" height="320" format="webp" alt="gallery image" />
    </div>
    <div class="bitis-gallery__item">
      <NuxtImg src="/gallery/gallery_5.webp" width="320" height="320" format="webp" alt="gallery image" />
    </div>
    <div class="bitis-gallery__item">
      <NuxtImg src="/gallery/gallery_6.webp" width="320" height="320" format="webp" alt="gallery image" />
    </div>
    <div class="bitis-gallery__item">
      <NuxtImg src="/gallery/gallery_7.webp" width="320" height="320" format="webp" alt="gallery image" />
    </div>
    <div class="bitis-gallery__item">
      <NuxtImg src="/gallery/gallery_8.jpg" width="320" height="320" format="webp" alt="gallery image" />
    </div>
  </section>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.bitis-gallery {
  width: 100%;
  &__item {
    width: calc(100% / 8);
    aspect-ratio: 1 / 1;
    
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>