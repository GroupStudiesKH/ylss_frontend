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
    {
      path: "/product/category/:categoryID",
      name: "category-product",
      component: () => import("../views/ProductList.vue"),
    },
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
      path: "/applied",
      name: "applied",
      component: () => import("../views/AppliedView.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("../views/ContactView.vue"),
    },
    {
      path: "/applied/category/:categoryID",
      name: "category-applied",
      component: () => import("../views/AppliedView.vue"),
    },
  ],
});

export default router;
