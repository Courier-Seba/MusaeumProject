import api from "@/api";
const actions = {
  getMuseumList({ commit }) {
    api.museum
      .getMuseumList()
      .then(response => commit("saveMuseumList", response.data.results));
  },
  getSearchMuseumList({ commit }, payload) {
    api.museum
      .getSearchMuseumList(payload)
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
      commit("saveMuseumCountries", response.data.actions.POST.country.choices);
    });
  },
  getMuseumCollections({ commit }, payload) {
    api.museum
      .getMuseumCollections(payload)
      .then(response => commit("saveMuseumCollections", response.data.results));
  },
  getMuseumArtifacts({ commit }, payload) {
    api.artifact
      .getListArtifactOfMuseum(payload)
      .then(response => commit("saveMuseumArtifact", response.data.results));
  }
};
export default actions;
