<template>
  <div class="bitis-body">
    <div class="bitis-body__container">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.bitis-body {
  &__container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }
}
</style>