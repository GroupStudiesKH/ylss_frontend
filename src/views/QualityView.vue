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
    const { locale } = useI18n();

    return {
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
              首頁 / 公司介紹 / 品質政策
            </div>
            <div class="col-12">
              <div class="row">
                <div class="col-12">
                  <img class="heading_image" src="/assets/img/quality_top_image.webp">
                </div>
                <div class="col-12 mt-3">
                  <h3>▎ISO 9001、JIS mark及IATF 16949 品質政策</h3>
                  <p>在秉持品質政策的意念下，我們全面執行ISO 9001品質管理系統、JIS Q1001符合性評估 - 符合日本產業標準的認證 – 
                    一般認證指引及IATF 16949汽車業品質管理系統等相關作業標準來架構品質管理系統。提升不銹鋼專業能力及服務品質，並秉持持續改善精神提升品質與生產力，
                    達到顧客滿意的水準。我們承諾會依據品質政策建立品質目標，並在符合顧客及法令要求基礎下，進行各項改善措施以持續改善品質管理系統。</p>
                </div>


                <div class="col-12 mt-5">
                  <h3>▎經營方針</h3>
                  <h5 class="my-2">ISO 9001品質管理系統/IATF 16949汽車認證系統品質政策</h5>
                  <div class="row">
                    <div class="col-12 col-md-6 mb-3 mb-md-0">
                      <img class="w-100" src="/assets/img/quality_left.webp">
                    </div>
                    <div class="col-12 col-md-6">
                      <img class="w-100" src="/assets/img/quality_right.webp">
                    </div>
                  </div>
                </div>

                <div class="col-12 mt-5" id="quality-lab">
                  <h3>▎實驗室品質政策</h3>
                  <p>在秉持品質政策的意念下，我們全面執行ISO 9001及ISO/IEC 17025 品質管理系統。提升不銹鋼專業能力及服務品質，
                    並秉持持續改善精神提升品質與生產力，達到顧客滿意的水準。我們承諾會建立品質政策建立品質目標，並在符合顧客及法令要求基礎下，進行各項改善措施以持續改善品質管理系統。</p>
                  <h5 class="my-2">ISO/IEC 17025 遠龍實驗室(編號：3537) 品質政策：以公正、獨立、透明的原則，提供有效率及信賴的測試服務。</h5>
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
