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
      let form = new FormData();
      form.append("short_name", payload.shortName);
      form.append("complete_name", payload.completeName);
      form.append("country", payload.country);
      form.append("city", payload.city);
      form.append("administrator", payload.administrator);
      form.append("logo", payload.logo);
      form.append("front_picture", payload.frontPicture);
      form.append("museum_type", payload.museumType);
      api.museum
        .postMuseum(token, form)
        .then(response => commit("saveMuseum", response.data.results));
    }
  },
  getters: {
    museumList: state => state.list
  }
};
