<template>
  <v-container>
    <v-row>
      <v-col cols="3">
        <p v-t="{path: 'MuseumConfig.name'}"></p>
      </v-col>
      <v-col>
        <v-text-field
          :label="userMuseumData.name"
          solo
        >
        </v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "MuseumConfig",
  computed: {
    ...mapGetters(["userMuseumData"])
  }

}
</script>

<style>

</style>
