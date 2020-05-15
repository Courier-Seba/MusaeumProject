import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import museums from "./_modules/museums";
import artifacts from "./_modules/artifacts";
import user from "./_modules/user";
import auth from "./_modules/auth";
import news from "./_modules/news";
import site from "./_modules/site";

export default new Vuex.Store({
  modules: {
    museums,
    artifacts,
    user,
    auth,
    news,
    site
  }
});
