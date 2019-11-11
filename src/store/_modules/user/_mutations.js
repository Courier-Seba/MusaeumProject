const mutations = {
  saveUserName(state, payload) {
    state.userName = payload;
  },
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
  saveUserMuseumArtifact(state, payload) {
    state.museumArtifact.push(payload);
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
  },
  saveUserData(state, payload) {
    state.userData = payload;
  }
};

export default mutations;
