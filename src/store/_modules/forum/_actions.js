import api from "@/api";

const actions = {
  getLastestPosts() {
    api.post.getForumPosts()
  }
}

export default actions;
