const getters = {
  userProfileInfo: state => state.userData,
  userMuseum: state => state.museum,
  userMuseumArtifacts: state => state.museumArtifact,
  userMuseumCollections: state => state.museumCollections
};

export default getters;
