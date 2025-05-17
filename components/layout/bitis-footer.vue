<template>
  <footer class="bitis-footer">
    <section class="desktop">
      <bitis-newsletter />
      <bitis-gallery />
      <section class="bitis-footer__info">
        <div class="d-flex row-info">
          <bitis-info-section v-for="item in menuOptionList" :title-info="item.title" :item-list="item.menuItems" />
          <bitis-contract />
        </div>
      </section>
      <bitis-license />
    </section>

    <section class="mobile footer-mobile">
      <bitis-gallery />
      <bitis-expansion>
        <template #title>
          <div class="footer-mobile__title">Thông tin thêm</div>
        </template>
        <template #content>
          <bitis-expansion class="footer-mobile__content" v-for="item in menuOptionList">
            <template #title>
              <div class="title-expansion">
                <h4>{{ item.title }}</h4>
              </div>
            </template>
            <template #content>
              <ul class="menu-expansion">
                <li class="menu-expansion__item" v-for="item in item.menuItems">
                  <a :href="item.link">{{ item.text }}</a>
                </li>
              </ul>
            </template>
          </bitis-expansion>
          <bitis-expansion class="footer-mobile__content">
            <template #title>
              <div class="title-expansion">
                <h4>Thông tin địa chỉ</h4>
              </div>
            </template>
            <template #content>
              <bitis-contract />
            </template>
          </bitis-expansion>
          <bitis-license />
        </template>
      </bitis-expansion>
    </section>
  </footer>
</template>

<script setup>
import BitisExpansion from "~/components/layout/bitis-expansion.vue";
import BitisGallery from './bitis-gallery.vue';
import BitisNewsletter from './bitis-newsletter.vue';
import BitisInfoSection from './bitis-info-section.vue';
import BitisContract from './bitis-contract.vue';
import BitisLicense from "./bitis-license.vue";
const aboutBitis = {
  title: "Về Biti's",
  menuItems: [
    { text: "Câu chuyện Bitis's", link: "#" },
    { text: "Hoạt động", link: "#" },
    { text: "Liên hệ", link: "#" },
  ]
}
const infomationData = {
  title: 'Thông tin',
  menuItems: [
    { text: "Trạng thái đơn hàng", link: "#" },
    { text: "Hình thức giao hàng", link: "#" },
    { text: "Hình thức thanh toán", link: "#" },
    { text: "Hướng dẫn cách chọn Size", link: "#" },
    { text: "Chính sách đổi Size", link: "#" },
    { text: "Chính sách đổi trả", link: "#" },
    { text: "Chính sách bảo hành", link: "#" },
    { text: "Chính sách khách hàng thân thiết", link: "#" },
    { text: "Chính sách bảo vệ thông tin khách hàng", link: "#" }
  ]
}
const helpData = {
  title: 'Trợ giúp',
  menuItems: [
    { text: "Tuyển Dụng", link: "#" },
    { text: "Hệ thống cửa hàng", link: "#" },
    { text: "Liên hệ hợp tác", link: "#" },
    { text: "Q&A", link: "#" }
  ]
}
const menuOptionList = [
  aboutBitis,
  infomationData,
  helpData
]
</script>

<style lang="scss" scoped>
.bitis-footer {
  .mobile {
    display: none;
  }

  &__info {
    padding-top: 25px;

    .row-info {
      justify-content: center;
      gap: 60px;
    }
  }

  // &__bottom {
  // }
}

.footer-mobile {
  &__title {
    text-align: center;
    display: block;
    padding: 10px 0 8px;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    background: #ffffff;
  }
  &__content {
    padding: 0 15px;
  }
  .title-expansion {
    padding: 15px 0;

    h4 {
      margin: unset;
      font-size: 16px;
      font-weight: 700;
      text-transform:uppercase;
      font-family: futura-REGULAR, sans-serif;
    }
  }

  .menu-expansion {
    padding: 10px 0px 20px;
    font-weight: 500;
    margin: 0;

    &__item {
      color: var(--footer-color-text);
      font-weight: 500;
      margin-bottom: 8px;
      a {
        line-height: 22.4px;
      }
    }
  }
  .bitis-contract {
    width: 100% !important;
    max-width: unset;
  }
}
</style>