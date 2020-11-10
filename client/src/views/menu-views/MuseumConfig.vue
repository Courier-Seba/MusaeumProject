<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="10">
          <h2
            class="h2 underline"
            v-t="{ path: 'MuseumConfig.titleMuseum' }"
          ></h2>
        </v-col>
        <v-col>
          <p class="text--disabled">Museum ID: {{ userMuseumData.id }}</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="3">
          <p v-t="{ path: 'MuseumConfig.name' }"></p>
        </v-col>
        <v-col>
          <v-text-field :label="userMuseumData.name" solo> </v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="3">
          <p v-t="{ path: 'MuseumConfig.type' }"></p>
        </v-col>
        <v-col>
          <v-text-field :label="userMuseumData.museum_type" solo>
          </v-text-field>
        </v-col>
      </v-row>
    </v-container>

    <v-container>
      <v-row>
        <v-col cols="10">
          <h2 class="h2 underline" v-t="{ path: 'MuseumConfig.titleApp' }"></h2>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="3">
          <p v-t="{ path: 'MuseumConfig.lang' }"></p>
        </v-col>
        <v-col cols="2">
          <v-select
            v-model="lang"
            :label="$t('MuseumConfig.lang')"
            outlined
            :items="['en', 'es']"
          >
          </v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2">
          <p v-t="{ path: 'MuseumConfig.theme' }"></p>
        </v-col>
        <v-col cols="2">
          <v-checkbox
            v-model="darkTheme"
          ></v-checkbox>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import internationalization from "@/plugins/i18n";

export default {
  name: "MuseumConfig",
  data() {
    return {
      lang: null,
      darkTheme: false
    }
  },
  computed: {
    ...mapGetters(["userMuseumData"]),
  },
  watch: {
    darkTheme: function(val) {
      this.$vuetify.theme.dark = val
    },
    lang: function() {
      this.changeLanguage()
    }
  },
  methods: {
    changeLanguage: function() {
      if (internationalization.locale == "en") {
        return (internationalization.locale = "es");
      } else {
        return (internationalization.locale = "en");
      }
    }
  }
};
</script>

<style></style>
