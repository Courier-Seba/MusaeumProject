import Vue from "vue";
import VueI18n from "vue-i18n";
import { DEFAULT_LANG, FALLBACK_LANG } from "./languages";
import en from "./translations/en";
import es from "./translations/es";

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
