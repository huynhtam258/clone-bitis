<template>
  <section class="bitis-newsletter">
    <div class="d-flex row">
      <div class="bitis-newsletter-content">
        <div class="bitis-newsletter-header">
          <h2>Đăng ký nhận bản tin</h2>
        </div>
        <p class="bitis-newsletter-text">
          Để nhận các thông tin mới từ Biti's cũng như các chương trình khuyến mãi hấp dẫn
        </p>
      </div>
      <div class="bitis-newsletter-form">
        <input type="email" placeholder="Vui lòng nhập email của bạn...">
        <button @click="subscribe">ĐĂNG KÝ</button>
      </div>
    </div>

  </section>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.bitis-newsletter {
  background-color: #1b4ea0;
  color: white;
  text-align: center;
  width: 100%;
  margin: auto;

  .row {
    margin: auto;
    gap: 25px;
    align-items: center;
    padding: 20px 0;
    justify-content: center;

    .bitis-newsletter-content {
      .bitis-newsletter-header {
        text-align: right;

        h2 {
          font-size: 20px;
          margin: 0 0 10px 0;
        }

        .bitis-newsletter-text {
          font-size: 14px;
        }
      }
    }

    .bitis-newsletter-form {
      display: flex;
      gap: 10px;
      width: 550px;
      background-color: white;
      padding: 3px;
      border-radius: 4px;

      input {
        flex: 1;
        padding: 10px;
        border-radius: 5px;
        border: none;
        outline: none;
      }

      button {
        background-color: #003d82;
        color: white;
        border: none;
        padding: 10px 16px;
        border-radius: 5px;
        cursor: pointer;
      }

    }
  }
}
</style>