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
    let form = new FormData();
    form.append("name", payload.name);
    form.append("description", payload.description);
    form.append("picture", payload.picture);
    form.append("registrator", payload.registrator);
    form.append("museum", payload.museum);
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
