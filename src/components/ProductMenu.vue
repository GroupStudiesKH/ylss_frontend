<template>
    <div class="col-12 col-lg-2 category">

        <a class="btn btn-primary" id="productMenuBtn" data-bs-toggle="collapse" href="#productMenu" role="button"
            aria-expanded="false" aria-controls="productMenu">
            開啟分類選單
        </a>
        <div class="collapse col-12 category" id="productMenu">
            <div v-for="(category, categoryIndex) in categories.filter(
                c => {
                    return c.get_title_attribute.find((attr) => {
                        return attr.language == locale;
                    }).meta_value != null
                }
            )" :key="categoryIndex">
                <div class="title">
                    <router-link :to="`/product/category/${category.id}`">
                        {{ category.get_title_attribute.find((attr) => {
                            return attr.language == locale;
                        }).meta_value }}
                    </router-link>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item" v-for="(childCategory2nd, childCategory2ndIndex) in category.children" :key="childCategory2ndIndex">
                    
                        <a 
                            v-if="childCategory2nd.children.length && currentCategory == childCategory2nd.id" 
                            data-bs-toggle="collapse" 
                            :href="`#secondMenu_${childCategory2ndIndex}`" 
                            role="button" 
                            aria-expanded="false"
                            :aria-controls="`secondMenu_${childCategory2ndIndex}`">
                            {{ childCategory2nd.get_title_attribute.find((attr) => {
                                return attr.language == locale;
                            }).meta_value }}
                        </a>

                        
                        <a :href="`/product/category/${childCategory2nd.id}`">
                            {{ childCategory2nd.get_title_attribute.find((attr) => {
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
    name: "ProductMenu",
    setup() {
        const { t, locale } = useI18n();
        const categories = ref([]);
        const currentCategory = useRoute().query.category;
        const fetchCategories = async () => {
            try {
                const results = await apiService.getAllCategory();
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
