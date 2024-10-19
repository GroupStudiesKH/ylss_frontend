<script>
import { ref, onMounted, watch } from "vue";
import { useRouter, useRoute } from "vue-router";

import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import ProductMenu from "@/components/ProductMenu.vue";
import { useI18n } from "vue-i18n";
import apiService from "@/service/api-service";


export default {
  components: {
    Header,
    Footer,
    ProductMenu,
  },
  setup() {
    const { locale } = useI18n();
    const products = ref({

    });

    const getProducts = async () => {
        try {
            products.value = await apiService.getProducts();
        } catch (error) {
            console.error("Error fetching article content:", error);
        }
    }

    onMounted(() => {
        getProducts();
    });

    return {
      locale,
      products
    };
  },
};
</script>

<template>
  <Header />
  <main id="product">
    <div class="banner" style="background-image: url('/assets/img/product_banner.webp');">
    </div>

    <div class="container" id="product_container">
      <div class="row">
        <ProductMenu />

        <div class="col-12 col-lg-10 list" id="product_content">
          <div class="row">
            <div class="col-12 route">
              <span class="material-icons">&#xE88A;</span>
              首頁 / 產品介紹 
            </div>
            <div class="col-12">
                <p>遠龍以冷軋亮面不銹鋼捲為主要生產產品，並提供各式拋砂的表面加工服務。所提供的主要鋼種為430不銹鋼系列，及各式不銹鋼鋼捲之買賣，滿足客戶更多元、更客製化的選擇，因應不同產業與下游產品之所需。 Development Goals, SDGs），以邁向低碳綠色企業，為地球永續盡一份心力為己任。</p>
                
                <div v-for="category in products" :key="category.id">
                    <div class="product_badge">
                        {{ category.title[locale] || category.title.zh_TW }}
                    </div>
                    <div class="row mt-4">
                        <div v-for="product in category.products" :key="product.id" class="col-6 col-lg-3">
                            <router-link :to="{ path: `/product/${product.id}` }">
                                <img :src="product.feature_image.find(img => img.language === locale)?.meta_value || product.feature_image.find(img => img.language === 'zh_TW')?.meta_value" :alt="product.title[locale] || product.title.zh_TW" class="img-fluid w-100">
                                <p class="mt-2">{{ product.title[locale] || product.title.zh_TW }}</p>
                            </router-link>
                        </div>
                    </div>
                    <hr style="border: none; border-top: 3px dotted #000;">
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="mid_right_shape"></div>
    <div id="bottom_left_shape"></div>


  </main>
  <Footer />
</template>
