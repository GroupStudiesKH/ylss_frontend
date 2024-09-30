<template>
    <div class="col-12 col-lg-2 category">

        <a class="btn btn-primary" id="appliedMenuBtn" data-bs-toggle="collapse" href="#appliedMenu" role="button"
            aria-expanded="false" aria-controls="appliedMenu">
            開啟分類選單
        </a>
        <div class="collapse col-12 category" id="appliedMenu">
            <div>
                <div class="title">
                    應用產業
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item" v-for="(category, categoryIndex) in categories.filter(c => {
                        return c.get_title_attribute.find((attr) => {
                            return attr.language == locale;
                        }).meta_value != null
                    })" :key="categoryIndex">
                        <a  :href="`/applied/category/${category.id}`">
                            {{ category.get_title_attribute.find((attr) => {
                                return attr.language == locale;
                            }).meta_value }}
                        </a>
                    </li>


                </ul>
            </div>


        </div>


    </div>
</template>

<script>

import apiService from "@/service/api-service.js";
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useI18n } from "vue-i18n";

export default {
    name: "AppliedMenu",
    setup() {
        const { t, locale } = useI18n();
        const categories = ref([]);
        const currentCategory = useRoute().query.category;
        const fetchCategories = async () => {
            try {
                const results = await apiService.getAppliedCategory();
                categories.value = results;
            } catch (error) {
                console.log(error);
            }
        };

        onMounted(() => {
            fetchCategories();
        });

        return {
            categories,
            currentCategory,
            locale
        };
    },
};
</script>

<style scoped>
/* Add any custom styles here */
</style>
