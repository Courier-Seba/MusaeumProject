import axios from "axios";
import urls from "./_urls";

export default {
  getListArtifact() {
    return axios.get(urls.ARTIFACT_URL);
  },
  getSearchListArtifact(param) {
    let searchURL = `${urls.ARTIFACT_URL}?search=${param}`;
    return axios.get(searchURL);
  },
  postArtifact(token, data) {
    const axiosInstanceArtifact = axios.create({
      baseURL: urls.ARTIFACT_URL,
      headers: {
        Authorization: `JWT ${token}`,
        "content-type": "multipart/form-data"
      }
    });
    return axiosInstanceArtifact({
      method: "post",
      url: urls.ARTIFACT_URL,
      data: data
    });
  },
  getListArtifactOfCollection(collectionId) {
    let filterURL = `${urls.ARTIFACT_URL}?collection=${collectionId}`;
    return axios.get(filterURL);
  },
  getListArtifactOfMuseum(museumId) {
    let filterURL = `${urls.ARTIFACT_URL}?museum=${museumId}`;
    return axios.get(filterURL);
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
