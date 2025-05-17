<template>
  <nav class="bitis-nav">
    <ul class="bitis-nav__list">
      <li v-for="item in menuItems" class="bitis-nav__item">
        <a href="">{{ item.name }}</a>
        <ul v-if="item.subItems" class="nav-sub">
          <li v-for="subItem in item.subItems" class="nav-sub__item">
            <a href="#">{{ subItem }}</a>
          </li>
        </ul>
      </li>
    </ul>
  </nav>

</template>

<script setup>
const menuItems = [
  { name: "VỀ BITI'S", link: "#" },
  {
    name: "NAM",
    subItems: ["Hunter", "Sandal", "Giày Thể Thao", "Giày Chạy Bộ & Đi Bộ", "Giày Đá Banh", "Giày Tây", "Dép - Hài", "Balo", "Quần Áo"]
  },
  {
    name: "NỮ",
    subItems: ["Hunter", "Sandal", "Giày Thể Thao", "Giày Chạy Bộ & Đi Bộ", "Giày Đá Banh", "Giày Tây", "Dép - Hài", "Balo", "Quần Áo"]
  },
  {
    name: "BÉ TRAI",
    subItems: ["Giày Thể Thao", "Sandal", "Dép", "Giày & Sandal Tập Đi"]
  },
  {
    name: "BÉ GÁI",
    subItems: ["Giày Thể Thao", "Sandal", "Dép", "Giày & Sandal Tập Đi", "Giày Búp Bê"]
  },
  {
    name: "PHỤ KIỆN",
    subItems: ["Balo", "Balo Trẻ Em", "Túi Trẻ Em", "Túi Người Lớn", "Ví", "Vớ Người Lớn", "Vớ Trẻ Em", "Áo Thun & Áo Khoác", "Quần Dài & Quần Short", "Nón", "Charm", "Lót Đế", "Dây Giày", "Gấu Bông", "Xịt Khử Mùi", "Túi Mù"]
  },
  {
    name: "CHIA SẺ",
    subItems: ["Xu Hướng Thời Trang", "Tư Vấn Chọn Size", "Kinh Nghiệm Hay"]
  }
];
</script>

<style lang="scss" scoped>
.bitis-nav {
  background-color: #fff;
  padding: 10px 20px;

  ul {
    list-style: none;
    display: flex;
    margin: unset;

    .bitis-nav__item {
      position: relative;

      a {
        color: #333;
        text-decoration: none;
        padding: 10px 15px;
        display: block;

        &:hover {
          color: #fff;
        }
      }

      .nav-sub {
        flex-direction: column;
        min-width: 240px;
        box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.2);
        position: absolute;
        top: 100%;
        left: 0;
        background-color: #fff;
        opacity: 0;
        visibility: hidden;
        transform: translateY(10px);
        transition: all 0.3s ease;
        z-index: 1000;

        .nav-sub__item {
          margin: 0;

          a {
            padding: 10px;
            padding: 9px 18px;
            text-align: left;
            display: block;
            font-size: 14px;
            color: var(--shop-color-text);
            border-bottom: 1px solid #ecf0f1;
          }
        }
      }

      &:hover>ul {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
      }
    }
  }
}
</style>