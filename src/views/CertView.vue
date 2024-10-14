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
                        <img class="w-100" src="/assets/img/cert/iso-9001.webp">
                        <p>ISO 9001  2015版(20240426-20270425)_品質管理系統</p>
                    </div>
                    <div class="col-6">
                        <img class="w-100" src="/assets/img/cert/iso-50001-2018.webp">
                        <p>ISO 50001 2018版(20201118-20231118)_能源管理系統</p>
                    </div>
                    <div class="col-6">
                        <img class="w-100" src="/assets/img/cert/iso-45001-2018.webp">
                        <p>ISO 45001  2018版(20220729-20250708)_職業安全衛生管理系統</p>
                    </div>
                    <div class="col-6">
                        <img class="w-100" src="/assets/img/cert/cns-45001-en.webp">
                        <p>TOSHMS   CNS 45001：2018(1110729-1140707)_台灣職業衛生管理系統</p>
                    </div>
                    <div class="col-6">
                        <img class="w-100" src="/assets/img/cert/cns-45001-zhtw.webp">
                        <p>TOSHMS   CNS 45001：2018(1110729-1140707)_台灣職業衛生管理系統</p>
                    </div>
                    <div class="col-6">
                        <img class="w-100" src="/assets/img/cert/iso-14001-2015.webp">
                        <p>ISO 14001  2015版(20220729-20250721)_環境管理系統</p>
                    </div>
                    <div class="col-6">
                        <img class="w-100" src="/assets/img/cert/iso-14064.webp">
                        <p>ISO 14064-1 2018版(20220810)溫室氣體查驗聲明書</p>
                    </div>
                    <div class="col-6">
                        <img class="w-100" src="/assets/img/cert/iso-14067-zhtw.webp">
                        <p>ISO 14067 2018版(20230306-20250305)碳足跡查證聲明書</p>
                    </div>
                    <div class="col-6">
                        <img class="w-100" src="/assets/img/cert/iso-17025-zhtw.webp">
                        <p>ISO/IEC 17025：2017；CNS17025：2018 實驗室認證證書</p>
                    </div>
                    <div class="col-6">
                        <img class="w-100" src="/assets/img/cert/iatf-16949.webp">
                        <p>IATF 16949 2016版(20240426-20270425)_汽車品質管理系統驗證</p>
                    </div>
                    <div class="col-6">
                        <img class="w-100" src="/assets/img/cert/bis-6911.webp">
                        <p>BIS IS 6911</p>
                    </div>
                    <div class="col-6">
                        <img class="w-100" src="/assets/img/cert/cns-8499.webp">
                        <p>CNS 8499</p>
                    </div>
                    <div class="col-6">
                        <img class="w-100" src="/assets/img/cert/jis.webp">
                        <p>JQA JIS G 4305</p>
                    </div>
                    <div class="col-6">
                        <img class="w-100" src="/assets/img/cert/iso-17025_en.webp">
                        <p>ISO/IEC 17025：2017；CNS17025：2018 實驗室認證證書</p>
                    </div>
                    <div class="col-6">
                        <img class="w-100" src="/assets/img/cert/iso-14046-zhtw.webp">
                        <p>ISO 14046(2014版)-中文</p>
                    </div>
                    <div class="col-6">
                        <img class="w-100" src="/assets/img/cert/iso-14046-en.webp">
                        <p>ISO 14046(2014版)-英文</p>
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
