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
        <ul class="navbar-nav ml-auto" :class="locale">
          <li class="nav-item">
            <a class="nav-link" :href="`/${locale}/company`">{{ t("header.companyIntro") }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" :href="`/${locale}/product`">{{ t("header.product") }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" :href="`/${locale}/spec`">{{ t("header.productSpec") }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" :href="`/${locale}/tech`">{{ t("header.techEquipment") }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" :href="`/${locale}/article`">{{ t("header.sustainability") }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" :href="`/${locale}/contact`">{{ t("header.contact") }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" :href="`/${locale}/recurit`">{{ t("header.recruitment") }}</a>
          </li>

          <li class="nav-item ask_price">
            <a class="nav-link" :href="`/${locale}/contact`">
              <span class="material-icons">&#xea20;</span>

              <span>{{ t("header.askingPrice") }}</span>
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
                <a class="dropdown-item" role="button" @click="urlSetLocale(lOption.lang)">{{ lOption.name }}</a>
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
import { useRouter, useRoute } from "vue-router";


export default {
  name: "Header",
  setup() {
    const { t, locale } = useI18n();
    const cartItem = ref([]);
    const route = useRoute();
    const router = useRouter();
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

    const urlSetLocale = (lang) => {
      const currentPath = route.path;
      const currentName = route.name;
      const currentParams = route.params;

      let newPath = `/${lang}`;
      
      if (currentName) {
        // Use the current route's matched path instead of the route name
        const matchedRoute = route.matched[route.matched.length - 1];
        if (matchedRoute) {
          newPath += matchedRoute.path.replace(/^\/[^\/]+/, '');
        }
        
        // Add dynamic segments from params
        if (Object.keys(currentParams).length > 0) {
          for (const [key, value] of Object.entries(currentParams)) {
            if (key !== 'locale') {
              newPath = newPath.replace(`:${key}`, value);
            }
          }
        }
      } else {
        newPath = currentPath.replace(/^\/[^\/]+/, `/${lang}`);
      }

      window.location.href = newPath;
    }

    const setLocale = (lang) => {
      locale.value = lang;
      localStorage.setItem('locale', lang);

      const currentPath = route.path;
      const currentName = route.name;
      const currentParams = route.params;

      let newPath = `/${lang}`;
      
      if (currentName) {
        // Use the current route's matched path instead of the route name
        const matchedRoute = route.matched[route.matched.length - 1];
        if (matchedRoute) {
          newPath += matchedRoute.path.replace(/^\/[^\/]+/, '');
        }
        
        // Add dynamic segments from params
        if (Object.keys(currentParams).length > 0) {
          for (const [key, value] of Object.entries(currentParams)) {
            if (key !== 'locale') {
              newPath = newPath.replace(`:${key}`, value);
            }
          }
        }
      } else {
        newPath = currentPath.replace(/^\/[^\/]+/, `/${lang}`);
      }

      window.location.href = newPath;
    }

    const getCart = () => {
      cartItem.value = cartService.getCart();
    };

    onMounted(() => {

      const urlLocale = route.params.locale;
      const storedLocale = localStorage.getItem('locale');
      
      if (!urlLocale && !storedLocale) {
        // If both URL and localStorage don't have a locale, set default to 'zh_TW'
        setLocale('zh_TW');
      } else if (urlLocale && urlLocale !== storedLocale) {
        // If URL has a locale different from localStorage, update localStorage and locale
        setLocale(urlLocale);
      } else if (!urlLocale && storedLocale) {
        // If URL doesn't have a locale but localStorage does, use the stored locale
        locale.value = storedLocale;
      }

      setInterval(() => {
        getCart()
      }, 500);
    });
    
    return { 
      t, 
      locale,
      setLocale,
      urlSetLocale,
      localeOptions,
      cartItem,
      isHome
    };
  },
};
</script>

