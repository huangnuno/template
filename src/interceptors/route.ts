import { NavigationGuard, Route } from "vue-router";
import config from "@/config";

export const BEFORE_EACH: NavigationGuard = (to, from, next) => {
  next();
};

export const AFTER_EACH = (to: Route, from: Route) => {
  const title = to.meta.title || config.title;
  document.title = title;
};
