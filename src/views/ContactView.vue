<script>
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import cartService from "@/service/cart-service.js";
import apiService from "@/service/api-service.js";
import { useI18n } from "vue-i18n";
import vueRecaptcha from 'vue3-recaptcha2';

export default {
  components: {
    Header,
    Footer,
    vueRecaptcha,
  },
  setup() {
    const router = useRouter();
    const { locale } = useI18n();
    const contact_name = ref("");
    const contact_company = ref("");
    const contact_phone = ref("");
    const contact_email = ref("");
    const contact_content = ref("");
    const cartItem = ref([]);
    const isSending = ref(false);
    const isModalOpen = ref(false);
    const recaptchaToken = ref("");
    const removeCartItem = async (productID) => {
      await cartService.removeCart(productID);
      cartItem.value = cartService.getCart();
    };
    const errorMsg = ref({
      contact_name: false,
      contact_company: false,
      contact_phone: false,
      contact_email: false,
    });

    const getCart = () => {
      cartItem.value = cartService.getCart();
    };

    const onVerify = (token) => {
      recaptchaToken.value = token;
    };

    const submitContact = async () => {
      if (!recaptchaToken.value) {
        // Handle case where reCAPTCHA hasn't been completed
        console.error("Please complete the reCAPTCHA");
        return;
      }

      isSending.value = true;

      let cartProducts = [];
      for (let i in cartItem.value) {
        let title =
          cartItem.value[i].product.product_detail.find((attr) => {
            return attr.language == locale.value && attr.meta_key == "title";
          }).meta_value ?? ``;
        let category =
          cartItem.value[i].category.length > 0
            ? cartItem.value[i].category[0].get_title_attribute.find((attr) => {
                return attr.language == locale.value;
              }).meta_value
            : ``;
        cartProducts.push({
          title: title,
          category: category,
          id: cartItem.value[i].product.id,
        });
      }

      const results = await apiService.sendContact({
        contact_name: contact_name.value,
        contact_company: contact_company.value,
        contact_phone: contact_phone.value,
        contact_email: contact_email.value,
        contact_content: contact_content.value,
        cart: JSON.stringify(cartProducts),
        recaptcha_token: recaptchaToken.value,
      });

      errorMsg.value = {
        contact_name: false,
        contact_company: false,
        contact_phone: false,
        contact_email: false,
      };

      if (results.hasOwnProperty("errors")) {
        for (let i in results.errors) {
          errorMsg.value[i] = true;
        }
      }

      isSending.value = false;

      if (results.hasOwnProperty("success")) {
        isModalOpen.value = true;
      }
    };

    // go to Home page
    const goHome = () => {
      router.push({ name: "home" });
    };

    onMounted(() => {
      getCart();
    });

    return {
      locale,
      contact_name,
      contact_company,
      contact_phone,
      contact_email,
      contact_content,
      removeCartItem,
      cartItem,
      submitContact,
      errorMsg,
      isModalOpen,
      goHome,
      isSending,
      onVerify,
    };
  },
};
</script>

