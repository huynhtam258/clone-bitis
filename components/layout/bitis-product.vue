<template>
  <div class="bitis-product">
    <div class="bitis-product__image">
      <NuxtImg src="/products/product_1.webp"
        alt="[Sale khủng đồng giá 799k] Giày Thể Thao Biti’s Hunter X LiteDash - Original Edition 2K24 Nam Màu Kem Lợt HSM007506KEL"
        format="webp"
      />
    </div>

    <div class="bitis-product__box">
      <div class="box-title">
        <h4>
          <a href="https://bitis.com.vn/products/giay-the-thao-nam-biti-s-hunter-x-litedash-original-edition-2k24-hsm007506kel">
            [Sale khủng đồng giá 799k] Giày Thể Thao Biti’s Hunter X LiteDash - Original Edition 2K24 Nam Màu Kem
            Lợt HSM007506KEL
          </a>
        </h4>
      </div>
      <div class="box-price d-flex justify-content-between">
        <div class="main-price-sale">
          <span class="main-price-inner">
            799,000 đ
          </span>
        </div>
        <div class="main-price-del d-flex align-items-center justify-content-center">
          1,070,000 đ
        </div>
        <span class="sale-price-discount d-flex align-items-center justify-content-center">
          25%
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.bitis-product {
  width: 100%;
  padding-bottom: 10px;

  &__image {
    width: 100%;
    aspect-ratio: 1 / 1;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__box {
    padding: 0 10px;

    .box-title {
      h4 {
        font-size: 14px;
        font-weight: 500;
        margin: 0 0 5px 0;
        text-align: left;
      }
    }

    .box-price {
      width: 100%;

      .main-price-sale {
        font-size: 16px;
        font-weight: 500;
        color: #ed4e4e !important;

        .main-price-inner {
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
        }
      }

      .main-price-del {
        text-decoration: line-through;
      }

      .sale-price-discount {
        border: 1px solid #e71a3c;
        color: #e71a3c;
        border-radius: 3px;
        padding: 2px 5px;
        background: #ffe9ea;
      }
    }
  }
}
</style>