import { RouteConfig } from "vue-router";
import BaseLayout from "@/views/BaseLayout.vue";
import BaseContent from "@/views/BaseContent.vue";
import SignIn from "@/views/SignIn.vue";

export default [
  {
    path: "/",
    component: BaseLayout,
    meta: { admin: true },
    children: [
      {
        path: "",
        name: "Home",
        meta: {
          title: "概览",
          icon: "",
        },
        component: () => import("@/views/Home.vue"),
      },
      {
        path: "app",
        meta: {
          title: "小程序管理",
          icon: "",
        },
        component: BaseContent,
        children: [
          {
            path: "",
            name: "AppHome",
            meta: {
              title: "首页",
            },
            component: () => import("@/views/Home.vue"),
          },
        ],
      },
      {
        path: "decoration",
        meta: {
          title: "店铺装修",
          icon: "",
        },
        component: BaseContent,
        children: [
          {
            path: "",
            name: "DecorationIndex",
            meta: {
              title: "首页",
            },
            component: () => import("@/views/decoration/Index.vue"),
          },
          {
            path: "edit",
            name: "DecorationEdit",
            meta: {
              title: "装修",
            },
            component: () => import("@/views/decoration/Edit.vue"),
          },
        ],
      },
    ],
  },
  {
    path: "/signIn",
    name: "SignIn",
    component: SignIn,
  },
] as RouteConfig[];
