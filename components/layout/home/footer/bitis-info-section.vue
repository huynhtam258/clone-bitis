<template>
<div class="bitis-info-section">
  <h2>{{ props.titleInfo }}</h2>
  <ul>
    <li v-for="item in props.itemList">
      <a href="#">{{ item.text }}</a>
    </li>
</ul>
</div>
</template>

<script setup>
const props = defineProps({
  titleInfo: '',
  itemList: []
})
</script>

<style lang="scss" scoped>
.bitis-info-section {
  max-width: 400px;
  padding: 16px;
  h2 {
    font-size: 20px;
    font-weight: bold;
    color: #333;
    margin-bottom: 12px;
  }
  ul {
    list-style: none;
    padding: 0;
    li {
      font-size: 14px;
      color: #555;
      padding: 8px 0;
      font-weight: 500;
      &:last-child {
        border-bottom: none;
      }
    }
  }
}
</style>