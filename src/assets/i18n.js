import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

const messages = {
  en: {
    welcomeMsg: "Welcome to musaeum"
  },
  es: {
    welcomeMsg: "Bienvenido a musaeum"
  }
};

export default new VueI18n({
  locale: "en",
  fallbackLocale: "es",
  messages
});
