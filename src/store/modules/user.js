import api from "@/api";

export default {
  state: {
    userName: "",
    email: "",
    firstName: "",
    lastName: "",
    pk: 0,
    jwt: ""
  },
  mutations: {
    saveUserName(state, payload) {
      state.userName = payload;
    },
    saveEmail(state, payload) {
      state.email = payload;
    },
    saveFirstName(state, payload) {
      state.firstName = payload;
    },
    saveLastName(state, payload) {
      state.lastName = payload;
    },
    savePK(state, payload) {
      state.pk = payload;
    },
    saveJWT(state, payload) {
      state.jwt = payload;
    }
  },
  actions: {
    postLoginCredentials({ commit }, payload) {
      api.user
        .postLoginCredentials(payload.userName, payload.password)
        .then(response => {
          commit("saveJWT", response.data.token);
          commit("savePK", response.data.user.pk);
          commit("saveUserName", response.data.user.username);
          commit("saveEmail", response.data.user.email);
          commit("saveFirstName", response.data.user.first_name);
          commit("saveLastName", response.data.user.last_name);
        });
    }
  }
};
