<script>
import { useRouter, useRoute } from "vue-router";
// mounted
import { onMounted, ref } from "vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import { useI18n } from "vue-i18n";
import apiService from "@/service/api-service.js";

export default {
  components: {
    Header,
    Footer,
  },
  setup() {
    const router = useRouter();
    const isIntroScolled = ref(false);
    const { t, locale } = useI18n();
    const bannerLists = ref([]);

    const fetchBanner = async () => {
      try {
        const results = await apiService.getBanner();
        bannerLists.value = results;
      } catch (error) {
        console.log(error);
      }
    };

    const handleScroll = () => {
      // 獲取目標div的相對位置

      const targetDiv = document.getElementById("intro");
      const rect = targetDiv.getBoundingClientRect();

      // 判斷是否在可視範圍內
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        isIntroScolled.value = true;
      }
    };

    // const toLastPage = () => {
    //   router.push({ name: "final" });
    //   playBackgroundMusic()
    // };

    // const toNextPage = () => {
    //   router.push({ name: "intro_2" });
    //   playBackgroundMusic()
    // };

    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
      fetchBanner();
    });

    return {
      isIntroScolled,
      t,
      locale,
      bannerLists,
    };
  },
};
</script>

<template>
  <Header />
  <main id="index">
    <div class="banner"></div>
    <div id="bannerCarousel" class="carousel slide">
      <div class="carousel-inner banner">
        <div
          class="carousel-item"
          :class="bannerIndex == 0 ? `active` : ``"
          v-for="(banner, bannerIndex) in bannerLists"
          :key="bannerIndex"
        >
          <a :href="banner.link">
            <div :style="{ backgroundImage: `url(${banner.img_url})` }" class="banner-content">
              <div class="container">
                <h1>We embrace the world and engage into life.</h1>
                <p>To Value Relationship and Sustainability</p>
              </div>
            </div>
          </a>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#bannerCarousel"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#bannerCarousel"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

    <div id="company_info">
      <div class="row">
        <div class="col-md-6 col-lg-6 col-12" id="company_pic">
          <img src="/assets/img/company_pic.png" alt="" />
        </div>
        <div class="col-md-6 col-lg-6 col-12" id="company_intro">
          <p v-html="$t('index.intro')"></p>
          <a :href="`/${locale}/company`" class="pill_button">
            Learn More
          </a><br /><br />
        </div>
      </div>

      <div id="company_info_right_shape"></div>
    </div>

    <div class="container" :class="isIntroScolled ? `scrolled` : ``" id="intro">
      <div class="row">
        <div class="col-6 col-md-3 badge">
          <img src="/assets/img/home_section1.webp" alt="" />
          <h3 v-html="t('index.feature1')" v-if="locale != 'eng'"></h3>
          <p class="h5" v-html="t('index.feature1_subtitle')"></p>
        </div>
        <div class="col-6 col-md-3 badge">
          <img src="/assets/img/home_section2.webp" alt="" />
          <h3 v-html="t('index.feature2')" v-if="locale != 'eng'"></h3>
          <p class="h5" v-html="t('index.feature2_subtitle')"></p>
        </div>
        <div class="col-6 col-md-3 badge">
          <img src="/assets/img/home_section3.webp" alt="" />
          <h3 v-html="t('index.feature3')" v-if="locale != 'eng'"></h3>
          <p class="h5" v-html="t('index.feature3_subtitle')"></p>
        </div>
        <div class="col-6 col-md-3 badge">
          <img src="/assets/img/home_section4.webp" alt="" />
          <h3 v-html="t('index.feature4')" v-if="locale != 'eng'"></h3>
          <p class="h5" v-html="t('index.feature4_subtitle')"></p>
        </div>
      </div>
    </div>

    <div id="csr_green">
      <div class="container">
        <div class="row">
          <div class="col-12 col-xl-6 pt-lg-5">
            <img src="/assets/img/euro_logo.webp">
            <h3>{{ t('index.feature5.title') }}</h3>
            <ul class="mt-lg-4">
              <li>
                <img src="/assets/img/check.webp">
                {{ t('index.feature5.content_1') }}
              </li>
              <li>
                <img src="/assets/img/check.webp">
                {{ t('index.feature5.content_2') }}
              </li>
              <li>
                <img src="/assets/img/check.webp">
                {{ t('index.feature5.content_3') }}
              </li>
              <li>
                <img src="/assets/img/check.webp">
                {{ t('index.feature5.content_4') }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div id="iso_quality">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h3>{{ t('index.feature6.title') }}</h3>
            <p>{{ t('index.feature6.content_1') }}</p>
            <a :href="`/${locale}/quality`" class="pill_button mt-5">
              {{ t('index.feature6.btn') }}
            </a>
          </div>
        </div>
      </div>
      <div id="index_left_shape"></div>
    </div>
  </main>
  <Footer />
</template>
