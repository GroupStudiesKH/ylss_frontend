<template>
    <div class="col-12 col-lg-2 category">

        <a class="btn btn-primary" id="articleMenuBtn" data-bs-toggle="collapse" href="#articleMenu" role="button"
            aria-expanded="false" aria-controls="articleMenu">
            開啟分類選單
        </a>
        <div class="collapse col-12 category" id="articleMenu">
            <div>
                <div class="title">
                    企業永續
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                        <router-link to="#">循環永續</router-link>
                    </li>
                    <li class="list-group-item">
                        <router-link to="#">勞工關係</router-link>
                    </li>
                    <li class="list-group-item">
                        <router-link to="#">人權保障</router-link>
                    </li>
                    <li class="list-group-item">
                        <router-link to="#">節能減碳</router-link>
                    </li>
                    <li class="list-group-item">
                        <router-link to="#">幸福職場</router-link>
                    </li>
                    <li class="list-group-item">
                        <router-link to="#">綠色採購</router-link>
                    </li>
                    <li class="list-group-item">
                        <router-link to="#">企業社會責任</router-link>
                    </li>
                    <li class="list-group-item">
                        <router-link to="#">國際認證</router-link>
                    </li>
                    <li class="list-group-item">
                        <router-link to="#">人才發展</router-link>
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
    name: "articleMenu",
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
