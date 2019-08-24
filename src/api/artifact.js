import axios from "axios";
import urls from "./urls";

export default {
  getListArtifact() {
    return axios.get(urls.ARTIFACT_URL);
  },
  getSearchListArtifact(param) {
    let searchURL = `${urls.ARTIFACT_URL}?search=${param}`;
    return axios.get(searchURL);
  }
};
