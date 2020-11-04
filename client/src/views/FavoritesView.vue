<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h2 v-t="{ path: 'favoritesView.title' }"></h2>
      </v-col>
    </v-row>
    <v-row v-for="(museum, id) in favorites" :key="id">
      <v-col cols="12">{{ museum.id }}</v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import api from "@/api";


export default {
  name: "FavoritesView",
  computed: {
    ...mapGetters(["userId"])
  },
  data() {
    return {
      favorites: []
    }
  },
  methods: {
    retriveFavs: function () {
      api.star.getStarByUser(this.userId)
        .then(response => {
          this.favorites = response.data.results
        })
    }
  },
  beforeMount() {
    this.retriveFavs()
  }
}
</script>
