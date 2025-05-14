<template>
  <div class="bitis-header-contract">
    <div class="container-fluid">
      <ul>
        <li>Hotline: <strong>0966158666</strong> (8h – 21h30)</li>
        <li>Liên hệ hợp tác</li>
      </ul>
      <ul>
        <li>Tìm cửa hàng</li>
        <li>Kiểm tra đơn hàng</li>
        <li>VN</li>
        <li class="b2b">
          <img src="/logos/b2b.webp" alt="b2b" width="120px" height="28px">
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.bitis-header-contract {
  display: flex;
  background-color: #212026;
  color: #fff;
  font-size: 13px;
  padding: 8px 0;
  .container-fluid {
    max-width: 1600px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 30px;
    ul {
      margin: unset;
      display: flex;
      align-items: center;
      li {
        list-style: none;
        padding: 2px 12px;
        border-left: 2px solid;
        &.b2b {
          padding: 0 5px;
        }
        &:first-child {
          border: unset;
        }
      }
    }
  }
}
</style>