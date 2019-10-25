const mutations = {
  savePostList(state, payload) {
    if (Array.isArray(payload)) {
      state.postList = payload;
    }
  },
  savePost(state, payload) {
    state.postList.push(payload);
  }
};

export default mutations;
