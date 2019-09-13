import api from "../../api";

export default {
  state: {
    list: []
  },
  mutations: {
    saveArtifactList(state, payload) {
      for (let artifact of payload) {
        state.list.push(artifact);
      }
    },
    saveArtifact(state, payload) {
      state.list.push(payload);
    }
  },
  actions: {
    getArtifactList({ commit }) {
      api.artifact
        .getListArtifact()
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
      api.artifact
        .postArtifact(token, form)
        .then(response => commit("saveArtifact", response.data));
    },
  },
  getters: {
    artifactList: state => state.list
  }
};
