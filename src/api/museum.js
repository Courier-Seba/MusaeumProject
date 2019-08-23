import axios from "axios";
import urls from "./urls";

export default {
  getListMuseum() {
    return axios.get(urls.MUSEUM_URL);
    },
  getSearchListMuseum(param) {
    let searchURL = `${urls.MUSEUM_URL}?search=${param}`;
    return axios.get(searchURL);
  },
};
