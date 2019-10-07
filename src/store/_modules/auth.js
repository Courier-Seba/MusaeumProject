import api from "@/api";
import vue from "vue";

export default {
  state: {
    isLogged: false, // App has an unser logged
    pk: null,
    userName: "",
    jwt: ""
  },
  mutations: {
    saveUserName(state, payload) {
      state.userName = payload;
    },
    savePK(state, payload) {
      state.pk = payload;
      vue.prototype.$cookie.set("id", payload);
    },
    saveJWT(state, payload) {
      state.jwt = payload;
      vue.prototype.$cookie.set("token", payload);
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
  },
  actions: {
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
      api.user.refreshToken(cookieToken).then(response => {
        commit("saveJWT", response.data.token);
        dispatch("getUserData");
        dispatch("activateUser");
      });
    },
    getUserData({ commit, getters }) {
      api.user.getUserData(getters.userJWT).then(response => {
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
  },
  getters: {
    userIsLogged: state => state.isLogged,
    userName: state => state.userName,
    userPk: state => state.pk,
    userJWT: state => state.jwt
  }
};
