import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from "vuex-persist";
Vue.use(Vuex);

import museum from "./modules/museum";
import artifact from "./modules/artifact";
import user from "./modules/user";

const vuexPersist = new VuexPersist({
  key: "musaeum",
  storage: window.localStorage
});

export default new Vuex.Store({
  modules: {
    museum,
    artifact,
    user
  },
  plugins: [vuexPersist.plugin]
});
