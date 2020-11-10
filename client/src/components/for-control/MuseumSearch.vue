<template>
  <v-autocomplete
    v-model="select"
    :loading="loading"
    :items="items"
    :search-input.sync="search"
    cache-items
    class="mx-4"
    flat
    hide-no-data
    hide-details
    clearable
    label="Buscar"
    prepend-icon="mdi-magnify"
    solo-inverted
    @keydown.enter="pushToMuseum"
  >
  </v-autocomplete>
</template>

<script>
import api from "@/api";

export default {
  name: "MuseumSearch",
  data() {
    return {
      loading: false,
      select: null,
      search: null,
      items: [],
      museums: null,
      museumsNames: null,
    }
  },
  watch: {
    search (val) {
      val && val !== this.select && this.querySelections(val)
    },
  },
  methods: {
    querySelections: function (v) {
      this.getNames()
      this.loading = true
      // Simulated ajax query
      setTimeout(() => {
        this.items = this.museumsNames.filter(e => {
          return (e || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1
        })
        this.loading = false
      }, 100)
    },
    getNames: function () {
      let namesList = []
      for (let museum of this.museums) {
        namesList.push(museum.name)
      }
      return this.museumsNames = namesList;
    },
    pushToMuseum: function() {
      let result = this.museums.find(museum => {
        return museum.name === this.select;
      })
      let finalURL = `/musaeum/${result.id}`;
      return this.$router.push(finalURL)
    }
  },
  beforeMount() {
    api.museum.getMuseumList()
      .then(response => this.museums = response.data.results);
  }
}
</script>

<style>

</style>
