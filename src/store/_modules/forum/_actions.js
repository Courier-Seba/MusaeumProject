import api from "@/api";

const actions = {
  getLastestPosts({ commit }) {
    api.forum
      .getForumPosts()
      .then(response => commit("savePostList", response.data.results));
  }
};

export default actions;
