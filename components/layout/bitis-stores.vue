<template>
  <div class="bitis-stores">
    <h3 class="container">Hệ thống cửa hàng của bitis</h3>
    <div class="bitis-stores__main container">
      <div class="locations">
        <select class="locations-select" name="cars" id="cars">
          <option v-for="province in vietnamProvinces" :value="province">{{ province }}</option>
        </select>
        <div class="store-address">
          <div v-for="i in 50" class="store-address__item">
            <div class="location-icon">
              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink"
                xmlns:svgjs="http://svgjs.com/svgjs" width="512" height="512" x="0" y="0" viewBox="0 0 512 512"
                style="enable-background:new 0 0 512 512" xml:space="preserve" class="">
                <g>
                  <g xmlns="http://www.w3.org/2000/svg">
                    <g>
                      <path
                        d="M256,0C166.035,0,91,72.47,91,165c0,35.202,10.578,66.592,30.879,96.006l121.494,189.58 c5.894,9.216,19.372,9.198,25.254,0l122.021-190.225C410.512,232.28,421,199.307,421,165C421,74.019,346.981,0,256,0z M256,240 c-41.353,0-75-33.647-75-75c0-41.353,33.647-75,75-75c41.353,0,75,33.647,75,75C331,206.353,297.353,240,256,240z"
                        fill="#1b4ea0" data-original="#000000" class=""></path>
                    </g>
                  </g>
                  <g xmlns="http://www.w3.org/2000/svg">
                    <g>
                      <path
                        d="M373.264,344.695l-75.531,118.087c-19.551,30.482-64.024,30.382-83.481,0.029l-75.654-118.085 C72.034,360.116,31,388.309,31,422c0,58.462,115.928,90,225,90s225-31.538,225-90C481,388.285,439.909,360.077,373.264,344.695z"
                        fill="#1b4ea0" data-original="#000000" class=""></path>
                    </g>
                  </g>
                </g>
              </svg>
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
</style>