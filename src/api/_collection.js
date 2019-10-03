import axios from "axios";
import urls from "./_urls";

export default {
  postCollection(token, data) {
    const axiosInstanceCollection = axios.create({
      baseURL: urls.COLLECTION_URL,
      headers: {
        Authorization: `JWT ${token}`
      }
    });
    return axiosInstanceCollection({
      method: "post",
      data: data
    });
  },
  getListCollectionByMuseum(museumId) {
    let filterURL = `${urls.COLLECTION_URL}?museum=${museumId}`;
    return axios.get(filterURL);
  }
};
