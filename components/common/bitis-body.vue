<template>
  <main class="bitis-body">
    <section class="bitis-body__container">
      <slot></slot>
    </section>
  </main>
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