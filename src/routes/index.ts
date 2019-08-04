import Vue from "vue";
import Router from "vue-router";
import routes from "./routes";
import config from "@/config";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, form, next) => {
  next();
});

router.afterEach((to, form) => {
  const title = to.meta.title || config.title;
  document.title = title;
});

export const routeNav = routes.find(item => item.meta.admin).children;

export default router;
