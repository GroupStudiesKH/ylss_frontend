<template>
    <div class="col-12 col-lg-2 category">
        <a class="btn btn-primary" id="productMenuBtn" data-bs-toggle="collapse" href="#productMenu" role="button"
            aria-expanded="false" aria-controls="productMenu">
            開啟分類選單
        </a>
        <div class="collapse col-12 category" id="productMenu">
            <div>
                <div class="title">
                    產品介紹
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item" v-for="(category, index) in categories" :key="index">
                        <a data-bs-toggle="collapse" :href="`#secondMenu_${index}`" role="button" 
                           aria-expanded="true" :aria-controls="`secondMenu_${index}`">
                            {{ category.name }}
                        </a>
                        <ul class="list-group list-group-flush" :id="`secondMenu_${index}`">
                            <li class="list-group-item" v-for="(subCategory, subIndex) in category.children" :key="subIndex">
                                <router-link :to="`/product/${category.id}/${subCategory.id}`">
                                    {{ subCategory.name }}
                                </router-link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from "vue";
import { useI18n } from "vue-i18n";

export default {
    name: "ProductMenu",
    setup() {
        const { locale } = useI18n();
        const categories = ref([
            {
                id: 1,
                name: "430不銹鋼系列",
                children: [
                    { id: 11, name: "BA/A表面" },
                    { id: 12, name: "BA/B表面" }
                ]
            },
            {
                id: 2,
                name: "304不銹鋼系列",
                children: [
                    { id: 21, name: "BA/A表面" },
                    { id: 22, name: "BA/B表面" }
                ]
            },
            {
                id: 3,
                name: "不銹鋼卷包裝",
                children: [
                    { id: 31, name: "不銹鋼捲外銷包裝" },
                    { id: 32, name: "不銹鋼捲內銷包裝" }
                ]
            }
        ]);

        return {
            categories,
            locale
        };
    },
};
</script>

<style scoped>
/* Add any custom styles here */
</style>
