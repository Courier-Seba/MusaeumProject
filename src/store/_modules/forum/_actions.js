import api from "@/api";

const actions = {
  getLastestPosts({ commit }) {
    api.forum
      .getForumPosts()
      .then(response => commit("savePostList", response.data.results));
  },
  postForumComment({ commit, getters }, payload) {
    if (payload.hasOwnProperty("content") && payload.hasOwnProperty("post")) {
      if (payload.hasOwnProperty("owner") && payload.owner === getters.userPk) {
        api.forum
          .postComment(getters.userJWT, payload)
          .then(response => {
            commit("savePost", response.data);
            return true;
          })
          .catch(() => {
            return false;
          });
      } else {
        return false;
      }
    }
  }
};

export default actions;
