import cookies from "@/storage/cookies";

const mutations = {
  saveJWT(state, payload) {
    state.jwt = payload;
  },
  saveRefreshJWT(state, payload) {
    state.refreshJwt = payload;
    cookies.setRefreshToken(payload);
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
    cookies.removeUserId();
    cookies.removeUserRefreshToken();
  }
};

export default mutations;
