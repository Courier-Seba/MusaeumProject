const mutations = {
  savePK(state, payload) {
    state.id = payload;
  },
  saveJWT(state, payload) {
    state.jwt = payload;
  },
  saveRefreshJWT(state, payload) {
    state.refreshJwt = payload;
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
