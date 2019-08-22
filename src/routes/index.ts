import Vue from "vue";
import Router from "vue-router";
import routes from "./routes";
import { BEFORE_EACH, AFTER_EACH } from "@/interceptors/route";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach(BEFORE_EACH);

router.afterEach(AFTER_EACH);

export const routeNav = routes.find(item => item.meta.admin).children;

export default router;
