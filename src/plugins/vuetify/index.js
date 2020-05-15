import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "mdiSvg"
  },
  theme: {
    themes: {
      light: {
        primary: "#795548",
        secondary: "#ffc107",
        accent: "#607d8b",
        error: "#f44336",
        warning: "#ff5722",
        info: "#3f51b5",
        success: "#4caf50"
      },
      dark: {}
    }
  }
});
