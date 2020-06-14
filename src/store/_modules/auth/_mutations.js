import vue from "vue";

const mutations = {
  savePK(state, payload) {
    state.id = payload;
    vue.prototype.$cookie.set("id", payload, 7);
  },
  saveJWT(state, payload) {
    state.jwt = payload;
    vue.prototype.$cookie.set("token", payload, 7);
  },
  saveRefreshJWT(state, payload) {
    state.refreshJwt = payload;
    vue.prototype.$cookie.set("refreshToken", payload, 7);
  },
  activateUser(state) {
    state.isLogged = true;
  },
  desactiveUser(state) {
    state.isLogged = false;
  },
  clearUser(state) {
    state.isLogged = false;
    state.pk = false;
    state.userName = "";
    state.email = "";
    state.firstName = "";
    state.lastName = "";
    state.jwt = "";
    state.museum = null;
    state.museumArtifact = [];
  }
};

export default mutations;
