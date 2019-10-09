Language chooser of the header.
<template>
  <figure class="image is-16x16" @click="changeLocale()">
    <img :src="flag" alt="" />
  </figure>
</template>

<script>
const ES_FLAG = "/assets/flags/spain-flag.png";
const US_FLAG = "/assets/flags/united-states-flag.png";
import { mapGetters, mapActions } from "vuex";
import i18n from "@/plugins/i18n";
import { DEFAULT_LANG, FALLBACK_LANG } from "@/plugins/languages";

export default {
  name: "TheHeaderLangChooser",
  data() {
    return {
      currentLang: DEFAULT_LANG,
      languajes: [DEFAULT_LANG, FALLBACK_LANG],
      flag: ES_FLAG
    };
  },
  computed: {
    ...mapGetters(["siteLang"])
  },
  methods: {
    ...mapActions(["changeLang"]),
    changeLocale() {
      if (this.currentLang === DEFAULT_LANG) {
        this.currentLang = FALLBACK_LANG;
        i18n.locale = FALLBACK_LANG;
        this.flag = US_FLAG;
        this.changeLang(FALLBACK_LANG);
      } else {
        this.currentLang = DEFAULT_LANG;
        i18n.locale = DEFAULT_LANG;
        this.flag = ES_FLAG;
        this.changeLang(DEFAULT_LANG);
      }
    }
  },
  created() {
    this.changeLang(DEFAULT_LANG);
  }
};
</script>
