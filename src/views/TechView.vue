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
    const { t, locale } = useI18n();

    return {
      t,
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
              {{ t("header.index") }} / {{ t("header.techEquipment") }} / {{ t("tech.title") }}
            </div>
            <div class="col-12">
                <h4>▎{{ t('tech.title') }}</h4>
                <p>{{ t('tech.phase1') }}</p>
                <img class="w-100 mt-3" :src="t('tech.phase2')">
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
