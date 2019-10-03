import api from "@/api";

export default {
  state: {
    isLogged: false, // App has an unser logged
    pk: null,
    userName: "",
    password: "",
    jwt: ""
  },
  mutations: {
    saveUserName(state, payload) {
      state.userName = payload;
    },
    storePassword(state, payload) {
      state.password = payload;
    },
    savePK(state, payload) {
      state.pk = payload;
    },
    saveJWT(state, payload) {
      state.jwt = payload;
    },
    activeUser(state) {
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
      commit("storePassword", payload.password);
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
        .postLoginCredentials(getters.userName, getters.userPassword)
        .then(response => commit("saveJWT", response.data.token));
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
      commit("activeUser");
    },
    logOut({ commit }) {
      commit("clearUser");
      commit("desactiveUser");
    }
  },
  getters: {
    userIsLogged: state => state.isLogged,
    userName: state => state.userName,
    userPassword: state => state.password,
    userPk: state => state.pk,
    userJWT: state => state.jwt
  }
};