<template>
  <Header />
  <main id="contact">
    <div class="banner" style="background-image: url('/assets/img/contact_banner.webp');">
    </div>

    <div class="container">
      <div class="row">
        <div class="col-12 list" id="contact_content">
          <div class="row">
            <div class="col-12 route">
              <span class="material-icons">&#xE88A;</span>
              <a :href="`/${locale}/`">{{
                $t("header.index")
              }}</a>
              /
              <a :href="`/${locale}/contact`">{{
                $t("header.contact")
              }}</a>
            </div>
            <form>
              <div class="col-12">
                <div class="contact-container">
                  <div class="row">
                    <div
                      class="col-12 heading"
                      v-html="$t('contact.heading')"
                    ></div>
                  </div>

                  <div class="row">
                    <div
                      class="col-sm-6 col-12 required"
                      :class="contact_name.length > 0 ? `hasContent` : ``"
                    >
                      <label for="contact_name">{{
                        contact_name.length == 0 ? $t("contact.name") : ``
                      }}</label>
                      <input
                        type="text"
                        id="contact_name"
                        name="contact_name"
                        v-model="contact_name"
                        class="form-control"
                        :class="errorMsg.contact_name ? `error` : ``"
                      />
                    </div>

                    <div
                      class="col-sm-6 col-12 required"
                      :class="contact_company.length > 0 ? `hasContent` : ``"
                    >
                      <label for="contact_company">{{
                        contact_company.length == 0 ? $t("contact.company") : ``
                      }}</label>
                      <input
                        type="text"
                        class="form-control"
                        id="contact_company"
                        v-model="contact_company"
                        name="contact_company"
                        :class="errorMsg.contact_company ? `error` : ``"
                      />
                    </div>
                  </div>

                  <div class="row">
                    <div
                      class="col-sm-6 col-12 required"
                      :class="contact_phone.length > 0 ? `hasContent` : ``"
                    >
                      <label for="contact_phone">{{
                        contact_phone.length == 0 ? $t("contact.phone") : ``
                      }}</label>
                      <input
                        type="text"
                        class="form-control"
                        id="contact_phone"
                        v-model="contact_phone"
                        name="contact_phone"
                        :class="errorMsg.contact_phone ? `error` : ``"
                      />
                    </div>
                    <div
                      class="col-sm-6 col-12 required"
                      :class="contact_email.length > 0 ? `hasContent` : ``"
                    >
                      <label for="contact_email">{{
                        contact_email.length == 0 ? $t("contact.email") : ``
                      }}</label>
                      <input
                        type="email"
                        class="form-control"
                        id="contact_email"
                        v-model="contact_email"
                        name="contact_email"
                        :class="errorMsg.contact_email ? `error` : ``"
                      />
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-12">
                      <label for="contact_content">{{
                        contact_content.length == 0 ? $t("contact.content") : ``
                      }}</label>
                      <textarea
                        class="form-control"
                        id="contact_content"
                        name="contact_content"
                        rows="15"
                        v-model="contact_content"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12">
                <div class="contact-container">
                  <hr />
                  <div class="row mt-3">
                    <div class="col-12 secondHeading">
                      {{ $t("contact.askingPrice") }}
                    </div>
                  </div>
                  <div class="row mt-3" v-if="cartItem.length">
                    <div
                      class="col-12 askPriceContent"
                      v-for="(cart, cartIndex) in cartItem"
                      :key="cartIndex"
                    >
                      <div class="row">
                        <div class="col-10">
                          ・<a
                            :href="`/${locale}/product/${cart.product.id}`"
                            class="category"
                          >
                            {{
                              cart.category.length > 0
                                ? cart.category[1].get_title_attribute.find(
                                    (attr) => {
                                      return attr.language == locale;
                                    }
                                  ).meta_value
                                : ``
                            }}
                          </a>
                          <a
                            class="product"
                            :href="`/${locale}/product/${cart.product.id}`"
                          >
                            {{
                              cart.product.product_detail.find((attr) => {
                                return (
                                  attr.language == locale &&
                                  attr.meta_key == "title"
                                );
                              }).meta_value ?? ``
                            }}
                          </a>
                        </div>
                        <div
                          class="col-2 remove"
                          @click="removeCartItem(cart.product.id)"
                        >
                          <div>X</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row mt-3" v-else>
                    <div class="col-12 askPriceContent">
                      {{ $t("contact.askingPriceEmpty") }}
                    </div>
                  </div>
                  <hr />
                  <div class="row mt-3">
                    <div class="col-12">
                      <vue-recaptcha
                        sitekey="6Ldml2YqAAAAAC4kqgtZmD6cJa6tNi_m0fkovXdw"
                        size="normal"
                        theme="light"
                        hl="zh-TW"
                        @verify="onVerify"
                        ref="vueRecaptcha">
                      </vue-recaptcha>
                    </div>
                  </div>
                  <div class="row mt-3">
                    <div class="col-12">
                      <div
                        class="btn btn-danger"
                        @click="submitContact()"
                        v-if="!isSending"
                      >
                        {{ $t("contact.submit") }}
                      </div>
                      <div class="btn btn-secondary" v-else>
                        {{ $t("contact.isSending") }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <img id="contact_info_pc" src="/assets/img/contact_info.webp">
    </div>

    <div class="contact_bottom">
    </div>

    <div id="mid_right_shape"></div>
    <div id="bottom_left_shape"></div>
  </main>
  <div v-if="isModalOpen" class="modal" style="display: block">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{ $t("contact.successTitle") }}</h5>
          <button type="button" class="btn-close" @click="goHome()"></button>
        </div>
        <div class="modal-body">
          <p>{{ $t("contact.success") }}</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="goHome()">
            {{ $t("contact.close") }}
          </button>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>
