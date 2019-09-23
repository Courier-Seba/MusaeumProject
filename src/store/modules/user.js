import api from "@/api";

export default {
  state: {
    isLogged: false, // App has an unser logged
    pk: null,
    userName: "",
    password: "",
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
    storePassword(state, payload) {
      state.password = payload;
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
    storeUserCollection(state, payload) {
      state.museumCollections.push(payload);
    },
    saveUserCollections(state, payload) {
      state.museumCollections = payload;
    },
    updateArtifact(state, payload) {
      for (let artifact of state.museumArtifact) {
        artifact.id === payload.id ? (artifact = payload) : null;
      }
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
        .then(response => commit("storeUserCollection", response.data));
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
    },
    updateMuseumInfo({ commit, getters }, payload) {
      let museumId = getters.userMuseum.id;
      let form = new FormData();
      payload.shortName ? form.append("short_name", payload.shortName) : null;
      payload.longName ? form.append("complete_name", payload.longName) : null;
      payload.logo ? form.append("logo", payload.logo) : null;
      payload.front ? form.append("front_picture", payload.front) : null;
      payload.city ? form.append("city", payload.city) : null;
      api.museum
        .patchMuseumInfo(getters.userJWT, museumId, form)
        .then(response => commit("saveUserMuseum", response.data));
    },
    getUserCollections({ commit, getters }) {
      // Save user museum collections, if no collection exist store empty list.
      api.museum
        .getMuseumCollections(getters.userMuseum.id)
        .then(response => commit("saveUserCollections", response.data.results));
    },
    updateArtifact({ commit, getters }, payload) {
      let form = new FormData();
      payload.type === "collection"
        ? form.append("collection", payload.data)
        : null;
      api.artifact
        .patchArtifact(getters.userJWT, payload.artifact, form)
        .then(response => commit("updateArtifact", response.data));
    }
  },

  getters: {
    userName: state => state.userName,
    userPassword: state => state.password,
    userPk: state => state.pk,
    userJWT: state => state.jwt,
    userIsLogged: state => state.isLogged,
    userMuseum: state => state.museum,
    userMuseumArtifacts: state => state.museumArtifact,
    userMuseumCollections: state => state.museumCollections
  }
};
