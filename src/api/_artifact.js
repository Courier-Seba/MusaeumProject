import axios from "axios";
import urls from "./_urls";

export default {
  getListArtifact() {
    return axios.get(urls.ARTIFACT_URL);
  },
  getArtifactData(artifactId) {
    let searchURL = `${urls.ARTIFACT_URL}${artifactId}`;
    return axios.get(searchURL);
  },
  getListArtifactOfCollection(collectionId) {
    let filterURL = `${urls.ARTIFACT_URL}?collection=${collectionId}`;
    return axios.get(filterURL);
  },
  getListArtifactOfMuseum(museumId) {
    let filterURL = `${urls.ARTIFACT_URL}?museum__id=${museumId}`;
    return axios.get(filterURL);
  },
  getArtifactImages(artifactId) {
    let filterURL = `${urls.ARTIFACT_IMAGE_URL}?artifact=${artifactId}`;
    return axios.get(filterURL);
  },
  getArtifactComments(artifactId) {
    let filterURL = `${urls.ARTIFACT_COMMENT_URL}?artifact=${artifactId}`;
    return axios.get(filterURL);
  },


  postArtifact(token, data) {
    const axiosInstanceArtifact = axios.create({
      baseURL: urls.ARTIFACT_URL,
      headers: {
        Authorization: `Bearer ${token}`,
      }
    });
    return axiosInstanceArtifact({
      method: "post",
      url: urls.ARTIFACT_URL,
      data: data
    });
  },
  postArtifactImage(token, data) {
    const axiosInstanceArtifactImage = axios.create({
      baseURL: urls.ARTIFACT_URL,
      headers: {
        Authorization: `Bearer ${token}`,
        "content-type": "multipart/form-data"
      }
    });
    return axiosInstanceArtifactImage({
      method: "post",
      url: urls.ARTIFACT_IMAGE_URL,
      data: data
    });
  },
  patchArtifact(token, artifactId, data) {
    let finalURL = `${urls.ARTIFACT_URL}${artifactId}/`;
    const axiosInstanceArtifact = axios.create({
      headers: {
        Authorization: `JWT ${token}`,
        "content-type": "multipart/form-data"
      }
    });
    return axiosInstanceArtifact({
      method: "patch",
      url: finalURL,
      data: data
    });
  }
};
