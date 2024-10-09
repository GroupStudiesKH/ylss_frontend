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
    const { locale } = useI18n();
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
              首頁 / 技術設備 / 核心設備
            </div>
            <div class="col-12">
              <div class="row">
                <div class="col-6 col-lg-7">

                    <div class="clickable-image">
                      <img class="w-100" src="/assets/img/zm1.webp" @click="openModal('/assets/img/zm1.webp')">
                    </div>

                </div>
                <div class="col-6 col-lg-5">
                    <h4>▎二十重式冷軋機(ZM1) </h4>
                    <h5 class="sub-heading">20-High Cold Rolling Mill </h5>
                    <p><strong>主要功能:</strong><br/>為將熱軋鋼捲利用冷軋技術軋延至厚度0.25~1.5mm， 並提高平坦度及亮度。</p>
                </div>              
              </div>

              <div class="row mt-3">
                <div class="col-6 col-lg-7">

                  <div class="clickable-image">
                    <img class="w-100 " src="/assets/img/ba2.webp" @click="openModal('/assets/img/ba2.webp')">
                  </div>

                </div>
                <div class="col-6 col-lg-5">
                    <h4>▎光輝退火線-(BA2)</h4>
                    <h5 class="sub-heading">Bright Annealing Line</h5>
                    <p><strong>主要功能:</strong><br/>為將經軋研後之硬質鋼捲退火,使其晶粒成長而軟化而具被加工性。</p>
                </div>              
              </div>

              <div class="row mt-3">
                <div class="col-6 col-lg-7">
                  <div class="clickable-image">
                    <img class="w-100" src="/assets/img/spl.webp" @click="openModal('/assets/img/spl.webp')">
                  </div>
                </div>
                <div class="col-6 col-lg-5">
                    <h4>▎調質精軋機(SPL)</h4>
                    <h5 class="sub-heading">Skin Pass Mill</h5>
                    <p><strong>主要功能:</strong><br/>為進行鋼捲調質作業,提昇產品亮度與加工性。</p>
                </div>              
              </div>

              <div class="row mt-3">
                <div class="col-6 col-lg-7">
                  <div class="clickable-image">
                    <img class="w-100" src="/assets/img/tll.webp" @click="openModal('/assets/img/tll.webp')">
                  </div>
                </div>
                <div class="col-6 col-lg-5">
                    <h4>▎張力整平線(TLL) </h4>
                    <h5 class="sub-heading">Tension Levelling Line</h5>
                    <p><strong>主要功能:</strong><br/>為將鋼板表面整平，獲得更好的表面平坦度及調整機械性質。</p>
                </div>              
              </div>

              <div class="row mt-3">
                <div class="col-6 col-lg-7">

                  <div class="clickable-image">
                    <img class="w-100" src="/assets/img/sl.webp" @click="openModal('/assets/img/sl.webp')">
                  </div>
                </div>
                <div class="col-6 col-lg-5">
                    <h4>▎鋼捲分條線(SL)</h4>
                    <h5 class="sub-heading">Slitting Line</h5>
                    <p><strong>主要功能:</strong><br/>主要功能為依訂單需求將鋼捲分條為各種不同寬度尺寸之窄幅鋼捲</p>
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
