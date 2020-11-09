const checkIfNullData = (obj) => {
  return obj === null
}

const getters = {
  userId: state => state.userId,
  userName: state =>  state.userName,
  userEmail: state => state.userEmail,
  userFirstName: state => state.firstName,
  userLastName: state => state.userLastName,
  userProfile: state => state.userProfile,
  userMuseumData: state => state.userMuseumData,
  userMuseumId: state => state.userMuseumId,
  userAvatarUrl: state => checkIfNullData(state.userProfile) ? null : state.userProfile.profile_picture,
  userArtifacts: state => state.userArtifacts,
  userLastArtifact: state => state.userArtifacts[state.userArtifacts.length - 1],
};

export default getters;
