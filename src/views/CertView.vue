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
              首頁 / 公司介紹 / 標準認證
            </div>
            <div class="col-12">
              <div class="row">
                <div class="col-12 mt-3">
                  <h3>▎國際標準品質認證</h3>
                  <p>遠龍在產品品質上展現堅持，製造符合 ISO、JIS、EN、ASTM 及 CNS 等國際標準製程產品。遠龍更擁有專屬的品檢實驗室，定期接受 TAF 認證合格，透過產品自檢確保一致性的品質水準。</p>
                </div>

                <div class="col-12 mt-3" id="quality-lab">
                  <div class="row">
                    <div class="col-6">
                        <img class="w-100" src="/assets/img/iso9001-2015.webp">
                        <p>ISO 9001  2015版(20240426-20270425)_品質管理系統</p>
                    </div>
                    <div class="col-6">
                        <img class="w-100" src="/assets/img/sgsiso50001.webp">
                        <p>TOSHMS CNS 45001：2018(1110729-1140707)台灣職業衛生管理系統</p>
                    </div>
                    <div class="col-6">
                        <img class="w-100" src="/assets/img/iso45001.webp">
                        <p>ISO 45001  2018版(20220729-20250708)_職業安全衛生管理系統</p>
                    </div>
                    <div class="col-6">
                        <img class="w-100" src="/assets/img/toshms.webp">
                        <p>TOSHMS   CNS 45001：2018(1110729-1140707)台灣職業衛生管理系統</p>
                    </div>
                    <div class="col-6">
                        <img class="w-100" src="/assets/img/toshms45001.webp">
                        <p>TOSHMS   CNS 45001：2018(1110729-1140707)_台灣職業衛生管理系統</p>
                    </div>
                    <div class="col-6">
                        <img class="w-100" src="/assets/img/iso14001.webp">
                        <p>ISO 14001  2015版(20220729-20250721)_環境管理系統</p>
                    </div>
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
