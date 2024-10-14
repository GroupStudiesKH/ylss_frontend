<template>
    <div class="col-12 col-lg-2 category">

        <a class="btn btn-primary" id="specMenuBtn" data-bs-toggle="collapse" href="#specMenu" role="button"
            aria-expanded="false" aria-controls="specMenu">
            開啟分類選單
        </a>
        <div class="collapse col-12 category" id="specMenu">
            <div>
                <div class="title">
                    產品規格
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                        <router-link to="#">400系-化學成份及機械性質</router-link>
                    </li>
                    <li class="list-group-item">
                        <router-link to="#">400系-不銹鋼鋼種特加成份與用途</router-link>
                    </li>
                    <li class="list-group-item">
                        <router-link to="#">300系-化學成份及機械性質</router-link>
                    </li>
                    <li class="list-group-item">
                        <router-link to="#">300系-不銹鋼鋼種特加成份與用途</router-link>
                    </li>
                    <li class="list-group-item">
                        <router-link to="#">不銹鋼應用</router-link>
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
    name: "specMenu",
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
