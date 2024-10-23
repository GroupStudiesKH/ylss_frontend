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

    return {
      t,
      locale
    };
  },
};
</script>

<template>
  <Header />
  <main id="recurit">
    <div class="banner" style="background-image: url('/assets/img/recurit_banner.webp');">
    </div>

    <div class="container px-3 px-md-5">
      <div class="row">
        <div class="col-12" id="recurit_content">
          <div class="row">
            <div class="col-12 route my-3 px-lg-5 my-lg-5">
              <span class="material-icons">&#xE88A;</span>
              {{ t("header.index") }} / {{ t("header.recruitment") }}
            </div>
            <div class="col-12 col-lg-6 recurit-col px-lg-5">
                <section class="mt-5">
                    <h4>▎{{ t('recurit.coreValues.title') }}</h4>
                    <p>{{ t('recurit.coreValues.content') }}</p>
                </section>
                <section class="mt-5">
                    <h4>▎{{ t('recurit.teamwork.title') }}</h4>
                    <p>{{ t('recurit.teamwork.content') }}</p>
                </section>
                <section class="mt-5">
                    <h4>▎{{ t('recurit.inclusiveEnvironment.title') }}</h4>
                    <p>{{ t('recurit.inclusiveEnvironment.content') }}</p>
                </section>
            </div>
            <div class="col-12 col-lg-6 recurit-col px-lg-5">
                <section class="mt-5">
                    <h4>▎{{ t('recurit.personalGrowth.title') }}</h4>
                    <p>{{ t('recurit.personalGrowth.content') }}</p>
                </section>

                <section class="mt-5">
                    <h4>▎{{ t('recurit.workLifeBalance.title') }}</h4>
                    <p>{{ t('recurit.workLifeBalance.content') }}</p>
                </section>

                <section class="mt-5">
                    <h4>▎{{ t('recurit.joinUs.title') }}</h4>
                    <p>{{ t('recurit.joinUs.content') }}</p>
                </section>
            </div>

            <div class="col-12 mt-5 px-lg-5">
                <h4>▎{{ t('recurit.benefits.title') }}</h4>
                <p>
                    <h5>1.{{ t('recurit.benefits.salary.title') }}：</h5>
                    <p>(1){{ t('recurit.benefits.salary.content1') }}<br>
                    (2){{ t('recurit.benefits.salary.content2') }}<br>
                    (3){{ t('recurit.benefits.salary.content3') }}</p>
                    <h5 class="mt-3">2.{{ t('recurit.benefits.welfare.title') }}：</h5>
                    <p>(1){{ t('recurit.benefits.welfare.content1') }}<br>
                    (2){{ t('recurit.benefits.welfare.content2') }}</p>
                    <h5 class="mt-3">3.{{ t('recurit.benefits.companyBenefits.title') }}：</h5>
                    <p>{{ t('recurit.benefits.companyBenefits.content') }}</p>
                    <h5 class="mt-3">4.{{ t('recurit.benefits.training.title') }}：</h5>
                    <p>{{ t('recurit.benefits.training.content') }}</p>

                    <p class="text-center my-5">
                        <img class="w-100 d-block d-md-none" src="/assets/img/recurit_content.webp">
                        <img class="d-none d-md-block mx-auto" src="/assets/img/recurit_content.webp">
                        <a href="https://www.104.com.tw/company/cq3ose8?jobsource=google" id="recurit-link-btn" class="btn btn-primary w-100 mt-5" target="_blank">
                            <span class="me-2">&gt;</span>{{ t('recurit.viewJobs') }}
                        </a>
                    </p>
                </p>
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
