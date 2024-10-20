<template>
  <header class="navbar navbar-expand-lg" :class="{ 'home': isHome }">
    <div class="container">
      <a class="navbar-brand" :href="'/' + locale">
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
            <router-link class="nav-link" :to="{name: 'company', params: { locale }}">{{ t("header.companyIntro") }}</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'product', params: { locale }}">{{ t("header.product") }}</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'spec', params: { locale }}">{{ t("header.productSpec") }}</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'equip', params: { locale }}">{{ t("header.techEquipment") }}</router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'article', params: { locale }}">{{ t("header.sustainability") }}</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'contact', params: { locale }}">{{ t("header.contact") }}</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'recurit', params: { locale }}">{{ t("header.recruitment") }}</router-link>
          </li>

          <li class="nav-item ask_price">
            <router-link class="nav-link" :to="{name: 'contact', params: { locale }}">
              <span class="material-icons">&#xea20;</span>

              <span>詢價</span>
              <div class="bg-danger header-notify">{{ cartItem.length }}</div>
            </router-link>
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
        lang: 'zh_CN',
        name: '簡體中文'
      },
    ]);

    const isHome = computed(() => {
      return route.name === 'home';
    });

    const setLocale = (lang) => {
      locale.value = lang;
      localStorage.setItem('locale', lang);
      const currentPath = window.location.pathname;
      const newPath = `/${lang}${currentPath.substring(currentPath.indexOf('/', 1))}`;
      window.location.href = newPath;
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

