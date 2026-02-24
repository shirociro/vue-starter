import { createRouter, createWebHistory } from "vue-router";
import { adminGuard } from "@/app/guard";

// Lazy-load modules
const Portfolio = () => import("@/modules/portfolio/index.vue");
const Tasks = () => import("@/modules/tasks/index.vue");
const Users = () => import("@/modules/users/index.vue");

const routes = [
  { path: "/", redirect: "/portfolio" },
  {
    path: "/portfolio",
    component: Portfolio,
    meta: { layout: "AdminLayout" },
  },
  {
    path: "/tasks",
    component: Tasks,
    meta: { layout: "AdminLayout" },
    beforeEnter: adminGuard,
  },
  {
    path: "/users",
    component: Users,
    meta: { layout: "AdminLayout" },
    // beforeEnter: adminGuard,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
