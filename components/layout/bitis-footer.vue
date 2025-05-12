<template>
  <div class="bitis-footer">
    <!-- <div class="bitis-footer__bottom">
      <div class="container content-bottom d-flex">
        <div class="copyright">
          <div class="d-flex flex-wrap policy-container">
            <div class="policy-item">Điều khoản</div>
            <div class="policy-item">Chính sách bảo mật</div>
            <div class="policy-item">Hướng dẫn sử dụng</div>
          </div>
          <p>Copyright © 2025 Biti's. Powered by Haravan Enterprise</p>
        </div>
        <div>
          <img class="img-confirm" src="~/assets/img/bocongthuong_confirm_medium.png" alt="Bộ công thương">
        </div>
        <div class="certificate">
          Giấy CNĐKDN: 0301340497 được cấp ngày 20/01/1992, được sửa đổi lần thứ 25 ngày 27/01/2022 bởi Sở Kế hoạch và
          Đầu tư TPHCM
        </div>
      </div>
    </div> -->
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

      &.container {
        margin: auto;
      }

      .img-confirm {
        width: 120px;
      }

      .copyright {
        max-width: 30%;

        .policy-container {
          gap: 20px;

          .policy-item {
            list-style: none;
          }
        }
      }

      .certificate {
        max-width: 30%;
      }
    }

  }
}
</style>