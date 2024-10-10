<script>
import { ref } from "vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import ProductMenu from "@/components/ProductMenu.vue";
import { useI18n } from "vue-i18n";

export default {
  components: {
    Header,
    Footer,
    ProductMenu,
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
  <main id="product">
    <div
      class="banner"
      style="background-image: url('/assets/img/product_banner.webp')"
    ></div>

    <div class="container">
      <div class="row">
        <ProductMenu />

        <div class="col-12 col-lg-10 list" id="product_detail_content">
          <div class="row mb-5">
            <div class="col-12 route">
              <span class="material-icons">&#xE88A;</span>
              首頁 / 產品介紹 / 304不銹鋼系列 / BA/B表面
            </div>
            <div class="col-4 col-md-6">
              <img
                src="/assets/img/product_unpackage.webp"
                class="img-fluid w-100"
              />
            </div>
            <div class="col-8 col-md-6 justify-content-between" style="display: grid;">
              <div>
                <h3 class="title">BA/A表面</h3>
                <hr style="border-top: 5px solid #666;">
                <p class="subtitle">304不銹鋼BA/A表面。鉻系不銹鋼經冷軋後施以光輝處理，經特殊製程後具高亮度表面。用於餐廚用具、醫療器材、電子零組件、汽車材料、建築用材料、家用電器、化學器材等。
                </p>
              </div>


              <div
                class="askPrice mt-auto"
                role="button"
              >
                加入詢價表單
                <span class="material-icons">&#xEA20;</span>
              </div>
            </div>
          </div>

          <h4>相關規格/</h4>
          <hr/>
          <div class="spec_tag_1">300系-化學成份及機械性質</div>
          <div class="spec_tag_2">不銹鋼應用</div>
        </div>
      </div>
    </div>

    <div id="mid_right_shape"></div>
    <div id="bottom_left_shape"></div>
  </main>
  <Footer />
</template>
