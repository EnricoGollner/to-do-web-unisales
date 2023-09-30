import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Welcome",
    component: () => import("../views/Welcome.vue"),
  },
  {
    path: "/to-do",
    name: "Todo",
    component: () => import("../views/Todo.vue"),
  },
  {
    path: "/sobre",
    name: "Sobre",
    component: () => import("../views/About.vue"),
  },
  {
    path: '/:pathMatch(.*)',
    name: "404",
    component: () => import("../views/PageNotFound.vue")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;