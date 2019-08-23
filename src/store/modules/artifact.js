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
    }
  },
  actions: {
    getArtifactList({ commit }) {
      api.artifact
        .getListArtifact()
        .then(response => commit("saveArtifactList", response.data.results));
    }
  },
  getters: {
    artifactList: state => state.list
  }
};
