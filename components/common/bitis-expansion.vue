<template>
  <div class="bitis-expansion">
    <div class="bitis-expansion__title" :class="{'isExpansion-title': isExpansion}" @click="onClickExpansion">
      <slot name="title"></slot>
    </div>
    <div class="bitis-expansion__content" :class="{'isExpansion': isExpansion}">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
const isExpansion = ref<boolean>(false)
const onClickExpansion = () => {
  isExpansion.value = !isExpansion.value
}
</script>

<style lang="scss" scoped>
.bitis-expansion {
  &__content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 700ms ease-in-out;

    &.isExpansion {
      max-height: 2000px;
    }
  }
}
</style>