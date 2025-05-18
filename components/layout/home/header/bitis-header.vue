<template>
  <header class="main-header">
    <bitis-header-contract />
    <div class="main-header__container">
      <div class="mobile">
        <button class="main-header__navBtn" @click="isDialogOpen = !isDialogOpen">
          <bitis-icon-menu v-if="!isDialogOpen" />
          <bitis-icon-close v-else />
        </button>
        <bitis-dialog :isOpen="isDialogOpen" @update:isOpen="isDialogOpen = $event">
          <ul class="nav-mobile__list">
            <li v-for="item in menuItems">
              <a href="">
                <span>{{ item.name }}</span>
                <bitis-icon-chevron-left />
              </a>
            </li>
          </ul>
        </bitis-dialog>
      </div>
      <div class="main-header__logo">
        <NuxtImg src="/logos/logo.svg" :height="60" :width="95" alt="bitis" />
      </div>
      <bitis-nav class="desktop" />
      <div class="main-header__action">
        <div class="desktop">
          <bitis-input-search />
        </div>
        <div class="box-icon">
          <bitis-icon-profile />
        </div>
        <div class="box-icon">
          <bitis-icon-whislist />
          <span class="count">0</span>
        </div>
        <div class="box-icon">
          <bitis-icon-cart />
          <span class="count">0</span>
        </div>
      </div>
    </div>
    <div class="search-mobile mobile">
      <bitis-input-search />
    </div>
    <bitis-banner />
  </header>
</template>

<script setup>
import BitisInputSearch from './bitis-input-search.vue';
import BitisHeaderContract from './bitis-header-contract.vue';
import BitisBanner from './bitis-banner.vue';
import BitisNav from './bitis-nav.vue';
import BitisDialog from '~/components/common/bitis-dialog.vue';

// utils import
import { menuItems } from '~/utils/menu';

// icon import
import BitisIconProfile from '~/components/common/icon/bitis-icon-profile.vue';
import BitisIconWhislist from '~/components/common/icon/bitis-icon-whislist.vue';
import BitisIconCart from '~/components/common/icon/bitis-icon-cart.vue';
import BitisIconMenu from '~/components/common/icon/bitis-icon-menu.vue';
import BitisIconChevronLeft from '~/components/common/icon/bitis-icon-chevron-left.vue';
import BitisIconClose from '~/components/common/icon/bitis-icon-close.vue';

const isDialogOpen = ref(false)
</script>

<style lang="scss" scoped>
.main-header {
  &__logo {
    height: 60px;
    width: auto;
    padding: 5px 15px;
  }

  &__container {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    max-width: 1600px;
    margin: auto;
  }

  &__action {
    display: flex;
    align-items: center;
    gap: 17px;
    margin-right: 45px;

    .box-icon {
      position: relative;
      width: 32px;
      height: 40px;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      .count {
        display: inline-block;
        vertical-align: top;
        background: #000;
        color: #fff;
        font-size: 11px;
        text-align: center;
        position: absolute;
        left: 16px;
        top: -1px;
        min-width: 20px;
        height: 20px;
        line-height: 20px;
        border-radius: 50%;
      }
    }

    svg {
      width: 20px;
      height: 20px;
    }
  }

  &__navBtn {
    border: unset;
    background-color: unset;
    margin-left: 10px;
  }
}


.dialog-content {
  .nav-mobile__list {
    list-style: none;
    margin: unset;
    li {
      a {
        display: flex;
        padding: 15px 15px 15px 0;
        margin-left: 15px;
        text-transform: uppercase;
        outline: none;
        border-bottom: 1px solid #eeeeee;
        text-shadow: 0 0 1px rgba(255, 255, 255, 0.1);
        font-size: 14px;
        font-weight: 700;
        color: var(--shop-color-text);
        justify-content: space-between;
        svg {
          width: 7px;
        }
      }
    }
  }
}

@media (max-width: 1200px) {
  .desktop {
    display: none !important;
  }
  .mobile {
    display: block;
  }
}

@media (max-width: 768px) {
  .main-header__logo {
    height: fit-content;

    img {
      width: 63px;
      height: 40px;
    }
  }

  .main-header__action {
    gap: 0;
    margin-right: 10px;

    svg {
      width: 18px;
      height: 18px;
    }
  }

  .search-mobile {
    padding: 5px 6px;
  }
}
</style>