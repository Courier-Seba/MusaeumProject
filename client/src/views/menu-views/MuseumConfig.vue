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
            :label="$t('MuseumConfig.lang')"
            outlined
            :items="['en', 'es']"
          >
          </v-select>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "MuseumConfig",
  computed: {
    ...mapGetters(["userMuseumData"])
  }
};
</script>

<style></style>
