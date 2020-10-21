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
    return api.museum
      .getMuseumByUser(getters.userId)
      .then(response => {
        let museum = response.data;
        commit("saveUserMuseum", museum.id);
        return true;
      })
      .catch(() => false);
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
  getUserProfile({ commit, getters }) {
    return api.user
      .getUserProfile(getters.userId)
      .then(response => {
        commit("saveUserProfile", response.data);
        return true;
      })
  },
  createUserProfile({ commit, getters }) {
    return api.user
      .postUserProfile(getters.userJWT, getters.userPk)
      .then(response => {
        commit("saveUserProfile", response.data);
        return true;
      });
  },
  updateFirstName({ commit, getters }, payload) {
    return api.user
      .patchUserFirstName(getters.userJWT, payload)
      .then(response => {
        commit("saveFirstName", response.data.first_name);
        return true;
      })
      .catch(() => false);
  },
  updateLastName({ commit, getters }, payload) {
    return api.user
      .patchUserLastName(getters.userJWT, payload)
      .then(response => {
        commit("saveLastName", response.data.last_name);
        return true;
      })
      .catch(() => false);
  },
  updateProfilePicture({ commit, getters }, payload) {
    let form = new FormData();
    form.append("picture", payload);
    return api.user
      .patchUserProfilePicture(getters.userJWT, getters.userPk, form)
      .then(response => {
        commit("saveUserProfile", response.data);
        return true;
      });
  }
};

export default actions;
