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
    const selectedImage = ref(null);
    const showModal = ref(false);

    const openModal = (imageSrc) => {
      selectedImage.value = imageSrc;
      showModal.value = true;
    };

    const closeModal = () => {
      showModal.value = false;
    };

    return {
      t,
      locale,
      selectedImage,
      showModal,
      openModal,
      closeModal,
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
              {{ t("header.index") }} / {{ t("header.companyIntro") }} / {{ t("cert.title") }}
            </div>
            <div class="col-12">
              <div class="row">
                <div class="col-12 mt-3">
                  <h3>{{ t("cert.lists.title") }}</h3>
                  <p v-html="t('cert.lists.phase1')"></p>
                </div>

                <div class="col-12 mt-3" id="quality-lab">
                  <div class="row">
                    <div class="col-6 col-md-4" @click="openModal('/assets/img/cert/iso-9001.webp')">
                        <div class="clickable-image">
                          <div class="class-text">{{ t("cert.heading3") }}</div>
                          <div class="material-icons" >&#xe8ff;</div>
                          <img class="w-100" src="/assets/img/cert/iso-9001.webp">
                        </div>
                        <p>{{ t("cert.lists.iso9001") }}</p>
                    </div>
                    <div class="col-6 col-md-4" @click="openModal('/assets/img/cert/iso-50001.webp')">
                        <div class="clickable-image">
                          <div class="class-text">{{ t("cert.heading5") }}</div>
                          <div class="material-icons" >&#xe8ff;</div>
                          <img class="w-100" src="/assets/img/cert/iso-50001.webp">
                        </div>
                        <p>{{ t("cert.lists.iso5001") }}</p>
                    </div>
                    <div class="col-6 col-md-4" @click="openModal('/assets/img/cert/iso-45001-2018.webp')">
                        <div class="clickable-image">
                          <div class="class-text">{{ t("cert.heading2") }}</div>
                          <div class="material-icons" >&#xe8ff;</div>
                          <img class="w-100" src="/assets/img/cert/iso-45001-2018.webp">
                        </div>
                        <p>{{ t("cert.lists.iso45001") }}</p>
                    </div>
                    <div class="col-6 col-md-4" @click="openModal('/assets/img/cert/cns-45001-en.webp')">
                        <div class="clickable-image">
                          <div class="class-text">{{ t("cert.heading2") }}</div>
                          <div class="material-icons" >&#xe8ff;</div>
                          <img class="w-100" src="/assets/img/cert/cns-45001-en.webp">
                        </div>
                        <p>{{ t("cert.lists.cns45001_1") }}</p>
                    </div>
                    <!-- <div class="col-6 col-md-4" @click="openModal('/assets/img/cert/cns-45001-zhtw.webp')">
                        <div class="clickable-image">
                          <div class="class-text">{{ t("cert.heading2") }}</div>
                          <div class="material-icons" >&#xe8ff;</div>
                          <img class="w-100" src="/assets/img/cert/cns-45001-zhtw.webp">
                        </div>
                        <p>{{ t("cert.lists.cns45001_2") }}</p>
                    </div> -->
                    <div class="col-6 col-md-4" @click="openModal('/assets/img/cert/iso-14001-2015.webp')">
                        <div class="clickable-image">
                          <div class="class-text">{{ t("cert.heading1") }}</div>
                          <div class="material-icons" >&#xe8ff;</div>
                          <img class="w-100" src="/assets/img/cert/iso-14001-2015.webp">
                        </div>
                        <p>{{ t("cert.lists.iso14001") }}</p>
                    </div>
                    <div class="col-6 col-md-4" @click="openModal('/assets/img/cert/iso-14064.webp')">
                        <div class="clickable-image">
                          <div class="class-text">{{ t("cert.heading1") }}</div>
                          <div class="material-icons" >&#xe8ff;</div>
                          <img class="w-100" src="/assets/img/cert/iso-14064.webp">
                        </div>
                        <p>{{ t("cert.lists.iso14064") }}</p>
                    </div>
                    <div class="col-6 col-md-4" @click="openModal('/assets/img/cert/iso-14067-zhtw.webp')">
                        <div class="clickable-image">
                          <div class="class-text">{{ t("cert.heading1") }}</div>
                          <div class="material-icons" >&#xe8ff;</div>
                          <img class="w-100" src="/assets/img/cert/iso-14067-zhtw.webp">
                        </div>
                        <p>{{ t("cert.lists.iso14067") }}</p>
                    </div>
                    <!-- <div class="col-6 col-md-4" @click="openModal('/assets/img/cert/iso-17025-zhtw.webp')">
                        <div class="clickable-image">
                          <div class="class-text">{{ t("cert.heading3") }}</div>
                          <div class="material-icons" >&#xe8ff;</div>
                          <img class="w-100" src="/assets/img/cert/iso-17025-zhtw.webp">
                        </div>
                        <p>{{ t("cert.lists.iso17025") }}</p>
                    </div> -->
                    <div class="col-6 col-md-4" @click="openModal('/assets/img/cert/iatf-16949.webp')">
                        <div class="clickable-image">
                          <div class="class-text">{{ t("cert.heading3") }}</div>
                          <div class="material-icons" >&#xe8ff;</div>
                          <img class="w-100" src="/assets/img/cert/iatf-16949.webp">
                        </div>
                        <p>{{ t("cert.lists.iatf16949") }}</p>
                    </div>
                    <div class="col-6 col-md-4" @click="openModal('/assets/img/cert/bis-6911.webp')">
                        <div class="clickable-image">
                          <div class="class-text">{{ t("cert.heading4") }}</div>
                          <div class="material-icons" >&#xe8ff;</div>
                          <img class="w-100" src="/assets/img/cert/bis-6911.webp">
                        </div>
                        <p>{{ t("cert.lists.bis-is-6911") }}</p>
                    </div>
                    <div class="col-6 col-md-4" @click="openModal('/assets/img/cert/cns-8499.webp')">
                        <div class="clickable-image">
                          <div class="class-text">{{ t("cert.heading4") }}</div>
                          <div class="material-icons" >&#xe8ff;</div>
                          <img class="w-100" src="/assets/img/cert/cns-8499.webp">
                        </div>
                        <p>{{ t("cert.lists.cns8499") }}</p>
                    </div>
                    <div class="col-6 col-md-4" @click="openModal('/assets/img/cert/jis.webp')">
                        <div class="clickable-image">
                          <div class="class-text">{{ t("cert.heading4") }}</div>
                          <div class="material-icons" >&#xe8ff;</div>
                          <img class="w-100" src="/assets/img/cert/jis.webp">
                        </div>
                        <p>{{ t("cert.lists.jis4305") }}</p>
                    </div>
                    <div class="col-6 col-md-4" @click="openModal('/assets/img/cert/iso-17025.webp')">
                        <div class="clickable-image">
                          <div class="class-text">{{ t("cert.heading3") }}</div>
                          <div class="material-icons" >&#xe8ff;</div>
                          <img class="w-100" src="/assets/img/cert/iso-17025.webp">
                        </div>
                        <p>{{ t("cert.lists.cns17025") }}</p>
                    </div>
                    <div class="col-6 col-md-4" @click="openModal('/assets/img/cert/iso-14046-en.webp')">
                        <div class="clickable-image">
                          <div class="class-text">{{ t("cert.heading1") }}</div>
                          <div class="material-icons" >&#xe8ff;</div>
                          <img class="w-100" src="/assets/img/cert/iso-14046-en.webp">
                        </div>
                        <p>{{ t("cert.lists.iso14046_en") }}</p>
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

    <!-- Image Modal -->
    <transition name="fade">
      <div v-if="showModal" class="modal-overlay" @click="closeModal">
        <div class="modal-content" @click.stop>
          <img :src="selectedImage" alt="Enlarged image" class="modal-image">
          <button class="close-button" @click="closeModal">&times;</button>
        </div>
      </div>
    </transition>

  </main>
  <Footer />
</template>
