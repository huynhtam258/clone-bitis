<template>
  <div class="bitis-stores">
    <h3 class="container">Hệ thống cửa hàng của bitis</h3>
    <div class="bitis-stores__main container">
      <div class="locations">
        <label for="provices">provices</label>
        <select class="locations-select" name="provices" id="provices">
          <option v-for="province in vietnamProvinces" :value="province">{{ province }}</option>
        </select>
        <div class="store-address">
          <div v-for="i in 50" class="store-address__item">
            <div class="location-icon">
              <bitis-icon-location />
            </div>
            <div class="infoLine-address">
              <div class="nameLine-address">
                CH 462 Huỳnh Tấn Phát - Quận 7 - HCM
              </div>
              <div class="infoAddress-address">
                462 Huỳnh Tấn Phát, Khu Phố 2, Phường Bình Thuận, Quận 7, Thành phố Hồ Chí Minh
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="img-map">
        <NuxtImg src="/map/map_bitis.jpg" :width="1024" :height="1024" format="webp" alt="map-img" />
      </div>
    </div>
  </div>
</template>

<script setup>
import BitisIconLocation from '../common/icon/bitis-icon-location.vue';

const vietnamProvinces = [
  "Tất cả", "An Giang", "Bà Rịa - Vũng Tàu", "Bắc Giang", "Bắc Kạn", "Bạc Liêu", "Bắc Ninh",
  "Bến Tre", "Bình Định", "Bình Dương", "Bình Phước", "Bình Thuận", "Cà Mau",
  "Cần Thơ", "Cao Bằng", "Đà Nẵng", "Đắk Lắk", "Đắk Nông", "Điện Biên", "Đồng Nai",
  "Đồng Tháp", "Gia Lai", "Hà Giang", "Hà Nam", "Hà Nội", "Hà Tĩnh", "Hải Dương",
  "Hải Phòng", "Hậu Giang", "Hòa Bình", "Hưng Yên", "Khánh Hòa", "Kiên Giang",
  "Kon Tum", "Lai Châu", "Lâm Đồng", "Lạng Sơn", "Lào Cai", "Long An",
  "Nam Định", "Nghệ An", "Ninh Bình", "Ninh Thuận", "Phú Thọ", "Phú Yên",
  "Quảng Bình", "Quảng Nam", "Quảng Ngãi", "Quảng Ninh", "Quảng Trị",
  "Sóc Trăng", "Sơn La", "Tây Ninh", "Thái Bình", "Thái Nguyên", "Thanh Hóa",
  "Thừa Thiên Huế", "Tiền Giang", "TP. Hồ Chí Minh", "Trà Vinh", "Tuyên Quang",
  "Vĩnh Long", "Vĩnh Phúc", "Yên Bái"
];
</script>

<style lang="scss" scoped>
.bitis-stores {
  background: url('/bg_banner_center.webp');
  margin-top: 50px;
  padding-top: 80px;
  padding-bottom: 65px;
  h3 {
    font-size: 18px;
    border-bottom: 2px solid #f3f3f3;
    margin-bottom: 30px;
    font-weight: bold;
    text-transform: uppercase;
  }

  &__main {
    width: 100%;
    display: flex;
    gap: 10px;

    .locations {
      width: 35%;
      height: 100%;
      display: flex;
      flex-direction: column;
      position: relative;
      label {
        position: absolute;
        color: transparent;
      }

      .locations-select {
        width: 100%;
        height: 32px;
        border: unset;
        padding: 0 10px;
        box-shadow: 0 0px 3px 0px #cfc7c7;
      }

      .store-address {
        margin-top: 10px;
        padding: 10px;
        height: 100%;
        height: 600px;
        background-color: #FFF;
        box-shadow: 0 0px 3px 0px #cfc7c7;
        overflow-y: scroll;

        &__item {
          border-bottom: 1px solid #f2f2f2;
          padding: 10px 0;
          display: flex;
          align-items: start;
          gap: 10px;
          .location-icon {
            svg {
              margin-top: 5px;
              width: 17px;
              height: 17px;
            }
          }
          .infoLine-address {
            .nameLine-address {
              font-weight: 500;
              color: var(--shop-color-main);
              line-height: 20.3px;
            }

            .infoAddress-address {
              font-size: 13px;
              color: #757575;
              line-height: 18.85px;
            }
          }
        }
      }
    }

    .img-map {
      width: 65%;
      aspect-ratio: 4/3;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}

@media (max-width: 768px) {
  .bitis-stores {
    padding: 0 15px 65px;
    h3 {
      font-size: 16px;
      margin-bottom: 15px;
    }
  }
  .bitis-stores__main {
    flex-direction: column;
    .locations {
      width: 100%;
      .store-address {
        height: 322px;
      }
    }
    .img-map {
      width: 100%;
    }
  }
}
</style>