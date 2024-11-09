<script>
import { ref, onMounted, watch, onUpdated } from "vue";
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
    const articles = ref([]);

    const getArticles = async () => {
      try {
        articles.value = await apiService.getArticle('news');
        console.log(articles.value)
      } catch (error) {
        console.error("Error fetching news articles:", error);
      }
    };

    onMounted(() => {
      getArticles();
    });

    onUpdated(() => {
      const editors = document.querySelectorAll("#article_content");

      editors.forEach((editor) => {
        const links = editor.getElementsByTagName("a");
        for (let link of links) {
          link.setAttribute("target", "_blank");
        }
      });
    });

    return {
      t,
      locale,
      articles
    };
  },
};
</script>

<template>
  <Header />
  <main id="article">
    <div
      class="banner"
      style="background-image: url('/assets/img/article_banner.webp')"
    ></div>

    <div class="container">
      <div class="row">
        <div class="col-12 list" id="article_content">
          <div class="row">
            <div class="col-12 route">
              <span class="material-icons">&#xE88A;</span>
              {{ t("header.index") }} / {{ t("header.news") }}
            </div>
            <div class="col-12" >
              <div v-for="(article, index) in articles" :key="index" class="news-item">
                <div class="d-flex justify-content-between align-items-center mb-2">
                  <h4 class="mb-0">
                    ▎{{
                      article.get_title_attribute.find(
                        (attr) => attr.language === locale
                      )?.meta_value || ""
                    }}
                  </h4>
                  <div class="news-date">{{ article.created_ts }}</div>
                </div>
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
.news-item {
  padding-bottom: 2rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid #dee2e6;
}

.news-item:last-child {
  border-bottom: none;
}

.news-date {
  color: #6c757d;
  font-size: 0.9rem;
}
</style>
