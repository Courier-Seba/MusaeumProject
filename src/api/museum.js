import axios from "axios";
import urls from "./urls";

export default {
  getMuseumList() {
    return axios.get(urls.MUSEUM_URL);
  },
  getSearchListMuseum(param) {
    let searchURL = `${urls.MUSEUM_URL}?search=${param}`;
    return axios.get(searchURL);
  },
  getMuseumTypeList() {
    return axios.get(urls.MUSEUM_TYPE_URL);
  },
  getMuseumDetails(id) {
    let detailURL = `${urls.MUSEUM_URL}${id}`;
    return axios.get(detailURL);
  },
  postMuseum(token, data) {
    const axiosInstanceMuseum = axios.create({
      baseURL: urls.MUSEUM_URL,
      headers: {
        Authorization: `JWT ${token}`,
        "content-type": "multipart/form-data"
      }
    });
    return axiosInstanceMuseum({
      method: "post",
      url: urls.MUSEUM_URL,
      data: data
    });
  }
};
