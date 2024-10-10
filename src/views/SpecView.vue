<script>
import { ref } from "vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import SpecMenu from "@/components/SpecMenu.vue";
import { useI18n } from "vue-i18n";

export default {
  components: {
    Header,
    Footer,
    SpecMenu,
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
    <div class="banner" style="background-image: url('/assets/img/spec_banner.webp');">
    </div>

    <div class="container">
      <div class="row">
        <SpecMenu />

        <div class="col-12 col-lg-10 list" id="tech_content">
          <div class="row">
            <div class="col-12 route">
              <span class="material-icons">&#xE88A;</span>
              首頁 / 產品規格
            </div>
            <div class="col-12">
                <h4>▎主要銷售規格</h4>
                <a href="/assets/img/spec_content.webp" target="_blank"><img class="w-100 mt-3" src="/assets/img/spec_content.webp"></a>
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
