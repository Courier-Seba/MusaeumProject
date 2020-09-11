import Vue from "vue";
import VueI18n from "vue-i18n";
import en from "@/messages/en";
import es from "@/messages/es";

const DEFAULT_LANG = "es";
const FALLBACK_LANG = "en";

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

Vue.use(VueI18n);
