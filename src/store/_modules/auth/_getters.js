const getters = {
  userIsLogged: state => state.isLogged,
  userName: state => state.userName,
  userPk: state => state.pk,
  userJWT: state => state.jwt
};

export default getters;
