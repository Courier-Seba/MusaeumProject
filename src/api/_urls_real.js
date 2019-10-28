const ROOT_URL = "https://api.projectmusaeum.org/v1/";

export default {
  // Museum and artifact urls
  MUSEUM_URL: `${ROOT_URL}museum/`,
  MUSEUM_TYPE_URL: `${ROOT_URL}museum-type/`,
  ARTIFACT_URL: `${ROOT_URL}artifact/`,
  MONUMENT_URL: `${ROOT_URL}monument/`,

  // Auth urls
  LOGIN_USER_URL: `${ROOT_URL}rest-auth/login/`,
  REGISTRATION_USER_URL: `${ROOT_URL}rest-auth/registration/`,
  REFRESH_TOKEN_URL: `${ROOT_URL}api-token-refresh/`,
  USER_URL: `${ROOT_URL}rest-auth/user/`,

  // Star urls
  STAR_URL: `${ROOT_URL}star/`,

  // Collection urls
  COLLECTION_URL: `${ROOT_URL}collection/`,

  // News urls
  NEWS_URLS: `${ROOT_URL}news/`,

  // Forum urls
  FORUM_POST_URL: `${ROOT_URL}forum/post/`,
  TAG_POST_URL: `${ROOT_URL}forum/tag/`,
  COMMENT_POST_URL: `${ROOT_URL}forum/comment/`
};
