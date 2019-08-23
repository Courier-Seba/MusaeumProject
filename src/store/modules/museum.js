import museum from "../../api/museum";

export default {
  state: {
    list: []
  },
  mutations: {
    saveMuseumList: function(state, payload) {
      state.list += payload;
    }
  },
  actions: {
    getMuseumList: function({ commit }) {
      museum
        .getMuseumList()
        .then(response => commit("saveMuseumList", response.data));
    }
  }
};
