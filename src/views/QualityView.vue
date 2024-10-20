<script>
import { ref } from "vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import CompanyMenu from "@/components/CompanyMenu.vue";
import { useI18n } from "vue-i18n";

export default {
  components: {
    Header,
    Footer,
    CompanyMenu,
  },
  setup() {
    const { t, locale } = useI18n();

    return {
      t,
      locale,
    };
  },
};
</script>

<template>
  <Header />
  <main id="company">
    <div class="banner" style="background-image: url('/assets/img/company_banner.webp');">
    </div>


    <div class="container">
      <div class="row">
        <CompanyMenu />

        <div class="col-12 col-lg-10 list" id="company_content">
          <div class="row">
            <div class="col-12 route">
              <span class="material-icons">&#xE88A;</span>
              {{ t("header.index") }} / {{ t("header.companyIntro") }} / {{ t("quality.title") }}
            </div>
            <div class="col-12">
              <div class="row">
                <div class="col-12">
                  <img class="heading_image" src="/assets/img/quality_top_image.webp">
                </div>
                <div class="col-12 mt-3">
                  <h3>▎{{ t("quality.cert.title") }}</h3>
                  <p v-html="t('quality.cert.phase1')"></p>
                </div>


                <div class="col-12 mt-5">
                  <h5 class="my-2">{{ t("quality.policy.title") }}</h5>
                  <br>
                  <div class="row">
                    <div class="col-12 col-md-6 mb-3 mb-md-0">
                      <img class="w-100" :src="t('quality.policy.phase1')">
                    </div>
                    <div class="col-12 col-md-6">
                      <img class="w-100" :src="t('quality.policy.phase2')">
                    </div>
                  </div>
                </div>

                <div class="col-12 mt-5" id="quality-lab">
                  <h3>▎{{ t('quality.lab.title') }}</h3>
                  <p>{{ t('quality.lab.phase1') }}</p>
                  <h5 class="my-2">{{ t('quality.lab.phase2') }}</h5>
                  <div class="row">
                    <div class="col-12 col-md-4"><img class="w-100" src="/assets/img/quality_lab_1.png"></div>
                    <div class="col-12 col-md-4"><img class="w-100" src="/assets/img/quality_lab_2.png"></div>
                    <div class="col-12 col-md-4"><img class="w-100" src="/assets/img/quality_lab_3.png"></div>
                  </div>
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
