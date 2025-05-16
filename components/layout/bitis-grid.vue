<template>
  <div class="bitis-grid-container">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.bitis-grid-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 20px;
  

  @media (max-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }

  
  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    padding-left: 0;
    padding-right: 0;
  }
}

</style>