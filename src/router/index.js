import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/brazil",
      name: "brazil",
      component: () => import("../views/Brazil.vue"),
    },
    {
      path: "/panama",
      name: "panama",
      component: () => import("../views/Panama.vue"),
    },
    {
      path: "/hawaii",
      name: "hawaii",
      component: () => import("../views/Hawaii.vue"),
    },
    {
      path: "/jamaica",
      name: "jamaica",
      component: () => import("../views/Jamaica.vue"),
    },
  ],
});

export default router;
