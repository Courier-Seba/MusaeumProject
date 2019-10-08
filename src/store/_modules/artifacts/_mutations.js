const mutations = {
  saveArtifactList(state, payload) {
    state.list = payload;
  },
  saveArtifact(state, payload) {
    state.list.push(payload);
  },
  saveCollection(state, payload) {
    state.collection = payload;
  }
};

export default mutations;
