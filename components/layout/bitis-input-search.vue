<template>
  <div class="action-search">
    <div class="icon-search">
      <svg version="1.1" class="svg search" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 27"
        style="enable-background:new 0 0 24 27;" xml:space="preserve">
        <path
          d="M10,2C4.5,2,0,6.5,0,12s4.5,10,10,10s10-4.5,10-10S15.5,2,10,2z M10,19c-3.9,0-7-3.1-7-7s3.1-7,7-7s7,3.1,7,7S13.9,19,10,19z">
        </path>
        <rect x="17" y="17" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -9.2844 19.5856)" width="4" height="8">
        </rect>
      </svg>
    </div>
    <input type="text" placeholder="Bạn cần tìm gì">
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.action-search {
  display: flex;
  background-color: #efefef;
  border-radius: 4px;

  .icon-search {
    padding: 10px;
    svg {
      width: 17px;
    }
  }

  input {
    border: unset;
    background-color: #efefef;
    outline: unset;
  }
}
</style>