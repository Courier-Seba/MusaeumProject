const getters = {
  userIsLogged: state => state.isLogged,
  userPk: state => state.pk,
  userJWT: state => state.jwt
};

export default getters;
