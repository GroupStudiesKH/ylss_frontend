<script>
import { ref, onMounted, watch } from "vue";
import { useRouter, useRoute } from "vue-router";

import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import ArticleMenu from "@/components/ArticleMenu.vue";
import { useI18n } from "vue-i18n";
import apiService from "@/service/api-service";


export default {
  components: {
    Header,
    Footer,
    ArticleMenu,
  },
  setup() {
    const { t, locale } = useI18n();
    const article = ref({
      id: '',
      get_content_attribute: [],
      get_title_attribute: []
    });
    const route = useRoute();
    const articleId = ref(route.params.id);

    const getArticle = async () => {
        try {
            const params = { type: 'csr' };
            if (articleId.value) {
                params.id = articleId.value;
            }
            article.value = await apiService.getArticleContent(params);
        } catch (error) {
            console.error("Error fetching article content:", error);
        }
    }

    onMounted(() => {
      getArticle();
    });

    return {
      t,
      locale,
      article
    };
  },
};
</script>

<template>
  <Header />
  <main id="article">
    <div class="banner" style="background-image: url('/assets/img/article_banner.webp');">
    </div>

    <div class="container">
      <div class="row">
        <ArticleMenu />

        <div class="col-12 col-lg-10 list" id="article_content">
          <div class="row">
            <div class="col-12 route">
              <span class="material-icons">&#xE88A;</span>
              {{ t('header.index') }} / {{ article.get_title_attribute.find(attr => attr.language === locale)?.meta_value || '' }}
            </div>
            <div class="col-12">
                <h4>▎{{ article.get_title_attribute.find(attr => attr.language === locale)?.meta_value || '' }}</h4>
                <div v-html="article.get_content_attribute.find(attr => attr.language === locale)?.meta_value || ''"></div>
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
