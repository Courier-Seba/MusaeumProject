import api from "@/api";
import vue from "vue";

const actions = {
  postLoginCredentials({ commit }, payload) {
    return api.user
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
    vue.prototype.$cookie.delete("token");
    commit("clearUser");
    commit("desactiveUser");
  }
};

export default actions;
