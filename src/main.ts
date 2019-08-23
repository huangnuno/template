// import Vue from "vue";
import { Vue, Medusa } from "@nuyano/medusa-core";
import App from "@/App.vue";
import router from "@/routes";
import store from "@/store";
import { installPlugin } from "@/utils";

Vue.config.productionTip = false;

Vue.use(Medusa);

installPlugin(Vue);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount("#app");
