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
    ProductMenu,
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const products = ref([]);
    const catID = useRoute().params.categoryID;
    const categoryPath = ref([]);
    const totalPage = ref(0);
    const { locale } = useI18n();
    const params = ref({
      page: 1,
      per_page: 10,
      category: "",
    });

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

    const getCategoryPath = async (categoryID) => {
      try {
        const results = await apiService.getCategoryPath(categoryID);
        categoryPath.value = results;
      } catch (error) {
        console.log(error);
      }
    };

    const getTitle = (product) => {
      return product.get_title_attribute.find(
        (attr) => attr.language == locale.value
      ).meta_value != null &&
        product.get_title_attribute.find(
          (attr) => attr.language == locale.value
        ).meta_value != ""
        ? product.get_title_attribute.find(
            (attr) => attr.language == locale.value
          ).meta_value
        : "No Title";
    };

    const getFeatureImage = (product) => {
      return product.get_feature_image.find(
        (attr) => attr.language == locale.value
      ).meta_value != null &&
        product.get_feature_image.find((attr) => attr.language == locale.value)
          .meta_value != ""
        ? product.get_feature_image.find(
            (attr) => attr.language == locale.value
          ).meta_value
        : "/assets/img/product_image.png?t=202403031739";
    };

    const changePage = async (newPage) => {
      params.value.page = newPage;
      await fetchProducts();
    };

    onMounted(async () => {
      if (catID) {
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
      categoryPath,
    };
  },
};
</script>

