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
    const currentPage = ref(1);
    const perPage = ref(10);
    const totalPages = ref(0);
    const total = ref(0);

    const getArticles = async () => {
      try {
        const response = await apiService.getNews(currentPage.value, perPage.value);
        articles.value = response.data;
        total.value = response.total;
        totalPages.value = response.last_page;
      } catch (error) {
        console.error("Error fetching news articles:", error);
      }
    };

    const changePage = async (page) => {
      currentPage.value = page;
      await getArticles();
      window.scrollTo(0, 0);
    };

    onMounted(() => {
      getArticles();
    });

    return {
      t,
      locale,
      articles,
      currentPage,
      totalPages,
      total,
      changePage
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
            <div class="col-12">
              <div v-for="(article, index) in articles" :key="index" class="news-item">
                <a :href="`/${locale}/news/${article.id}`" style="text-decoration: none !important;">
                  <div class="d-flex justify-content-between align-items-center mb-2">
                    <h4 class="mb-0">
                      ▎{{
                        article.get_title_attribute.find(
                          (attr) => attr.language === locale
                        )?.meta_value || ""
                      }}
                    </h4>
                    <!-- <div class="news-date">{{ article.created_ts }}</div> -->
                  </div>
                </a>
              </div>

              <!-- Pagination -->
              <nav v-if="totalPages > 1" aria-label="News pagination" class="mt-4">
                <ul class="pagination justify-content-center">
                  <li class="page-item" :class="{ disabled: currentPage === 1 }">
                    <a class="page-link" style="text-decoration: none !important;" href="#" @click.prevent="changePage(currentPage - 1)">◀</a>
                  </li>
                  <li v-for="page in totalPages" :key="page" class="page-item" :class="{ active: page === currentPage }">
                    <a class="page-link" style="text-decoration: none !important;" href="#" @click.prevent="changePage(page)">{{ page }}</a>
                  </li>
                  <li class="page-item" :class="{ disabled: currentPage === totalPages }">
                    <a class="page-link" style="text-decoration: none !important;" href="#" @click.prevent="changePage(currentPage + 1)">▶</a>
                  </li>
                </ul>
              </nav>
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

.pagination {
  margin-bottom: 2rem;
}

.page-link {
  color: #333;
  outline: none;
}

.page-item.active .page-link {
  background-color: #333;
  border-color: #333;
}
</style>
