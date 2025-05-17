<template>
  <div class="action-search">
    <div class="icon-search">
      <bitis-icon-search />
    </div>
    <input type="text" placeholder="Bạn cần tìm gì...">
  </div>
</template>

<script setup>
import BitisIconSearch from '~/components/common/icon/bitis-icon-search.vue';
</script>

<style lang="scss" scoped>
.action-search {
  display: flex;
  background-color: #efefef;
  border-radius: 4px;

  .icon-search {
    padding: 10px;
    width: fit-content;

    svg {
      width: 17px;
      height: 17px;
    }
  }

  input {
    border: unset;
    background-color: #efefef;
    outline: unset;
  }
}

@media (max-width: 768px) {
  .action-search {
    flex-direction: row-reverse;
    height: 34px;
    border-radius: 4px;
    input {
      padding-left: 10px;
      width: 100%;
    }
    .icon-search {
      background-color: #000;
      svg {
        fill: #fff;
      }
    }
  }
}
</style>