import api from "@/api";

const actions = {
  getNews({ commit }) {
    api.news.getNewsByLang("ES").then(response => {
      commit("saveListNews", response.data.results);
    });
  }
};

export default actions;
