import axios from "axios";
import urls from "./_urls";

export default {
  getForumPosts() {
    return axios.get(`${urls.FORUM_POST_URL}`);
  },
  getCommentsOfPost(id) {
    let filterURL = `${urls.COMMENT_POST_URL}?post=${id}`;
    return axios.get(filterURL);
  }
};
