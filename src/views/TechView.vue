<script>
import { ref } from "vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import TechMenu from "@/components/TechMenu.vue";
import { useI18n } from "vue-i18n";

export default {
  components: {
    Header,
    Footer,
    TechMenu,
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
  <main id="tech">
    <div class="banner" style="background-image: url('/assets/img/tech_banner.webp');">
    </div>

    <div class="container">
      <div class="row">
        <TechMenu />

        <div class="col-12 col-lg-10 list" id="tech_content">
          <div class="row">
            <div class="col-12 route">
              <span class="material-icons">&#xE88A;</span>
              首頁 / 技術設備 / 核心技術
            </div>
            <div class="col-12">
                <h4>▎專業技術</h4>
                <p>遠龍擁有不銹鋼冷軋製程核心設備，更具備重捲、分切、裁剪、檢驗等專業能力，並設有分條機滿足客戶不同寬度訂單需求。</p>
                <img class="w-100 mt-3" src="/assets/img/tech_content.webp">
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
