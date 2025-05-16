<template>
  <section class="bitis-news">
    <div class="container">
      <h3>TIN TỨC BITIS</h3>
      <Swiper :spaceBetween="10" :slidesPerView="4" :loop="true" :navigation="true" :breakpoints="{
        1024: { slidesPerView: 4 },
        768: { slidesPerView: 2 },
        480: { slidesPerView: 1 }
      }">
        <SwiperSlide v-for="(item, index) in items" :key="index">
          <div class="news-item">
            <div class="news-image">
              <NuxtImg src="/news/news_image.webp" alt="news" :width="480" :height="480" />
            </div>
            <div class="news-content">
              <h4 class="news-content__title">
                <a href="#">BITI'S ĐẠT “TOP 100 NƠI LÀM VIỆC TỐT NHẤT VIỆT NAM” 5 NĂM LIÊN TIẾP</a>
              </h4>
              <div class="news-content__detail">
                <p class="short-description">
                  <a href="#">
                    Tối ngày 19/11/2024, Biti’s tiếp tục được vinh danh trong Top 100 Nơi Làm Việc Tốt Nhất Việt...
                  </a>
                </p>
              </div>
              <div class="news-content__footer">
                <div class="news-footer d-flex align-items-center justify-content-between">
                  <span class="date">
                    05/12/2024
                  </span>
                  <span class="view-more">
                    <a href="#">Xem thêm</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

const items = Array.from({ length: 10 });
</script>

<style lang="scss" scoped>
.bitis-news {
  padding-top: 30px;

  h3 {
    font-size: 18px;
    border-bottom: 2px solid #f3f3f3;
    margin-bottom: 30px;
    font-weight: bold;
  }

  .news-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #f8f9fb;
    font-size: 18px;

    .news-image {
      width: 100%;
      aspect-ratio: 1 / 1;

      img {
        width: 100%;
        height: auto;
      }
    }

    .news-content {
      padding: 10px;

      &__title {
        margin: 0;
        font-size: 15px;
        font-weight: 500;
        margin: 0 0 8px 0;
        line-height: 1.3;
      }

      &__detail {
        .short-description {
          color: #979393;
          font-size: 13px;
          margin: 0;
        }
      }
      &__footer {
        margin-top: 10px;
        padding-top: 10px;
        border-top: 1px solid #e6e5e5;
        font-size: 13px;
        width: 100%;
        .date {
          color: #979393;
          font-style: italic;
        }

        .view-more {
          color: #979393;
          font-weight: 700;
        }
      }
    }
  }
}
</style>