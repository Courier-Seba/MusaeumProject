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
  }
};
