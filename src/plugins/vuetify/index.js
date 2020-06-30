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
        primary: "#673ab7",
        secondary: "#e91e63",
        accent: "#2196f3",
        error: "#f44336",
        warning: "#ff5722",
        info: "#00bcd4",
        success: "#4caf50"
      },
      dark: {}
    }
  }
});
