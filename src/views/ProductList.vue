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
    const { t, locale } = useI18n();
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
      t,
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
        <ProductMenu :categories="products" />

        <div class="col-12 col-lg-10 list" id="product_content">
          <div class="row">
            <div class="col-12 route">
              <span class="material-icons">&#xE88A;</span>
              {{ t("header.index") }} / {{ t("product.title") }} 
            </div>
            <div class="col-12">                
                <div v-for="category in products" :key="category.id">
                    <p>{{ category.description[locale] || category.description.zh_TW }}</p>

                    <div class="product_badge">
                        {{ category.title[locale] || category.title.zh_TW }}
                    </div>
                    <div class="row mt-4">
                        <div v-for="product in category.products" :key="product.id" class="col-6 col-lg-3">
                            <a :href="`/${locale}/product/${product.id}`">
                                <img :src="product.feature_image.find(img => img.language === locale)?.meta_value || product.feature_image.find(img => img.language === 'zh_TW')?.meta_value" :alt="product.title[locale] || product.title.zh_TW" class="img-fluid product_image w-100">
                                <p class="mt-2">{{ product.title[locale] || product.title.zh_TW }}</p>
                            </a>
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
