<template>
  <div class="bitis-banner">
    <svg width="127" height="41" viewBox="0 0 127 41" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M35.0821 0H61.3929L50.3446 10.6078C56.6096 9.05901 63.2146 8.10439 70.2766 7.5087L78.2494 0H105.814L96.7028 7.62784C109.573 8.34266 121.078 10.0121 127 11.9183C115.041 12.3949 101.031 12.7523 84.4005 15.2557C77.6801 16.2088 71.5305 17.1619 65.0378 18.593C71.5305 17.8782 79.1617 17.9974 84.4005 18.9505L58.659 41H38.4992L59.1158 20.1434C55.1294 21.2156 50.8015 22.5276 46.1305 24.3147C30.6403 30.0363 18.9088 41 18.9088 41H0L35.0821 0Z"
        fill="#111111"></path>
    </svg>
    <h3 class="desktop"> Biti's Hunter thế hệ mới</h3>
    <div></div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.bitis-banner {
  min-height: 70px;
  background: #ff3d00;
  font-family: "MN HUNTER", sans-serif;
  font-size: 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  font-weight: 700;
  color: #111111;
  svg {
    margin-left: 17px;
  }
  h3 {
    margin: 0;
    font-style: italic;
  }
}
</style>