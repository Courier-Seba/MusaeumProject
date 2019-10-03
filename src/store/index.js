import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import museum from "./_modules/museum";
import artifact from "./_modules/artifact";
import user from "./_modules/user";
import auth from "./_modules/auth";

export default new Vuex.Store({
  modules: {
    museum,
    artifact,
    user,
    auth
  }
});
