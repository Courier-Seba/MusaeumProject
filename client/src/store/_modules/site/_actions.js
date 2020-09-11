const actions = {
  changeLang({ commit }, payload) {
    commit("storeLang", payload);
  }
};

export default actions;
