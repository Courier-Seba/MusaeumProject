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
    },
    saveMuseum(state, payload) {
      state.list.push(payload);
    }
  },
  actions: {
    getMuseumList({ commit }) {
      api.museum
        .getMuseumList()
        .then(response => commit("saveMuseumList", response.data.results));
    },
    postMuseum({ commit, getters }, payload) {
      let token = getters.userJWT;
      api.museum
        .postMuseum(token, payload)
        .then(response => commit("saveMuseum", response.data.results));
    }
  },
  getters: {
    museumList: state => state.list
  }
};
