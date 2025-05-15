<template>
  <footer class="bitis-footer">
    <bitis-newsletter />
    <bitis-gallery />
    <section class="bitis-footer__info">
      <div class="d-flex row-info">
        <bitis-info-section
          :title-info="'Về Bitis'"
          :item-list="[]"
        />
        <bitis-info-section
          :title-info="infomationData.title"
          :item-list="infomationData.menuItems"
        />
        <bitis-info-section
          :title-info="helpData.title"
          :item-list="helpData.menuItems"
        />
        <bitis-contract />
      </div>
    </section>
    <section class="bitis-footer__bottom">
      <div class="container content-bottom d-flex">
        <div class="copyright content-bottom__item">
          <div class="d-flex flex-wrap policy-container">
            <div class="policy-item">Điều khoản</div>
            <div class="policy-item">Chính sách bảo mật</div>
            <div class="policy-item">Hướng dẫn sử dụng</div>
          </div>
          <p>
            Copyright © 2025 Biti's.
            <a href="https://www.haravan.com/" target="_blank">
              Powered by Haravan Enterprise
            </a>
          </p>
        </div>
        <div class="content-bottom__item approved-icon">
          <NuxtImg src="/logos/bocongthuong_confirm_medium.png" :width="120" :height="45" alt="Bộ công thương" format="webp" />
        </div>
        <div class="certificate content-bottom__item">
          Giấy CNĐKDN: 0301340497 được cấp ngày 20/01/1992, được sửa đổi lần thứ 25 ngày 27/01/2022 bởi Sở Kế hoạch và
          Đầu tư TPHCM
        </div>
      </div>
    </section>
  </footer>
</template>

<script setup>
import BitisGallery from './bitis-gallery.vue';
import BitisNewsletter from './bitis-newsletter.vue';
import BitisInfoSection from './bitis-info-section.vue';
import BitisContract from './bitis-contract.vue';

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
</script>

<style lang="scss" scoped>
.bitis-footer {
  &__info {
    padding-top: 25px;
    .row-info {
      justify-content: center;
      gap: 60px;
    }
  }
  &__bottom {
    background-color: #dfdfdf;
    border-top: 1px solid #e7e7e7;
    color: #333333;
    padding: 15px 0;

    .content-bottom {
      align-items: center;
      justify-content: space-between;

      &.container {
        margin: auto;
      }

      .copyright {
        .policy-container {
          gap: 20px;

          .policy-item {
            list-style: none;
          }
        }
      }

      &__item {
        width: 30%;
        &.approved-icon {
          text-align: center;
        }
      }
    }

  }
}

@media (max-width: 700px) {
  .bitis-footer {
    &__bottom {
      .content-bottom {
        flex-direction: column-reverse;
        align-items: center;
        &__item {
          width: 70%;
          text-align: center;
          .policy-container {
            align-items: center;
            justify-content: space-between;
          }
        }
      }

    }
  }
}
</style>