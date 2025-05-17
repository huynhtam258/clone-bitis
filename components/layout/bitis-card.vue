<template>
  <div class="bitis-card">
    <h2 v-if="props.title" class="bitis-card__title">
      {{ props.title }}
    </h2>
    <bitis-grid>
      <bitis-grid-item v-for="i in 10">
        <bitis-product />
      </bitis-grid-item>
    </bitis-grid>
  </div>

</template>

<script setup>
import BitisGrid from "~/components/common/bitis-grid.vue";
import BitisGridItem from "~/components/common/bitis-grid-item.vue";
import bitisProduct from "~/components/layout/bitis-product.vue";

const props = defineProps({
  title: String,
});

</script>

<style lang="scss" scoped>
.bitis-card {
  &__title {
    text-shadow: 0 0.1em 20px #ff0000,
      0.05em -0.03em 0 #ff0000,
      0.05em 0.005em 0 #ff0000,
      0em 0.08em 0 #ff0000,
      0.05em 0.08em 0 #ff0000,
      0px -0.03em 0 #ff0000,
      -0.03em -0.03em 0 #ff0000,
      -0.03em 0.08em 0 #ff0000,
      -0.03em 0 0 #ff0000;
    color: #ff0000 !important;
    line-height: 2.2rem;
    font-size: 20px;
    text-transform: uppercase;
    font-weight: bold;
    padding: 0 0 10px 0;
    text-align: center;
    margin: 0 0 50px 0;
  }
}
</style>