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
      locale
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
              {{ t("header.index") }} / {{ t("header.companyIntro") }} / {{ t("company.title") }}
            </div>
            <div class="col-12">
              <div class="row">
                <div class="col-12">
                  <img class="heading_image" src="/assets/img/company_intro_heading.webp">
                </div>
                <div class="col-12 mt-3">
                  <h3>▎{{ t("company.companyIntro.title") }}</h3>
                  <p v-html="t('company.companyIntro.phase1')"></p>
                </div>

                <div class="col-12 mt-3">
                  <h3>▎{{ t("company.coreValue.title") }}</h3>
                  <p v-html="t('company.coreValue.phase1')"></p>
                </div>
                
                <div class="col-12 mt-3">
                  <h3>▎{{ t("company.managePolicy.title") }}</h3>
                  <div class="row">
                    <div class="col-12 col-md-6 mb-3 mb-md-0">
                      <img class="w-100" :src="t('company.managePolicy.phase1')">
                    </div>
                    <div class="col-12 col-md-6">
                      <img class="w-100" :src="t('company.managePolicy.phase2')">
                    </div>
                  </div>
                </div>

                <div class="col-12 mt-3">
                  <h3>▎{{ t("company.view.title") }}</h3>
                  <p v-html="t('company.view.phase1')"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="company_intro_bottom">
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-5 offset-lg-7" id="company_intro_bottom_text">
            <h3>▎{{ t("company.contact.title") }}</h3>
            <p v-html="t('company.contact.phase1')"></p>
            <p v-html="t('company.contact.phase2')"></p>
            <p v-html="t('company.contact.phase3')"></p>
          </div>
        </div>
      </div>
    </div>
  </main>
  <Footer />
</template>
