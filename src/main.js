import Vue from "vue";
import "./mock";
import App from "./App.vue";
import Router from "vue-router";
import "@/style/reset.css/reset.css";
import RouterVue from "./router";
import hintMessage from "@/utils/hintMessage/index.js";
import vLoading from "@/custom/loading";
import Element from "element-ui";
import Lazy from "@/custom/lazy"; //这是自定义指令的懒加载！
import "element-ui/lib/theme-chalk/index.css";
Vue.use(Element);
Vue.config.productionTip = false;
Vue.prototype.$message = hintMessage;
Vue.use(Router);
Vue.directive("loading", vLoading());
Vue.directive("lazy", Lazy());
const vm = new Vue({
  router: RouterVue,
  render: (h) => h(App),
}).$mount("#app");
