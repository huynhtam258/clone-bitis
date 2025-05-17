<template>
  <section class="bitis-footer__bottom bitis-license">
    <div class="container content-bottom d-flex">
      <div class="copyright content-bottom__item">
        <div class="d-flex flex-wrap policy-container">
          <div class="policy-item">Điều khoản</div>
          <div class="policy-item">Chính sách bảo mật</div>
          <div class="policy-item">Hướng dẫn sử dụng</div>
        </div>
        <p class="powered">
          <span>Copyright © 2025 Biti's.</span>
          <a href="https://www.haravan.com/" target="_blank">
            Powered by Haravan Enterprise
          </a>
        </p>
      </div>
      <div class="content-bottom__item approved-icon">
        <NuxtImg src="/logos/bocongthuong_confirm_medium.png" :width="120" :height="45" alt="Bộ công thương"
          format="webp" />
      </div>
      <div class="certificate content-bottom__item">
        Giấy CNĐKDN: 0301340497 được cấp ngày 20/01/1992, được sửa đổi lần thứ 25 ngày 27/01/2022 bởi Sở Kế hoạch và
        Đầu tư TPHCM
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.bitis-license {
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
        .policy-item {
          list-style: none;
          margin-right: 20px;
        }
      }
    }

    &__item {
      width: 30%;
      line-height: 22.4px;

      &.approved-icon {
        text-align: center;
      }
    }
  }
}

@media (max-width: 768px) {
  .bitis-license {
    padding: 15px ;
    font-weight: 500;
    .content-bottom {
      flex-direction: column-reverse;
      gap: 15px;
      &__item {
        width: 100%;
        text-align: left;
        .policy-container {
          gap: 10px !important;
          justify-content: center;
          .policy-item {
            margin-right: unset !important;
          }
        }
        .powered {
          margin: 15px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      }
    }
  }
}
</style>