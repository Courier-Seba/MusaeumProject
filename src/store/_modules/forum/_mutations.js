const mutations = {
  savePostList(state, payload) {
    if (payload.isArray) {
      state.postList = payload;
    }
  }
};

export default mutations;
