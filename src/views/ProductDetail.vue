<script>
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import ProductMenu from "@/components/ProductMenu.vue";
import apiService from "@/service/api-service.js";
import cartService from "@/service/cart-service.js";
import { useI18n } from "vue-i18n";

export default {
  components: {
    Header,
    Footer,
    ProductMenu
  },
  setup() {
    const router = useRouter();
    const product = ref([]);
    const productID = useRoute().params.id;
    const checkCart = ref(false);
    const categoryPath = ref([])
    const { locale } = useI18n();

    const fetchProduct = async () => {
      try {
        const results = await apiService.getProduct(productID);
        product.value = results;

        if(product.value.category_id) getCategoryPath(product.value.category_id);
      } catch (error) {
        console.log(error);
      }
    };

    const getCategoryPath = async(categoryID) => {
      try {
        const results = await apiService.getCategoryPath(categoryID);
        categoryPath.value = results;
      } catch (error) {
        console.log(error);
      }
    };

    const getInfo = (data, dataKey) => {
      let defaultVal = (dataKey == 'feature_image') ? '/assets/img/product_image.png?t=202403031739' : '';
      return data.product_detail.find((attr) => attr.language == locale.value && attr.meta_key == dataKey).meta_value != null &&
      data.product_detail.find((attr) => attr.language == locale.value && attr.meta_key == dataKey).meta_value != ''
      ?
      data.product_detail.find((attr) => attr.language == locale.value && attr.meta_key == dataKey).meta_value :
      defaultVal;
    };

    const addCartItem = () => {
      cartService.addCart({product: product.value, category: categoryPath.value});
      checkCart.value = true;
    }

    const removeCartItem = () => {
      cartService.removeCart(productID);
      checkCart.value = false;
    }

    onMounted(async () => {
      await fetchProduct();
      checkCart.value = cartService.checkItemExist(productID);
    });

    return {
      product,
      getInfo,
      categoryPath,
      locale,
      addCartItem,
      removeCartItem,
      checkCart
    };
  },
};
</script>

<template>
    <Header />
    <main id="product">
        <div class="banner">
            <img src="/assets/img/product_banner.png" alt="" />
        </div>

        <div class="container mb-5">
            <div class="row">
                <ProductMenu />
                <div class="col-12 col-lg-10 list">
                    <div class="row">
                        <div class="col-12 route">
                          <span class="material-icons">&#xE88A;</span>
                          <router-link :to="{name: 'home'}">{{ $t('header.index') }}</router-link> / <router-link :to="{name: 'product'}">{{ $t('header.product') }}</router-link>
                            <span v-if="product.category_id">
                              <span v-for="(path, pathIndex) in categoryPath" :key="pathIndex">
                                / <router-link :to="`/product/category/${path.id}`">{{ path.get_title_attribute.find((attr) => {
                                                      return attr.language == locale;
                                                  }).meta_value }}</router-link> 
                              </span>
                          </span>
                      </div>
                    </div>
                    <div class="row" v-if="Object.keys(product).length > 0">
                        <div class="col-12 col-sm-4">
                            <img :src="getInfo(product, 'feature_image')" class="border" />
                        </div>
                        <div class="col-12 col-sm-8">
                            <h3 class="title">{{ getInfo(product, 'title') }}</h3>
                            <p class="subtitle">
                                {{ getInfo(product, 'subtitle') }}
                            </p>
                        </div>
                        <div class="col-12 col-sm-8">
                            <div class="askPrice" role="button" @click="addCartItem()" v-if="!checkCart">
                                {{ $t("product.addAskPrice") }}
                                <span class="material-icons">&#xEA20;</span>
                            </div>

                            <div class="askPrice remove" role="button" @click="removeCartItem()" v-else>
                                {{ $t("product.removeAskPrice") }}
                                <span class="material-icons">&#xEA20;</span>
                            </div>
                        </div>

                        <div class="col-12 content" v-html="getInfo(product, 'content')">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <Footer />
</template>
