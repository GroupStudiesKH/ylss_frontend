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
      locale
    };
  },
};
</script>

<template>
  <Header />
  <main id="product">
    <div class="banner" style="background-image: url('/assets/img/product_banner.webp');">
    </div>

    <div class="container">
      <div class="row">
        <ProductMenu />

        <div class="col-12 col-lg-10 list" id="product_content">
          <div class="row">
            <div class="col-12 route">
              <span class="material-icons">&#xE88A;</span>
              首頁 / 產品介紹 
            </div>
            <div class="col-12">
                <p>遠龍以冷軋亮面不銹鋼捲為主要生產產品，並提供各式拋砂的表面加工服務。所提供的主要鋼種為430不銹鋼系列，及各式不銹鋼鋼捲之買賣，滿足客戶更多元、更客製化的選擇，
                    因應不同產業與下游產品之所需。 Development Goals, SDGs），以邁向低碳綠色企業，為地球永續盡一份心力為己任。</p>
                
                <div class="product_badge">
                    430不銹鋼系列
                </div>
                <div class="row mt-4">
                    <div class="col-6 col-lg">
                        <router-link :to="{ path: `/product/1` }">
                            <img src="/assets/img/ba_a.webp" alt="BA/A表面" class="img-fluid w-100">
                            <p class="mt-2">BA/A表面</p>
                        </router-link>
                    </div>
                    <div class="col-6 col-lg">
                        <router-link :to="{ path: `/product/1` }">
                            <img src="/assets/img/ba_a.webp" alt="BA/A表面" class="img-fluid w-100">
                            <p class="mt-2">BA/A表面</p>
                        </router-link>
                    </div>
                    <div class="col-6 col-lg">
                        <router-link :to="{ path: `/product/1` }">
                            <img src="/assets/img/ba_a.webp" alt="BA/A表面" class="img-fluid w-100">
                            <p class="mt-2">BA/A表面</p>
                        </router-link>
                    </div>
                    <div class="col-6 col-lg">
                        <router-link :to="{ path: `/product/1` }">
                            <img src="/assets/img/ba_a.webp" alt="BA/A表面" class="img-fluid w-100">
                            <p class="mt-2">BA/A表面</p>
                        </router-link>
                    </div>
                    <div class="col-6 col-lg">
                        <router-link :to="{ path: `/product/1` }">
                            <img src="/assets/img/ba_a.webp" alt="BA/A表面" class="img-fluid w-100">
                            <p class="mt-2">BA/A表面</p>
                        </router-link>
                    </div>
                </div>

                <hr/>

                <p>304不銹鋼是一種品質含量至少10.5%鉻的鋼。這種合金具有耐腐蝕和耐用性而聞名，並被廣泛評估廚房用具、醫療設備和建築材料等領域。</p>
                
                <div class="product_badge">
                    304不銹鋼系列
                </div>
                <div class="row mt-4">
                    <div class="col-6 col-lg">
                        <router-link :to="{ path: `/product/1` }">
                            <img src="/assets/img/ba_a.webp" alt="BA/A表面" class="img-fluid w-100">
                            <p class="mt-2">BA/A表面</p>
                        </router-link>
                    </div>
                    <div class="col-6 col-lg">
                        <router-link :to="{ path: `/product/1` }">
                            <img src="/assets/img/ba_a.webp" alt="BA/A表面" class="img-fluid w-100">
                            <p class="mt-2">BA/A表面</p>
                        </router-link>
                    </div>
                    <div class="col-6 col-lg">
                        <router-link :to="{ path: `/product/1` }">
                            <img src="/assets/img/ba_a.webp" alt="BA/A表面" class="img-fluid w-100">
                            <p class="mt-2">BA/A表面</p>
                        </router-link>
                    </div>
                    <div class="col-6 col-lg">
                        <router-link :to="{ path: `/product/1` }">
                            <img src="/assets/img/ba_a.webp" alt="BA/A表面" class="img-fluid w-100">
                            <p class="mt-2">BA/A表面</p>
                        </router-link>
                    </div>
                    <div class="col-6 col-lg">
                    </div>
                </div>

                <hr style="border: none; border-top: 3px dotted #000;">

                <p>遠龍出廠的成品必備完整包裝，並標貼製程及規格細節身分標籤，以示對產品的用心與負責。</p>

                <div class="product_badge">
                    不銹鋼包捲包裝
                </div>
                <div class="row mt-4">
                    <div class="col-6 col-lg">
                        <router-link :to="{ path: `/product/1` }">
                            <img src="/assets/img/product_package.webp" alt="BA/A表面" class="img-fluid w-100">
                            <p class="mt-2">不銹鋼捲外銷包裝</p>
                        </router-link>
                    </div>
                    <div class="col-6 col-lg">
                        <router-link :to="{ path: `/product/1` }">
                            <img src="/assets/img/product_unpackage.webp" alt="BA/A表面" class="img-fluid w-100">
                            <p class="mt-2">不銹鋼捲內銷包裝</p>
                        </router-link>
                    </div>
                    <div class="col-6 col-lg">
                    </div>
                    <div class="col-6 col-lg">
                    </div>
                    <div class="col-6 col-lg">
                    </div>
                </div>

                <hr style="border: none; border-top: 3px dotted #000;">

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
