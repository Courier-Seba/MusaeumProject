import api from "../../api";

export default {
  state: {
    list: [], // Museum list
    types: [], // Types of Museums
    loadedMuseum: {}, // Detail data of a museum
    collections: [], // Loaded museum collections
    countries: [] // Museum countries
  },
  mutations: {
    saveMuseumList(state, payload) {
      for (let museum of payload) {
        state.list.push(museum);
      }
    },
    saveMuseum(state, payload) {
      state.list.push(payload);
    },
    saveMuseumTypes(state, payload) {
      state.types = payload;
    },
    loadMuseum(state, payload) {
      state.loadedMuseum = payload;
    },
    saveMuseumCountries(state, payload) {
      state.countries = payload;
    },
    saveMuseumCollections(state, payload) {
      state.collections = payload;
    }
  },

  actions: {
    getMuseumList({ commit }) {
      api.museum
        .getMuseumList()
        .then(response => commit("saveMuseumList", response.data.results));
    },
    getMuseumData({ commit }, payload) {
      api.museum
        .getMuseumDetails(payload)
        .then(response => commit("loadMuseum", response.data));
    },
    getMuseumTypeList({ commit }) {
      api.museum
        .getMuseumTypeList()
        .then(response => commit("saveMuseumTypes", response.data.results));
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
      api.museum.postMuseum(token, form).then(response => {
        commit("saveMuseum", response.data);
        commit("saveUserMuseum", response.data.id);
      });
    },
    getMuseumCountries({ commit, getters }) {
      let token = getters.userJWT;
      api.museum.getMuseumOptions(token).then(response => {
        commit(
          "saveMuseumCountries",
          response.data.actions.POST.country.choices
        );
      });
    },
    getMuseumCollections({ commit }, payload) {
      api.museum
        .getMuseumCollections(payload)
        .then(response =>
          commit("saveMuseumCollections", response.data.results)
        );
    }
  },
  getters: {
    museumList: state => state.list,
    museumTypes: state => state.types,
    museumDetail: state => state.loadedMuseum,
    museumCollections: state => state.collections,
    museumCountries: state => state.countries
  }
};
