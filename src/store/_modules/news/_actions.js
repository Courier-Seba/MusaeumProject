import api from "@/api";

const actions = {
  getNews({ commit, getters }) {
    api.news.getNewsByLang(getters.siteLang).then(response => {
      commit("saveListNews", response.data.results);
    });
  }
};

export default actions;
