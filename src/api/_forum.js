import axios from "axios";
import urls from "./_urls";

export default {
  getForumPosts() {
    return axios.get(`${urls.FORUM_POST_URL}`);
  },
  getMdFile(mdUrl) {
    return axios.get(mdUrl);
  }
};
