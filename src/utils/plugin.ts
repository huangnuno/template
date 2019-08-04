import { VueConstructor } from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "normalize.css";

// Vue插件安装
export const installPlugin = (Vue: VueConstructor) => {
  Vue.use(ElementUI);
};
