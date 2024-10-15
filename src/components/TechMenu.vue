<template>
    <div class="col-12 col-lg-2 category">

        <a class="btn btn-primary" id="techMenuBtn" data-bs-toggle="collapse" href="#techMenu" role="button"
            aria-expanded="false" aria-controls="techMenu">
            開啟分類選單
        </a>
        <div class="collapse col-12 category" id="techMenu">
            <div>
                <div class="title">
                    技術設備
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item" :class="{ li_active: $route.name === 'tech' }">
                        <router-link to="tech">專業技術</router-link>
                    </li>
                    <li class="list-group-item" :class="{ li_active: $route.name === 'equip' }">
                        <router-link to="equip">核心設備</router-link>
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
            currentCategory,
            locale
        };
    },
};
</script>

<style scoped>
/* Add any custom styles here */
</style>
