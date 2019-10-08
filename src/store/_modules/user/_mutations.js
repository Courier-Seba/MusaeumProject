const mutations = {
  saveEmail(state, payload) {
    state.email = payload;
  },
  saveFirstName(state, payload) {
    state.firstName = payload;
  },
  saveLastName(state, payload) {
    state.lastName = payload;
  },
  saveUserMuseum(state, payload) {
    state.museum = payload;
  },
  saveUserMuseumArtifacts(state, payload) {
    state.museumArtifact = payload;
  },
  storeUserCollection(state, payload) {
    state.museumCollections.push(payload);
  },
  saveUserCollections(state, payload) {
    state.museumCollections = payload;
  },
  updateArtifact(state, payload) {
    for (let artifact of state.museumArtifact) {
      artifact.id === payload.id ? (artifact = payload) : null;
    }
  }
};

export default mutations;
