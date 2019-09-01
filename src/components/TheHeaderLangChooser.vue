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
export default {
  name: "TheHeaderLangChooser",
  data() {
    return {
      currentLang: "EN",
      languajes: ["EN", "ES"]
    };
  },
  methods: {
    changeLocale(locale) {
      i18n.locale = locale;
    }
  }
};
</script>
