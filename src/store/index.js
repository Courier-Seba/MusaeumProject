import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import museum from "./modules/museum";

export default new Vuex.Store({
  modules: {
    museum
  }
});
