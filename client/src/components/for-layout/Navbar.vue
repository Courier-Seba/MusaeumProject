<template>
<v-app-bar app color="primary lighten-1">
  <v-img
    class="mx-2"
    src="/favicon.ico"
    contain
    max-height="40"
    max-width="40"
  ></v-img>
  <v-toolbar-title>MUSAEUM</v-toolbar-title>
  <v-spacer></v-spacer>
  <v-btn
    fab
    dark
    small
    color="info"
    @click.stop="changeLanguage"
  >
    {{ usedLanguage }}
  </v-btn>
</v-app-bar>
</template>

<script>
import internationalization from "@/plugins/i18n"

export default {
  name: "Navbar",
  computed: {
    usedLanguage() {
      return internationalization.locale
    }
  },
  methods: {
    changeLanguage: function () {
      if (internationalization.locale == "en") {
        return internationalization.locale = "es"
      } else {
        return internationalization.locale = "en"
      }
    }
  }

}
</script>

<style>

</style>

