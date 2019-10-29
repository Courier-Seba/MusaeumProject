import api from "@/api";
const actions = {
  storeUserMuseum({ commit }, payload) {
    commit("saveUserMuseum", payload);
  },
  postUserCollection({ commit, getters }, payload) {
    let data = {
      title: payload,
      museum: getters.userMuseum.id,
      favorited: false
    };
    api.collection
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
  postStar({ getters }, payload) {
    api.star.postStar(getters.userJWT, payload);
  },
  getUserProfileData({ commit, getters }) {
    api.user.getUserData(getters.userPk).then(response => {
      commit("saveUserData", response.data);
    });
  }
};

export default actions;
