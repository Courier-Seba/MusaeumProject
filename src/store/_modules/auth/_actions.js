import api from "@/api";
import vue from "vue";

const actions = {
  postLoginCredentials({ commit }, payload) {
    api.user
      .postLoginCredentials(payload.userName, payload.password)
      .then(response => {
        commit("saveJWT", response.data.token);
        commit("savePK", response.data.user.pk);
        commit("saveUserName", response.data.user.username);
        commit("saveEmail", response.data.user.email);
        commit("saveFirstName", response.data.user.first_name);
        commit("saveLastName", response.data.user.last_name);
        return true;
      })
      .catch(() => false);
  },
  refreshToken({ commit, getters }) {
    api.user
      .refreshToken(getters.userJWT)
      .then(response => commit("saveJWT", response.data.token));
  },
  reLogUser({ commit, dispatch }) {
    let cookieToken = vue.prototype.$cookie.get("token");
    api.user
      .refreshToken(cookieToken)
      .then(response => {
        commit("saveJWT", response.data.token);
        dispatch("getUserData");
        dispatch("activateUser");
        return true;
      })
      .catch(() => false);
  },
  getUserData({ commit, getters }) {
    api.user.getUserPersonalInfo(getters.userJWT).then(response => {
      commit("savePK", response.data.pk);
      commit("saveUserName", response.data.username);
      commit("saveEmail", response.data.email);
      commit("saveFirstName", response.data.first_name);
      commit("saveLastName", response.data.last_name);
    });
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
