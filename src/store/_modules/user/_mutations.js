const mutations = {
  saveId(state, payload) {
    state.userId = payload;
  },
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
    state.userMuseum = payload;
  },
  saveUserMuseumArtifacts(state, payload) {
    state.userArtifacts = payload;
  },
  saveUserMuseumArtifact(state, payload) {
    state.userArtifacts.push(payload);
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
  saveUserProfile(state, payload) {
    state.userProfile = payload;
  }
};

export default mutations;
