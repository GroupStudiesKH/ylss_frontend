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
  <main id="equip">
    <div class="banner" style="background-image: url('/assets/img/tech_banner.webp');">
    </div>

    <div class="container">
      <div class="row">
        <TechMenu />

        <div class="col-12 col-lg-10 list" id="tech_content">
          <div class="row">
            <div class="col-12 route">
              <span class="material-icons">&#xE88A;</span>
              {{ t("header.index") }} / {{ t("header.techEquipment") }} / {{ t("equip.title") }}
            </div>
            <div class="col-12">
              <div class="row">
                <div class="col-6 col-lg-7">
                  <div class="clickable-image">
                    <div class="material-icons" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: white; font-size: 48px; z-index: 2;">&#xe8ff;</div>
                    <img class="w-100" src="/assets/img/zm1.webp" @click="openModal('/assets/img/zm1.webp')">
                  </div>
                </div>
                <div class="col-6 col-lg-5">
                  <h4>▎{{ t('equip.zm1.title') }}</h4>
                  <h5 class="sub-heading">{{ t('equip.zm1.phase1') }}</h5>
                  <p><strong>{{ t('common.mainFunc') }}:</strong><br/>{{ t('equip.zm1.phase2') }}</p>
                </div>              
              </div>

              <div class="row mt-3">
                <div class="col-6 col-lg-7">
                  <div class="clickable-image">
                    <div class="material-icons" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: white; font-size: 48px; z-index: 2;">&#xe8ff;</div>
                    <img class="w-100 " src="/assets/img/ba2.webp" @click="openModal('/assets/img/ba2.webp')">
                  </div>
                </div>
                <div class="col-6 col-lg-5">
                  <h4>▎{{ t('equip.ba.title') }}</h4>
                  <h5 class="sub-heading">{{ t('equip.ba.phase1') }}</h5>
                  <p><strong>{{ t('common.mainFunc') }}:</strong><br/>{{ t('equip.ba.phase2') }}</p>
                </div>              
              </div>

              <div class="row mt-3">
                <div class="col-6 col-lg-7">
                  <div class="clickable-image">
                    <div class="material-icons" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: white; font-size: 48px; z-index: 2;">&#xe8ff;</div>
                    <img class="w-100" src="/assets/img/spl.webp" @click="openModal('/assets/img/spl.webp')">
                  </div>
                </div>
                <div class="col-6 col-lg-5">
                  <h4>▎{{ t('equip.spl.title') }}</h4>
                  <h5 class="sub-heading">{{ t('equip.spl.phase1') }}</h5>
                  <p><strong>{{ t('common.mainFunc') }}:</strong><br/>{{ t('equip.spl.phase2') }}</p>
                </div>              
              </div>

              <div class="row mt-3">
                <div class="col-6 col-lg-7">
                  <div class="clickable-image">
                    <div class="material-icons" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: white; font-size: 48px; z-index: 2;">&#xe8ff;</div>
                    <img class="w-100" src="/assets/img/tll.webp" @click="openModal('/assets/img/tll.webp')">
                  </div>
                </div>
                <div class="col-6 col-lg-5">
                  <h4>▎{{ t('equip.tll.title') }}</h4>
                  <h5 class="sub-heading">{{ t('equip.tll.phase1') }}</h5>
                  <p><strong>{{ t('common.mainFunc') }}:</strong><br/>{{ t('equip.tll.phase2') }}</p>
                </div>              
              </div>

              <div class="row mt-3">
                <div class="col-6 col-lg-7">
                  <div class="clickable-image">
                    <div class="material-icons" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: white; font-size: 48px; z-index: 2;">&#xe8ff;</div>
                    <img class="w-100" src="/assets/img/sl.webp" @click="openModal('/assets/img/sl.webp')">
                  </div>
                </div>
                <div class="col-6 col-lg-5">
                  <h4>▎{{ t('equip.sl.title') }}</h4>
                  <h5 class="sub-heading">{{ t('equip.sl.phase1') }}</h5>
                  <p><strong>{{ t('common.mainFunc') }}:</strong><br/>{{ t('equip.sl.phase2') }}</p>
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
