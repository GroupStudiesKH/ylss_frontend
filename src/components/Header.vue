<template>
  <header class="navbar navbar-expand-lg" :class="{ 'home': isHome }">
    <div class="container">
      <a class="navbar-brand" href="/">
        <img src="/assets/img/logo.png" alt="" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'company'}">{{ t("header.companyIntro") }}</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/product">{{ t("header.product") }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/product-spec">{{ t("header.productSpec") }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/tech-equipment">{{ t("header.techEquipment") }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/news">{{ t("header.news") }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/sustainability">{{ t("header.sustainability") }}</a>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'contact'}">{{ t("header.contact") }}</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/recruitment">{{ t("header.recruitment") }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/trade-service">{{ t("header.tradeService") }}</a>
          </li>
          <li class="nav-item ask_price">
            <a class="nav-link" href="/trade-service">
              <span class="material-icons">&#xea20;</span>

              <span>詢價</span>
              <div class="bg-danger header-notify">{{ cartItem.length }}</div>
            </a>
          </li>
          <li class="nav-item language_switch dropdown">
            <div
              class="dropdown-toggle"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span class="material-icons">&#xE894;</span>
              <span class="lang_switch_text">Language</span>

            </div>

            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#">
                  <span class="material-icons">&#xE894;</span>
                  <span>Language</span>
                </a>
              </li>
              <li v-for="(lOption, lOptionIndex) in localeOptions" :key="lOptionIndex">
                <a class="dropdown-item" role="button" @click="setLocale(lOption.lang)">{{ lOption.name }}</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
import { useI18n } from "vue-i18n";
import cartService from "@/service/cart-service.js";
import { ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router";

export default {
  name: "Header",
  setup() {
    const { t, locale } = useI18n();
    const cartItem = ref([]);
    const route = useRoute();
    const localeOptions = ref([
      {
        lang: 'eng',
        name: 'English'
      },
      {
        lang: 'zh_TW',
        name: '繁體中文'
      },
      {
        lang: 'jp',
        name: '日本語'
      }
    ]);

    const isHome = computed(() => {
      return route.name === 'home';
    });

    const setLocale = (lang) => {
      locale.value = lang;
      localStorage.setItem('locale', lang);
    }

    const getCart = () => {
      cartItem.value = cartService.getCart();
    };

    onMounted(() => {
      setInterval(() => {
        getCart()
      }, 500);
    });
    
    return { 
      t, 
      locale,
      setLocale,
      localeOptions,
      cartItem,
      isHome
    };
  },
};
</script>

<style scoped>
/* Add any custom styles here */
</style>
