<template>
  <div class="bitis-footer">
    <div class="bitis-footer__bottom">
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
          <NuxtImg src="/logos/bocongthuong_confirm_medium.png" width="120px" alt="Bộ công thương" />
        </div>
        <div class="certificate content-bottom__item">
          Giấy CNĐKDN: 0301340497 được cấp ngày 20/01/1992, được sửa đổi lần thứ 25 ngày 27/01/2022 bởi Sở Kế hoạch và
          Đầu tư TPHCM
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.bitis-footer {
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