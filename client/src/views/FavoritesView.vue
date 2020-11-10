<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h2 v-t="{ path: 'favoritesView.title' }"></h2>
      </v-col>
    </v-row>
    <v-row v-for="favMuseum in favorites" :key="favMuseum.museum.id">
      <v-col cols="12">
        <museum-card :id="favMuseum.id"></museum-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import api from "@/api";
import MuseumCard from "@/components/for-ui/MuseumCard";

export default {
  name: "FavoritesView",
  components: {
    MuseumCard
  },
  data() {
    return {
      favorites: []
    };
  },
  computed: {
    ...mapGetters(["userId"])
  },
  methods: {
    retriveFavs: function() {
      api.star.getStarByUser(this.userId).then(response => {
        this.favorites = response.data.results;
      });
    }
  },
  beforeMount() {
    this.retriveFavs();
  }
};
</script>
