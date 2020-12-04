import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  { 
    path: "/",
    name: "index",
    meta: {
      requireAuth: false,
      title: "index主题",
      keepAlive: false
    },
    component: () => import("../pages/index/index.vue")
  },
  { 
    path: "/index",
    name: "index",
    meta: {
      requireAuth: false,
      title: "index主题",
      keepAlive: false
    },
    component: () => import("../pages/index/index.vue")
  },
  { 
    path: "/good",
    name: "good",
    meta: {
      requireAuth: false,
      title: "good主题",
      keepAlive: false
    },
    component: () => import("../pages/good/good.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
