import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/product",
      name: "product",
      component: () => import("../views/ProductList.vue"),
    },
    // {
    //   path: "/product/category/:categoryID",
    //   name: "category-product",
    //   component: () => import("../views/ProductList.vue"),
    // },
    {
      path: "/product/:id",
      name: "product-detail",
      component: () => import("../views/ProductDetail.vue"),
    },
    {
      path: "/company",
      name: "company",
      component: () => import("../views/CompanyView.vue"),
    },
    {
      path: "/quality",
      name: "quality",
      component: () => import("../views/QualityView.vue"),
    },
    {
      path: "/cert",
      name: "cert",
      component: () => import("../views/CertView.vue"),
    },
    {
      path: "/equip",
      name: "equip",
      component: () => import("../views/EquipView.vue"),
    },
    {
      path: "/tech",
      name: "tech",
      component: () => import("../views/TechView.vue"),
    },
    {
      path: "/spec",
      name: "spec",
      component: () => import("../views/SpecView.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("../views/ContactView.vue"),
    },
    {
      path: "/recurit",
      name: "recurit",
      component: () => import("../views/RecuritView.vue"),
    },
    {
      path: "/article",
      name: "article",
      component: () => import("../views/ArticleView.vue"),
    },
    {
      path: "/article/:id",
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

export default router;
