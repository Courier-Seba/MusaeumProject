import api from "@/api";

const actions = {
  postLoginCredentials({ commit }, payload) {
    return api.user
      .postLoginCredentials(payload.username, payload.password)
      .then(response => {
        commit("saveJWT", response.data.access);
        commit("saveRefreshJWT", response.data.refresh);
        commit("saveId", response.data.user)
        commit("activateUser");
        return true;
      })
      .catch(() => false);
  },
  refreshToken({ commit, getters }) {
    api.user
      .refreshToken(getters.userJWT)
      .then(response => commit("saveJWT", response.data.token));
  },
  reLogUser({ commit, dispatch }, payload) {
    commit("saveId", payload.userId);
    return api.user
      .refreshToken(payload.refreshToken)
      .then(response => {
        commit("saveJWT", response.data.access);
        commit("saveRefreshJWT", response.data.refresh);
        dispatch("activateUser");
        return true;
      })
      .catch(() => false);
  },
  postUserRegistration({ commit }, payload) {
    api.user
      .postUserRegistration(
        payload.userName,
        payload.email,
        payload.password1,
        payload.password2
      )
      .then(response => {
        commit("saveJWT", response.data.token);
        commit("savePK", response.data.user.pk);
        commit("saveUserName", response.data.user.username);
        commit("saveEmail", response.data.user.email);
        commit("saveFirstName", response.data.user.first_name);
        commit("saveLastName", response.data.user.last_name);
      });
  },
  activateUser({ commit }) {
    commit("activateUser");
  },
  logOut({ commit }) {
    commit("clearUser");
    commit("desactiveUser");
  }
};

export default actions;
