<template>
    <div class="col-12 col-lg-2 category">

        <a class="btn btn-primary" id="companyMenuBtn" data-bs-toggle="collapse" href="#companyMenu" role="button"
            aria-expanded="false" aria-controls="companyMenu">
            {{ t('common.openMenu') }}
        </a>
        <div class="collapse col-12 category" id="companyMenu">
            <div>
                <div class="title">
                    {{ t('header.companyIntro') }}
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item" :class="{ li_active: $route.name === 'company' }">
                        <a :href="`/${locale}/company`">{{ t('company.title') }}</a>
                    </li>
                    <li class="list-group-item" :class="{ li_active: $route.name === 'quality' }">
                        <a :href="`/${locale}/quality`">{{ t('quality.title') }}</a>
                    </li>
                    <li class="list-group-item" :class="{ li_active: $route.name === 'cert' }">
                        <a :href="`/${locale}/cert`">{{ t('cert.title') }}</a>
                    </li>
                </ul>
            </div>


        </div>


    </div>
</template>

<script>
import { useRouter, useRoute } from "vue-router";
import { useI18n } from "vue-i18n";

export default {
    name: "companyMenu",
    setup() {
        const { t, locale } = useI18n();
        const currentCategory = useRoute().query.category;
        return {
            t,
            currentCategory,
            locale
        };
    },
};
</script>

<style scoped>
/* Add any custom styles here */
</style>
