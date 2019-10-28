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
    let token = getters.userJWT;
    let form = new FormData();
    form.append("name", payload.name);
    form.append("description", payload.description);
    form.append("registrator", payload.registrator);
    form.append("external_reference", payload.externalReference);
    form.append("museum", payload.museum);
    form.append("picture", payload.picture);
    return api.artifact
      .postArtifact(token, form)
      .then(response => {
        commit("saveUserMuseumArtifact", response.data);
        commit("saveArtifact", response.data);
        return true;
      })
      .catch(() => {
        return false;
      });
  }
};

export default actions;
