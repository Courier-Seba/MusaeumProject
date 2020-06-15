const getters = {
  authUserIsLoged: state => state.isLogged,
  authJWT: state => state.jwt,
  authRefreshToken: state => state.refreshJwt
};

export default getters;
