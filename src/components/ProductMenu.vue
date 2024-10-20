<template>
    <div class="col-12 col-lg-2 category">
        <a class="btn btn-primary" id="productMenuBtn" data-bs-toggle="collapse" href="#productMenu" role="button"
            aria-expanded="false" aria-controls="productMenu">
            {{ t('common.openMenu') }}
        </a>
        <div class="collapse col-12 category" id="productMenu">
            <div>
                <div class="title">
                    {{ t('product.title') }}
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item" v-for="(category, index) in categories" :key="index">
                        <a data-bs-toggle="collapse" :href="`#secondMenu_${index}`" role="button" 
                           aria-expanded="true" :aria-controls="`secondMenu_${index}`">
                            {{ category.title[locale] || category.title.zh_TW }}
                        </a>
                        <ul class="list-group list-group-flush" :id="`secondMenu_${index}`">
                            <li class="list-group-item" v-for="(product, subIndex) in category.products" :key="subIndex">
                                <a :href="`/${locale}/product/${product.id}`">
                                    {{ product.title[locale] || product.title.zh_TW }}
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { useI18n } from "vue-i18n";

export default {
    name: "ProductMenu",
    props: {
        categories: {
            type: Array,
            required: true
        }
    },
    setup() {
        const { t, locale } = useI18n();

        return {
            t,
            locale
        };
    },
};
</script>

<style scoped>
/* Add any custom styles here */
</style>
