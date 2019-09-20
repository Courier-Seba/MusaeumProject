import api from "@/api";

export default {
  state: {
    isLogged: false, // App has an unser logged
    pk: null,
    userName: "",
    email: "",
    firstName: "",
    lastName: "",
    jwt: "",
    museum: null,
    museumArtifact: [],
    museumCollections: []
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
    saveUserMuseumArtifacts(state, payload) {
      state.museumArtifact = payload;
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
    },
    storeCollection(state, payload) {
      state.museumCollections.push(payload);
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
    postUserCollection({ commit, getters }, payload) {
      let data = {
        title: payload,
        museum: getters.userMuseum.id,
        favorited: false
      };
      api.collections
        .postCollection(getters.userJWT, data)
        .then(response => commit("storeCollection", response.data));
    },
    getUserMuseum({ commit, getters }) {
      api.museum
        .getMuseumByUser(getters.userPk)
        .then(response => commit("saveUserMuseum", response.data.results[0]));
    },
    getUserArtifacts({ commit, getters }) {
      api.artifact
        .getListArtifactOfMuseum(getters.userMuseum.id)
        .then(response =>
          commit("saveUserMuseumArtifacts", response.data.results)
        );
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
    userName: state => state.userName,
    userPk: state => state.pk,
    userJWT: state => state.jwt,
    userIsLogged: state => state.isLogged,
    userMuseum: state => state.museum,
    userMuseumArtifacts: state => state.museumArtifact
  }
};
