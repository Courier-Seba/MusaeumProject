const ROOT_URL = "http://localhost:8000/api/v1/";

export default {
  // Museum and artifact urls
  MUSEUM_URL: `${ROOT_URL}museum/`,
  MUSEUM_TYPE_URL: `${ROOT_URL}museum-type/`,
  ARTIFACT_URL: `${ROOT_URL}artifact/`,
  ARTIFACT_IMAGE_URL: `${ROOT_URL}artifact-image/`,

  // Auth urls
  GET_TOKEN: `${ROOT_URL}token/`,
  REFRESH_TOKEN: `${ROOT_URL}token/refresh/`,

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
