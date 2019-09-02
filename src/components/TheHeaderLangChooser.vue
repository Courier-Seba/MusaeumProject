<template>
  <b-dropdown aria-role="list">
    <b-button slot="trigger" size="is-small" type="is-info">
      <span class="has-text-black">{{ currentLang }}</span>
    </b-button>
    <b-dropdown-item
      v-for="(lang, i) in languajes"
      :key="i"
      @click="changeLocale(lang)"
      aria-role="listitem"
    >
      <span>{{ lang }}</span>
    </b-dropdown-item>
  </b-dropdown>
</template>

<script>
import i18n from "@/assets/i18n";
import { DEFAULT_LANG, FALLBACK_LANG } from "@/assets/languages";
export default {
  name: "TheHeaderLangChooser",
  data() {
    return {
      currentLang: DEFAULT_LANG,
      languajes: [DEFAULT_LANG, FALLBACK_LANG]
    };
  },
  methods: {
    changeLocale(locale) {
      i18n.locale = locale;
      this.currentLang = locale;
    }
  }
};
</script>
