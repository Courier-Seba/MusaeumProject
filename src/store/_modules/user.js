import api from "@/api";

export default {
  state: {
    email: "",
    firstName: "",
    lastName: "",
    museum: null,
    museumArtifact: [],
    museumCollections: []
  },
  mutations: {
    saveEmail(state, payload) {
      state.email = payload;
    },
    saveFirstName(state, payload) {
      state.firstName = payload;
    },
    saveLastName(state, payload) {
      state.lastName = payload;
    },
    saveUserMuseum(state, payload) {
      state.museum = payload;
    },
    saveUserMuseumArtifacts(state, payload) {
      state.museumArtifact = payload;
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
    },
    postStar({ commit, getters }, payload) {
      api.star
        .postStar(getters.userJWT, payload)
        .then(response => console.log(response.data));
    }
  },

  getters: {
    userMuseum: state => state.museum,
    userMuseumArtifacts: state => state.museumArtifact,
    userMuseumCollections: state => state.museumCollections
  }
};
