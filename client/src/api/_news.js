import axios from "axios";
import urls from "./_urls.js";

export default {
  getNewsByLang(lang) {
    let filterURL = `${urls.NEWS_URLS}?lang=${lang}`;
    return axios.get(filterURL);
  }
};
