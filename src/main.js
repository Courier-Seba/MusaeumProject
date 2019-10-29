import Vue from "vue";
import App from "./App.vue";

// Official plugins
import router from "./router";
import store from "./store";

// Extra plugins
import i18n from "./plugins/i18n";
import "./plugins/icons";
import "./plugins/style";
import "./plugins/cookie";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
