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
                    <li class="list-group-item" v-for="(item, itemIndex) in articleLists" :key="itemIndex">
                        <router-link :to="`/article/${ item.id }`">
                            {{ item.get_title_attribute.find(attr => attr.language === locale)?.meta_value || '' }}
                        </router-link>
                    </li>
                </ul>
            </div>


        </div>


    </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import apiService from "@/service/api-service";

export default {
    name: "articleMenu",
    setup() {
        const { t, locale } = useI18n();
        const currentCategory = useRoute().query.category;
        const articleLists = ref([]);

        const getArticleLists = async () => {
            try {
                articleLists.value = await apiService.getArticle('csr');
            } catch (error) {
                console.error("Error fetching article lists:", error);
            }
        }

        onMounted(() => {
            getArticleLists()
        });

        return {
            currentCategory,
            locale,
            articleLists
        };
    },
};
</script>

