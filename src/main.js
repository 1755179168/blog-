import Vue from "vue";
import App from "./App.vue";
import Router from "vue-router";
import "@/style/reset.css/reset.css";
import RouterVue from "./router";
import hintMessage from "@/utils/hintMessage/index.js";

Vue.prototype.$message = hintMessage;
Vue.use(Router);

const vm = new Vue({
  router: RouterVue,
  render: (h) => h(App),
}).$mount("#app");
