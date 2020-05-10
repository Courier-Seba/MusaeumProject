import Vue from "vue";
import App from "./App.vue";

// Official plugins
import router from "./router";
import store from "./store";

// Extra plugins
import "./plugins/cookie";
import "./plugins/i18n";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
