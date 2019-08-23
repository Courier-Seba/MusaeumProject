import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import museum from "./modules/museum";
import artifact from "./modules/artifact";

export default new Vuex.Store({
  modules: {
    museum,
    artifact
  }
});
