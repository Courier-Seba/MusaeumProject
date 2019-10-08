const mutations = {
  saveMuseumList(state, payload) {
    state.list = payload;
  },
  saveMuseum(state, payload) {
    state.list.push(payload);
  },
  saveMuseumTypes(state, payload) {
    state.types = payload;
  },
  loadMuseum(state, payload) {
    state.loadedMuseum = payload;
  },
  saveMuseumCountries(state, payload) {
    state.countries = payload;
  },
  saveMuseumCollections(state, payload) {
    state.collections = payload;
  },
  saveMuseumArtifact(state, payload) {
    state.loadedMuseumArifacts = payload;
  }
};
export default mutations;
