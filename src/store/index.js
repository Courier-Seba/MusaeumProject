import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import museum from "./modules/museum";
import artifact from "./modules/artifact";
import user from "./modules/user";

export default new Vuex.Store({
  modules: {
    museum,
    artifact,
    user
  }
});
