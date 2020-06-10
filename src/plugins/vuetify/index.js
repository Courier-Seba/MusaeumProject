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
          primary: "#9c27b0",
          secondary: "#3f51b5",
          accent: "975BFF",
          error: "#f44336",
          warning: "#ff5722",
          info: "#03a9f4",
          success: "#8bc34a"
      },
      dark: {}
    }
  }
});
