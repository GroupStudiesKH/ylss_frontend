<script>
import { ref, onMounted, watch } from "vue";
import { useRouter, useRoute } from "vue-router";

import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import ProductMenu from "@/components/ProductMenu.vue";
import { useI18n } from "vue-i18n";
import apiService from "@/service/api-service";
import cartService from "@/service/cart-service.js";

export default {
  components: {
    Header,
    Footer,
    ProductMenu,
  },
  setup() {
    const { locale } = useI18n();
    const products = ref({});
    const product = ref({});
    const route = useRoute();
    const productID = ref(route.params.id);
    const checkCart = ref(false);
    const categoryPath = ref([]);

    const getProducts = async () => {
      try {
        products.value = await apiService.getProducts();
      } catch (error) {
        console.error("Error fetching products content:", error);
      }
    };

    const getProduct = async () => {
      try {
        product.value = await apiService.getProduct(productID.value);
        if(product.value.category_id) getCategoryPath(product.value.category_id);
      } catch (error) {
        console.error("Error fetching product content:", error);
      }
    };

    const getCategoryPath = async (categoryID) => {
      try {
        const results = await apiService.getCategoryPath(categoryID);
        categoryPath.value = results;
      } catch (error) {
        console.log(error);
      }
    };

    const getInfo = (data, dataKey) => {
      let defaultVal =
        dataKey == "feature_image"
          ? "/assets/img/product_image.png?t=202403031739"
          : "";
      return data.product_detail.find(
        (attr) => attr.language == locale.value && attr.meta_key == dataKey
      ).meta_value != null &&
        data.product_detail.find(
          (attr) => attr.language == locale.value && attr.meta_key == dataKey
        ).meta_value != ""
        ? data.product_detail.find(
            (attr) => attr.language == locale.value && attr.meta_key == dataKey
          ).meta_value
        : defaultVal;
    };

    const addCartItem = () => {
      cartService.addCart({
        product: product.value,
        category: categoryPath.value,
      });
      checkCart.value = true;
    };

    const removeCartItem = () => {
      cartService.removeCart(productID);
      checkCart.value = false;
    };

    onMounted(async () => {
      getProducts();
      getProduct();
    });

    return {
      locale,
      products,
      product,
      addCartItem,
      removeCartItem,
      checkCart,
      getInfo,
      getCategoryPath,
      categoryPath
    };
  },
};
</script>

<template>
  <Header />
  <main id="product_detail">
    <div
      class="banner"
      style="background-image: url('/assets/img/product_banner.webp')"
    ></div>

    <div class="container">
      <div class="row">
        <ProductMenu :categories="products" />

        <div class="col-12 col-lg-10 list" id="product_detail_content">
          <div class="row mb-5" v-if="Object.keys(product).length > 0">
            <div class="col-12 route">
              <span class="material-icons">&#xE88A;</span>
              <a :href="`/${locale}/`">{{
                $t("header.index")
              }}</a>
              /
              <a :href="`/${locale}/product`">{{
                $t("header.product")
              }}</a>
              <span v-if="product.category_id">
                <span
                  v-for="(path, pathIndex) in categoryPath"
                  :key="pathIndex"
                >
                  /
                  <a :href="`/${locale}/product/category/${path.id}`">{{
                    path.get_title_attribute.find((attr) => {
                      return attr.language == locale;
                    }).meta_value
                  }}</a>
                </span>
              </span>
            </div>
            <div class="col-12 col-md-6">
              <img
                :src="getInfo(product, 'feature_image')"
                class="img-fluid w-100"
              />
            </div>
            <div
              class="col-12 col-md-6 justify-content-between"
              style="display: grid"
            >
              <div>
                <h3 class="title">{{ getInfo(product, "title") }}</h3>
                <hr style="border-top: 5px solid #666" />
                <p class="subtitle" v-html="getInfo(product, 'content')"></p>
              </div>

              <div
                class="askPrice"
                role="button"
                @click="addCartItem()"
                v-if="!checkCart"
              >
                {{ $t("product.addAskPrice") }}
                <span class="material-icons">&#xEA20;</span>
              </div>

              <div
                class="askPrice remove"
                role="button"
                @click="removeCartItem()"
                v-else
              >
                {{ $t("product.removeAskPrice") }}
                <span class="material-icons">&#xEA20;</span>
              </div>
            </div>
          </div>

          <h4>相關規格/</h4>
          <hr />
          <template v-if="product && product.spec_articles">
            <div v-for="(article, index) in product.spec_articles" :key="article.id" :class="index % 2 === 0 ? 'spec_tag_1' : 'spec_tag_2'">
              <a :href="`/${locale}/spec/${article.id}`">
                {{ article.article_detail.find(detail => detail.language === locale)?.meta_value || article.article_detail.find(detail => detail.language === 'zh_TW')?.meta_value }}
              </a>
            </div>
          </template>
        </div>
      </div>
    </div>

    <div id="mid_right_shape"></div>
    <div id="bottom_left_shape"></div>
  </main>
  <Footer />
</template>
