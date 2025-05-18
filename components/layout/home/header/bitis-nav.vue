<template>
  <nav class="bitis-nav">
    <ul class="bitis-nav__list">
      <li v-for="item in menuItems" class="bitis-nav__item">
        <a href="">
          <span>{{ item.name }}</span>
          <bitis-icon-chevron-down v-if="item.subItems" />
        </a>
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
import BitisIconChevronDown from "~/components/common/icon/bitis-icon-chevron-down.vue";
import { menuItems } from '~/utils/menu';
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
        display: flex;
        align-items: center;
        gap: 10px;
        svg {
          width: 7px;
          height: 7px;
          -webkit-transition: all 0.4s ease-in-out 0s;
        }
        &:hover {
          color: #fff;
          svg {
            transform: rotate(-180deg);
          }
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