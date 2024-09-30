<script>
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import AppliedMenu from "@/components/AppliedMenu.vue";
import apiService from "@/service/api-service.js";
import { useI18n } from "vue-i18n";

export default {
  components: {
    Header,
    Footer,
    AppliedMenu,
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const applicationList = ref([]);
    const catID = useRoute().params.categoryID;
    const categoryPath = ref([]);
    const totalPage = ref(0);
    const { locale } = useI18n();
    const params = ref({
      page: 1,
      per_page: 10,
      category: "",
    });

    const fetchApplicationContent = async () => {
      try {
        const results = await apiService.getApplicationContent(params.value);
        params.value.page = results.current_page;
        params.value.perPage = results.per_page;
        totalPage.value = results.last_page;
        applicationList.value = results.data;
      } catch (error) {
        console.log(error);
      }
    };

    const getCategoryPath = async (categoryID) => {
      try {
        const results = await apiService.getAppliedCategoryPath(categoryID);
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

    const changePage = async (newPage) => {
      params.value.page = newPage;
      await fetchApplicationContent();
    };

    onMounted(async () => {
      if (catID) {
        params.value.category = catID;
        await getCategoryPath(catID);
      }

      await fetchApplicationContent();
    });

    return {
      applicationList,
      locale,
      totalPage,
      params,
      changePage,
      getTitle,
      categoryPath,
    };
  },
};
</script>

<template>
  <Header />
  <main id="applied">
    <div class="banner">
      <img src="/assets/img/applied_banner.png" alt="" />
    </div>

    <div class="gray-background">
      <div class="white-rounded-background">
        <div class="container">
          <div class="row">
            <AppliedMenu />
            <div class="col-12 col-lg-10 list" id="applied_content">
              <div class="row">
                <div class="col-12 route">
                  <span class="material-icons">&#xE88A;</span>
                  <router-link :to="{name: 'home'}">{{ $t('header.index') }}</router-link> / <router-link :to="{name: 'applied'}">{{ $t('header.applied') }}</router-link>
                  <span v-if="params.category.length">
                    <span v-for="(path, pathIndex) in categoryPath" :key="pathIndex">
                      / <router-link :to="`/product/category/${path.id}`">{{ path.get_title_attribute.find((attr) => {
                                            return attr.language == locale;
                                        }).meta_value }}</router-link> 
                    </span>
                  </span>
                </div>
                <div class="col-12">
                  <div class="row">
                    <div class="col-12 col" :class="appliedIndex > 0 ? `mt-5` : ``" v-for="(applied, appliedIndex) in applicationList.filter(a => {
                      return getTitle(a) != 'No Title'
                    })" :key="appliedIndex">
                      <h3 class="heading">
                        <span class="material-icons"> &#xE038; </span>
                        {{ getTitle(applied) }}
                      </h3>
                      <p v-html="applied.get_content_attribute.find((attr) => {
                            return attr.language == locale;
                        }).meta_value">
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <Footer />
</template>
