<template>
  <div class="bitis-slider">
    <swiper :modules="modules" :pagination="{ clickable: true }" :loop="true" effect="fade">
      <swiper-slide>
        <img class="bitis-slider__img" src="/slider/slider_1.webp" format="webp" alt="slider 1" preload>
      </swiper-slide>
      <swiper-slide>
        <img class="bitis-slider__img" src="/slider/slider_2.webp" format="webp" alt="slider 2" preload>
      </swiper-slide>
    </swiper>
  </div>

</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const modules = [Pagination];
</script>

<style lang="scss" scoped>
.bitis-slider {
  margin: 0 auto 50px;
  max-width: 1920px;

  &__img {
    width: 100%;
  }

}
</style>
<style lang="scss">
.bitis-slider {
  .swiper-pagination {
    .swiper-pagination-bullet {
      background-color: #928c8c;
      opacity: unset;
    }

    .swiper-pagination-bullet-active {
      background-color: black !important;
    }
  }
}
</style>