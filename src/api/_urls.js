const ROOT_URL = "http://localhost:8000/v1/";

export default {
  // Museum and artifact urls
  MUSEUM_URL: `${ROOT_URL}museum/`,
  MUSEUM_TYPE_URL: `${ROOT_URL}museum-type/`,
  ARTIFACT_URL: `${ROOT_URL}artifact/`,
  MONUMENT_URL: `${ROOT_URL}monument/`,

  // Auth urls
  LOGIN_USER_URL: `${ROOT_URL}rest-auth/login/`,
  REGISTRATION_USER_URL: `${ROOT_URL}rest-auth/registration/`,

  // Star urls
  STAR_URL: `${ROOT_URL}star/`,

  // Collection urls
  COLLECTION_URL: `${ROOT_URL}collection/`
};
