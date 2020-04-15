import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default function createRouter() {
  return new VueRouter({
    mode: "history",
    routes: [
      { path: "/", component: () => import("@/components/Index") },
      { path: "/detail", component: () => import("@/components/Detail") }
    ]
  });
}
