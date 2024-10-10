<script>
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import ProductMenu from "@/components/ProductMenu.vue";
import apiService from "@/service/api-service.js";
import { useI18n } from "vue-i18n";

export default {
  components: {
    Header,
    Footer,
    ProductMenu
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const products = ref([]);
    const catID = useRoute().params.categoryID;
    const categoryPath = ref([])
    const totalPage = ref(0);
    const { locale } = useI18n();
    const params = ref({
      page: 1,
      itemsPerPage: 36,
      category: '',
    })

    const fetchProducts = async () => {
      try {
        const results = await apiService.getProducts(params.value);
        params.value.page = results.current_page;
        params.value.perPage = results.per_page;
        totalPage.value = results.last_page;
        products.value = results.data;
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

    const getTitle = (product) => {
      return product.get_title_attribute.find((attr) => attr.language == locale.value).meta_value != null &&
      product.get_title_attribute.find((attr) => attr.language == locale.value).meta_value != ''
      ?
        product.get_title_attribute.find((attr) => attr.language == locale.value).meta_value :
        'No Title';
    };

    const getFeatureImage = (product) => {
      return product.get_feature_image.find((attr) => attr.language == locale.value).meta_value != null &&
      product.get_feature_image.find((attr) => attr.language == locale.value).meta_value != ''
      ?
        product.get_feature_image.find((attr) => attr.language == locale.value).meta_value :
        '/assets/img/product_image.png?t=202403031739';
    };

    const changePage = async (newPage) => {
      params.value.page = newPage;
      await fetchProducts();
    };

    onMounted(async () => {
      if(catID){
        params.value.category = catID;
        await getCategoryPath(catID);
      }

      await fetchProducts();
    });

    return {
      products,
      locale,
      totalPage,
      params,
      changePage,
      getTitle,
      getFeatureImage,
      categoryPath
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

    <div class="gray-background">
      <div class="white-rounded-background">
        <div class="container">
          <div class="row">
            <ProductMenu />
            <div class="col-12 col-lg-10 list">
              <div class="row">
                <div class="col-12 route">
                  <span class="material-icons">&#xE88A;</span>
                  <router-link :to="{name: 'home'}">{{ $t('header.index') }}</router-link> / <a href="/product">{{ $t('header.product') }}</a> 
                  <span v-if="params.category.length">
                    <span v-for="(path, pathIndex) in categoryPath" :key="pathIndex">
                      / <router-link :to="`/product/category/${path.id}`">{{ path.get_title_attribute.find((attr) => {
                                            return attr.language == locale;
                                        }).meta_value }}</router-link> 
                    </span>
                  </span>
                </div>
              </div>
              <div class="row">
                <div class="col-6 col-lg-3" v-for="(product, productIndex) in products.filter(p => {
                  return getTitle(p) != 'No Title'
                })" :key="productIndex">
                  <router-link :to="`/product/${product.id}`">
                    <div class="feature_image">
                      <div class="img" :style="`background-image: url('${getFeatureImage(product)}')`">
                      </div>
                    </div>
                    <p>{{ getTitle(product) }}</p>
                  </router-link>
                </div>

              </div>
              <nav aria-label="Page navigation" v-if="totalPage > 1" class="mt-5">
                <ul class="pagination justify-content-center">
                  <li class="page-item"><a role="button" class="page-link" @click="changePage(params.page - 1)">⟨</a></li>
                  <li class="page-item" :class="i == params.page ? `active` : ``" v-for="i in totalPage" @click="changePage(i)"><a role="button" class="page-link" >{{ i }}</a></li>
                  <li class="page-item"><a role="button" class="page-link" @click="changePage(params.page + 1)">⟩</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <Footer />
</template>
