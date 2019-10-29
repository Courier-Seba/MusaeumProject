import Vue from "vue";
import VueI18n from "vue-i18n";
import en from "./languajes/en";
import es from "./languajes/es";
import { DEFAULT_LANG, FALLBACK_LANG } from "./languajes";

Vue.use(VueI18n);

const messages = {
  en,
  es
};

export default new VueI18n({
  locale: DEFAULT_LANG,
  fallbackLocale: FALLBACK_LANG,
  messages
});
