<template>
  <div class="bitis-contract">
    <NuxtImg src="/logos/logo.svg" :height="60" :width="95" alt="bitis" width="110px"/>
    <h4>CÔNG TY TNHH SẢN XUẤT HÀNG TIÊU DÙNG BÌNH TIÊN</h4>
    <ul class="bitis-contract__list">
      <li class="bitis-contract__item andress-item">
        <strong>Địa chỉ:</strong> 22 Lý Chiêu Hoàng, Phường 10, Quận 6, TP. Hồ Chí Minh
      </li>
      <li class="bitis-contract__item">
        <strong>Điện thoại:</strong> <a href="">(028) 38 753 443</a>
      </li>
      <li class="bitis-contract__item email-item">
        <strong>Email:</strong> Liên hệ các vấn đề về đơn hàng Online, kênh cửa hàng, đại lý (offline) :
        <a href="#"> chamsockhachhang@bitis.com.vn</a>
      </li>
      <li class="bitis-contract__item">
        <strong>Hotline:</strong> <a href="#">0966158666</a>
      </li>
      <li class="bitis-contract__item">
        <strong>Thời gian tư vấn:</strong> 8h – 21h30 các ngày trong tuần (trừ ngày Lễ, Tết)
      </li>
    </ul>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.bitis-contract {
  max-width: 388px;
  h4 {
    margin-bottom: 0px;
  }
  &__list {
    margin-top: 6px;
  }
  &__item {
    list-style: none;
    margin-bottom: 17px;
    line-height: 22px;
    font-size: 14px;
    a {
      color: #2972e7;
      text-decoration: underline;
      font-weight: bold;
    }
    &.email-item {
      font-weight: bold;
    }
    &.andress-item {
      margin-bottom: 0;
    }
  }
}
</style>