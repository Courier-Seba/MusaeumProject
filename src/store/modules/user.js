import api from "@/api";

export default {
  state: {
    isLogged: false,
    userName: "",
    email: "",
    firstName: "",
    lastName: "",
    pk: null,
    jwt: "",
    museum: null
  },
  mutations: {
    saveUserName(state, payload) {
      state.userName = payload;
    },
    saveEmail(state, payload) {
      state.email = payload;
    },
    saveFirstName(state, payload) {
      state.firstName = payload;
    },
    saveLastName(state, payload) {
      state.lastName = payload;
    },
    savePK(state, payload) {
      state.pk = payload;
    },
    saveJWT(state, payload) {
      state.jwt = payload;
    },
    saveUserMuseum(state, payload) {
      state.museum = payload;
    },
    activeUser(state) {
      state.isLogged = true;
    },
    desactiveUser(state) {
      state.isLogged = false;
    }
  },
  actions: {
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
    storeUserMuseum({ commit }, payload) {
      commit("saveUserMuseum", payload);
    },
    activateUser({ commit }) {
      commit("activeUser");
    }
  },
  getters: {
    userName: state => state.userName,
    userPk: state => state.pk,
    userMuseum: state => state.museum,
    userJWT: state => state.jwt,
    userIsLogged: state => state.isLogged
  }
};
