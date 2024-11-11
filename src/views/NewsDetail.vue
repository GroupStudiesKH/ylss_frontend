<script>
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import { useI18n } from "vue-i18n";
import apiService from "@/service/api-service";

export default {
  components: {
    Header,
    Footer
  },
  setup() {
    const { t, locale } = useI18n();
    const router = useRouter();
    const route = useRoute();
    const newsDetail = ref({
      id: "",
      get_content_attribute: [],
      get_title_attribute: [],
    });

    const getNewsDetail = async () => {
      try {
        const response = await apiService.getArticleContent({
          id: route.params.id,
          type: 'news'
        });
        newsDetail.value = response;
      } catch (error) {
        console.error("Error fetching news detail:", error);
      }
    };

    const goBackToList = () => {
      router.push(`/${locale.value}/news`);
    };

    onMounted(() => {
      getNewsDetail();
    });

    return {
      t,
      locale,
      newsDetail,
      goBackToList
    };
  },
};
</script>

<template>
  <Header />
  <main id="article">
    <div
      class="banner"
      style="background-image: url('/assets/img/news_banner.webp')"
    ></div>

    <div class="container">
      <div class="row">
        <div class="col-12 list" id="article_content">
          <div class="row">
            <div class="col-12 route">
              <span class="material-icons">&#xE88A;</span>
              {{ t("header.index") }} / {{ t("header.news") }}
            </div>

            <div class="col-12" v-if="newsDetail">
              <div class="news-detail">
                <div class="d-flex justify-content-between align-items-center mb-4">
                  <h4 class="mb-0">
                    ▎{{
                      newsDetail.get_title_attribute?.find(
                        (attr) => attr.language === locale
                      )?.meta_value || ""
                    }}
                  </h4>
                  <!-- <div class="news-date">{{ newsDetail.created_ts }}</div> -->
                </div>
                <div class="news-content mb-4" v-html="newsDetail.get_content_attribute?.find(
                  (attr) => attr.language === locale
                )?.meta_value || ''"></div>
                <button class="btn btn-secondary" @click="goBackToList">
                  {{ t("common.back") }}
                </button>
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

<style scoped>
.news-detail {
  padding: 2rem;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.news-date {
  color: #6c757d;
  font-size: 0.9rem;
}

.news-content {
  line-height: 1.8;
}

.btn-dark {
  padding: 0.5rem 2rem;
}
</style>