<template>
  <Header />
  <main id="company">
    <div class="banner">
      <img src="/assets/img/about_banner.png" alt="" />
    </div>

    <div class="gray-background">
      <div class="white-rounded-background">
        <div class="container">
          <div class="row">
            <div class="col-12 list">
              <div class="row">
                <div class="col-12 route">
                  <span class="material-icons">&#xE88A;</span>
                  <router-link :to="{name: 'home'}">{{ $t('header.index') }}</router-link> / <router-link :to="{name: 'company'}">{{ $t('header.companyIntro') }}</router-link>
                </div>
              </div>
              <div class="row">
                <div class="col-md-4 col-12 company_logo">
                  <p>
                    <img src="/assets/img/company_logo.png" alt="公司圖片" id="logo_img" />
                  </p>
                  <p><img src="/assets/img/iso_logo.png" alt="公司圖片" /></p>
                </div>
                <div class="col-md-8 col-12 company_intro">
                  <h3 class="company_heading">{{ $t('company.companyIntro.title') }}</h3>
                  <p v-html="$t('company.companyIntro.phase1')">
                  </p>
                  <p v-html="$t('company.companyIntro.phase2')">
                  </p>

                  <h3 class="company_heading">{{ $t('company.companyPhliosophy.title') }}</h3>
                  <p>
                    {{ $t('company.companyPhliosophy.phase1') }}                  
                  </p>

                  <h3 class="company_heading">{{ $t('company.companyValue.title') }}</h3>
                  <p>
                    {{ $t('company.companyValue.phase1') }}
                  </p>
                </div>

                <div class="col-12 company_intro text-center mt-5">
                  <p>
                    {{ $t('company.companyProduct.phase1') }}
                  </p>
                  <img src="/assets/img/about_image1.png" alt="公司圖片" />
                </div>
              </div>

              <div class="row mt-5">
                <div class="col-12 col-md-6 company_intro small_padding">
                  <h3 class="company_heading mt-3">
                    <span class="material-icons"> &#xE038; </span>
                    {{ $t('company.companyProduct.phase2.title') }}
                  </h3>
                  <p>
                    {{ $t('company.companyProduct.phase2.content') }}
                  </p>

                  <h3 class="company_heading">
                    <span class="material-icons"> &#xE038; </span>
                    {{ $t('company.companyProduct.phase3.title') }}                  
                  </h3>
                  <p>
                    {{ $t('company.companyProduct.phase3.content') }}
                  </p>

                  <h3 class="company_heading">
                    <span class="material-icons"> &#xE038; </span
                    >{{ $t('company.companyProduct.phase4.title') }} 
                  </h3>
                  <p>
                    {{ $t('company.companyProduct.phase4.content') }} 
                  </p>
                </div>

                <div
                  class="col-12 col-md-6 company_intro small_padding company_intro_left_border"
                >
                  <h3 class="company_heading mt-3">
                    <span class="material-icons"> &#xE038; </span
                    >{{ $t('company.companyProduct.phase5.title') }} 
                  </h3>
                  <h3 class="company_heading">
                    <span class="material-icons"> &#xE038; </span
                    >{{ $t('company.companyProduct.phase6.title') }} 
                  </h3>
                  <p>{{ $t('company.companyProduct.phase6.content') }} </p>

                  <h3 class="company_heading">
                    <span class="material-icons"> &#xE038; </span>
                    {{ $t('company.companyProduct.phase7.title') }} 
                  </h3>
                  <p>{{ $t('company.companyProduct.phase7.content') }} </p>

                  <h3 class="company_heading">
                    <span class="material-icons"> &#xE038; </span>
                    {{ $t('company.companyProduct.phase8.title') }} 
                  </h3>
                  <p>{{ $t('company.companyProduct.phase8.content') }} </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="gray-background company-deep-gray">
      <div class="company-deep-gray-color-area"></div>
      <div class="company-deep-gray-info-area">
        <div class="container">
          <div class="row">
            <div class="col-12 company_intro small_padding">
              <h3 class="company_heading">{{ $t('company.rba.title') }}</h3>
              <div class="row">
                <div class="col-12">
                  <p v-html="$t('company.rba.content')">
                  </p>
                </div>
                <div class="col-12 text-center">
                  <img
                    class="rba_img"
                    src="/assets/img/about_rba.png"
                    alt="RBA_tw"
                    v-if="locale === 'zh_TW'"
                  />
                  <img
                    class="rba_img"
                    src="/assets/img/about_rba_eng.png"
                    alt="RBA_en"
                    v-if="locale === 'eng'"
                  />
                  <img
                    class="rba_img"
                    src="/assets/img/about_rba_jpn.png"
                    alt="RBA_jp"
                    v-if="locale === 'jp'"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>

    <div class="gray-background">
        <div class="container">
          <div class="row">
            <div class="col-12 company_intro small_padding">
              <h3 class="company_heading">{{ $t('company.workerPolicy.title') }}</h3>
              <p class="px-3" v-html="$t('company.workerPolicy.content')">
              </p>

              <h3 class="company_heading">{{ $t('company.moralPolicy.title') }}</h3>
              <p class="px-3" v-html="$t('company.moralPolicy.content')">
              </p>

              <h3 class="company_heading">{{ $t('company.enviromentPolicy.title') }}</h3>
              <p class="px-3" v-if="locale != 'eng'">
                {{ $t('company.enviromentPolicy.phase1') }}<br>
                {{ $t('company.enviromentPolicy.phase2') }}<br>
                {{ $t('company.enviromentPolicy.phase3') }}<br>
                {{ $t('company.enviromentPolicy.phase4') }}<br>
                {{ $t('company.enviromentPolicy.phase5') }}<br>
                {{ $t('company.enviromentPolicy.phase6') }}<br>
                {{ $t('company.enviromentPolicy.phase7') }}
              </p>

              <p class="px-3" v-html="$t('company.enviromentPolicy.phase1')" v-else></p>

              <h3 class="company_heading">{{ $t('company.moralMineral.title') }}</h3>
              <p class="px-3">
                {{ $t('company.moralMineral.content') }}
              </p>

              <h3 class="company_heading">{{ $t('company.hsf.title') }}</h3>
              <p class="px-3" v-html="$t('company.hsf.content')">
              </p>
            </div>
          </div>
        </div>
      </div>
  </main>
  <Footer />
</template>
