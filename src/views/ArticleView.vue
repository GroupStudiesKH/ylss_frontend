<script>
import { ref } from "vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import ArticleMenu from "@/components/ArticleMenu.vue";
import { useI18n } from "vue-i18n";

export default {
  components: {
    Header,
    Footer,
    ArticleMenu,
  },
  setup() {
    const { locale } = useI18n();

    return {
      locale
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
              首頁 / 產品規格
            </div>
            <div class="col-12">
                <h4>▎循環永續</h4>
                <p>遠龍透過各項能源管理措施實踐節能減碳，確保資源有效利用，持續精進生產技術，優化綠色製程及產品，遵循聯合國「2030永續發展目標」（Sustainable Development Goals, SDGs），以邁向低碳綠色企業，為地球永續盡一份心力為己任。</p>
                <a href="/assets/img/article_content.webp" target="_blank"><img class="w-100 mt-3" src="/assets/img/article_content.webp"></a>
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
