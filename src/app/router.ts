import { createRouter, createWebHistory } from "vue-router";
import { authGuard } from "@/app/guard";

const routes = [
  { 
    path: "/tasks", 
    component: () => import("@/modules/tasks/index.vue"),
    meta: { requiresAuth: true, layout: "AdminLayout" } 
  },
  { 
    path: "/users", 
    component: () => import("@/modules/users/index.vue"),
    meta: { requiresAuth: true, layout: "AdminLayout" } 
  },
  {
    path: "/portfolio",
    component: () => import("@/modules/portfolio/index.vue"),
    meta: { requiresAuth: true, layout: "AdminLayout" }
  },
  { path: "/:pathMatch(.*)*", redirect: "/tasks" }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// The Global "Bouncer"
router.beforeEach(async (to, from, next) => {
  if (to.meta.requiresAuth) {
    await authGuard(to, from, next);
  } else {
    next();
  }
});
export default router;