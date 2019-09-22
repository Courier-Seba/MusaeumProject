import axios from "axios";

import urls from "./_urls";

export default {
  getMuseumList() {
    return axios.get(urls.MUSEUM_URL);
  },
  getSearchMuseumList(param) {
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
  },
  getMuseumOptions(token) {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `JWT ${token}`
    };
    return axios.options(urls.MUSEUM_URL, { headers: headers });
  },
  getMuseumCollections(museumId) {
    let filterURL = `${urls.COLLECTION_URL}?museum=${museumId}`;
    return axios.get(filterURL);
  },
  getMuseumByUser(userId) {
    let filterURL = `${urls.MUSEUM_URL}?administrator__id=${userId}`;
    return axios.get(filterURL);
  },
  patchMuseumInfo(token, id, data) {
    let finalURL = `${urls.MUSEUM_URL}${id}/`;
    const axiosInstanceMuseum = axios.create({
      headers: {
        Authorization: `JWT ${token}`,
        "content-type": "application/json"
      }
    });
    return axiosInstanceMuseum({
      method: "patch",
      url: finalURL,
      data: data
    });
  }
};
