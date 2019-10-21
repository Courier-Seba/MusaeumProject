const mutations = {
  savePostList(state, payload) {
    if (Array.isArray(payload)) {
      state.postList = payload;
    }
  }
};

export default mutations;
