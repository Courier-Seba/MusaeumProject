const getters = {
  userName: state => state.userName,
  userEmail: state => state.email,
  userFirstName: state => state.firstName,
  userLastName: state => state.lastName,
  userProfile: state => state.userData,
  userMuseum: state => state.museum,
  userMuseumArtifacts: state => state.museumArtifact,
  userMuseumCollections: state => state.museumCollections
};

export default getters;
