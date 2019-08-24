import api from "../../api";

export default {
  state: {
    list: []
  },
  mutations: {
    saveMuseumList(state, payload) {
      for (let museum of payload) {
        state.list.push(museum);
      }
    }
  },
  actions: {
    getMuseumList({ commit }) {
      api.museum
        .getMuseumList()
        .then(response => commit("saveMuseumList", response.data.results));
    }
  },
  getters: {
    museumList: state => state.list
  }
};
