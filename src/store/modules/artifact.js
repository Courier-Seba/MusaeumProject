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
      api.artifact
        .postArtifact(token, payload)
        .then(response => commit("saveArtifact", response.data.results));
    }
  },
  getters: {
    artifactList: state => state.list
  }
};
