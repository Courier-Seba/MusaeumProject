const getters = {
  userName: state => state.userName,
  userEmail: state => state.email,
  userFirstName: state => state.firstName,
  userLastName: state => state.lastName,
  userProfile: state => state.userProfile,
  userMuseum: state => state.museum,
  userMuseumArtifacts: state => state.museumArtifact,
  userMuseumCollections: state => state.museumCollections,
  userAvatarUrl: state => state.userAvatarUrl
};

export default getters;
