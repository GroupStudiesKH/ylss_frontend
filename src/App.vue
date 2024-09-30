<script>
import { RouterLink, RouterView } from "vue-router";
import { onMounted, reactive } from "vue";
import { useI18n } from "vue-i18n";
export default {

  setup() {
    const { locale } = useI18n();

    return {
      locale
    };

  },
};

</script>

<template>
  <RouterView :key="locale" />
</template>