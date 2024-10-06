<template>
    <div class="col-12 col-lg-2 category">

        <a class="btn btn-primary" id="companyMenuBtn" data-bs-toggle="collapse" href="#companyMenu" role="button"
            aria-expanded="false" aria-controls="companyMenu">
            開啟分類選單
        </a>
        <div class="collapse col-12 category" id="companyMenu">
            <div>
                <div class="title">
                    公司介紹
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                        <router-link to="company">關於遠龍</router-link>
                    </li>
                    <li class="list-group-item">
                        <router-link to="quality">品質政策</router-link>
                    </li>
                    <li class="list-group-item">
                        <router-link to="cert">標準認證</router-link>
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
            currentCategory,
            locale
        };
    },
};
</script>

<style scoped>
/* Add any custom styles here */
</style>
