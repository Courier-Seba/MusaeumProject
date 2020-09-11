import api from "@/api";

const actions = {
  getArtifactList({ commit }) {
    api.artifact
      .getListArtifact()
      .then(response => commit("saveArtifactList", response.data.results));
  },
  getSearchArtifactList({ commit }, payload) {
    api.artifact
      .getSearchListArtifact(payload)
      .then(response => commit("saveArtifactList", response.data.results));
  },
  postArtifact({ commit, getters }, payload) {
    let token = getters.authJWT;
    let museum = getters.userMuseum;
    let form = new FormData();
    form.append("name", payload.name);
    form.append("description", payload.description);
    form.append("museum", museum);
    return api.artifact
      .postArtifact(token, form)
      .then(response => {
        commit("saveUserMuseumArtifact", response.data);
        return true;
      })
      .catch(() => false);
  },
  postArtifactImage({ getters }, payload) {
    let form = new FormData();
    let token = getters.authJWT;
    form.append("artifact", payload.artifact);
    form.append("image", payload.image)
    return api.artifact
      .postArtifactImage(token, form)
      .then(() => true)
      .catch(() => false)
  },
  postArtifactWithImage({ getters, dispatch }, payload) {
    dispatch("postArtifact", {
      name: payload.name,
      description: payload.description
    })
      .then(() => {
        console.log(getters.userArtifacts)
        console.log(getters.userLastArtifact)
        dispatch("postArtifactImage", {
          artifact: getters.userLastArtifact.id,
          image: payload.image
        })
      }
    )

  },
};

export default actions;
