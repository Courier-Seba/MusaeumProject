const getters = {
  userId: state => state.userId,
  userName: state => state.userName,
  userEmail: state => state.userEmail,
  userFirstName: state => state.firstName,
  userLastName: state => state.userLastName,
  userProfile: state => state.userProfile,
  userMuseumId: state => state.userMuseum,
  userMuseumData: state => state.userMuseumData,
  userAvatarUrl: state => state.userAvatarUrl,
  userArtifacts: state => state.userArtifacts,
  userLastArtifact: state => state.userArtifacts[state.userArtifacts.length - 1],
};

export default getters;
