import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/:locale(eng|zh_TW|zh_CN)?/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/:locale(eng|zh_TW|zh_CN)?/product",
      name: "product",
      component: () => import("../views/ProductList.vue"),
    },
    {
      path: "/:locale(eng|zh_TW|zh_CN)?/product/:id",
      name: "product-detail",
      component: () => import("../views/ProductDetail.vue"),
    },
    {
      path: "/:locale(eng|zh_TW|zh_CN)?/company",
      name: "company",
      component: () => import("../views/CompanyView.vue"),
    },
    {
      path: "/:locale(eng|zh_TW|zh_CN)?/quality",
      name: "quality",
      component: () => import("../views/QualityView.vue"),
    },
    {
      path: "/:locale(eng|zh_TW|zh_CN)?/cert",
      name: "cert",
      component: () => import("../views/CertView.vue"),
    },
    {
      path: "/:locale(eng|zh_TW|zh_CN)?/equip",
      name: "equip",
      component: () => import("../views/EquipView.vue"),
    },
    {
      path: "/:locale(eng|zh_TW|zh_CN)?/tech",
      name: "tech",
      component: () => import("../views/TechView.vue"),
    },
    {
      path: "/:locale(eng|zh_TW|zh_CN)?/spec",
      name: "spec",
      component: () => import("../views/SpecView.vue"),
    },
    {
      path: "/:locale(eng|zh_TW|zh_CN)?/spec/:id",
      name: "specDetail",
      component: () => import("../views/SpecView.vue"),
    },
    {
      path: "/:locale(eng|zh_TW|zh_CN)?/contact",
      name: "contact",
      component: () => import("../views/ContactView.vue"),
    },
    {
      path: "/:locale(eng|zh_TW|zh_CN)?/recurit",
      name: "recurit",
      component: () => import("../views/RecuritView.vue"),
    },
    {
      path: "/:locale(eng|zh_TW|zh_CN)?/article",
      name: "article",
      component: () => import("../views/ArticleView.vue"),
    },
    {
      path: "/:locale(eng|zh_TW|zh_CN)?/article/:id",
      name: "articleDetail",
      component: () => import("../views/ArticleView.vue"),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

router.beforeEach((to, from, next) => {
  const locale = to.params.locale || localStorage.getItem('locale');
  if (!locale) {
    const defaultLocale = 'zh_TW'; // 或者您想要的默認語言
    return next(`/${defaultLocale}${to.path}`);
  }
  next();
});

export default router;
