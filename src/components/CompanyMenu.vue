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
                        <router-link :to="{ name: 'company' }">{{ t('company.title') }}</router-link>
                    </li>
                    <li class="list-group-item" :class="{ li_active: $route.name === 'quality' }">
                        <router-link :to="{ name: 'quality' }">{{ t('quality.title') }}</router-link>
                    </li>
                    <li class="list-group-item" :class="{ li_active: $route.name === 'cert' }">
                        <router-link :to="{ name: 'cert' }">{{ t('cert.title') }}</router-link>
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
