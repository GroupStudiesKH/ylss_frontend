<template>
    <div class="col-12 col-lg-2 category">

        <a class="btn btn-primary" id="techMenuBtn" data-bs-toggle="collapse" href="#techMenu" role="button"
            aria-expanded="false" aria-controls="techMenu">
            {{ t('common.openMenu') }}
        </a>
        <div class="collapse col-12 category" id="techMenu">
            <div>
                <div class="title">
                    {{ t('header.techEquipment') }}
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item" :class="{ li_active: $route.name === 'tech' }">
                        <router-link to="tech">{{ t('tech.title') }}</router-link>
                    </li>
                    <li class="list-group-item" :class="{ li_active: $route.name === 'equip' }">
                        <router-link to="equip">{{ t('equip.title') }}</router-link>
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
    name: "techMenu",
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
