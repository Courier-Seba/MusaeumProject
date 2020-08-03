<template>
<div>
  <v-overlay :value="loading" absolute>
    <v-progress-circular
      :size="70"
      :width="7"
      color="purple"
      indeterminate
    ></v-progress-circular>
  </v-overlay>

  <v-parallax
    v-if="museumData.front_picture !== null"
    :src="museumData.front_picture"
    height="300"
  >
    <v-row align="center" justify="center">
      <v-col class="text-center" cols="12">
        <h1 class="display-1 font-weight-thin mb-4">{{ museumData.name }}</h1>
        <h2 class="subheading">{{ museumData.country }} {{ museumData.city }}</h2>
      </v-col>
    </v-row>
  </v-parallax>

  <v-container>
  <v-row>
  </v-row>

  <v-row dense>
    <v-col v-for="artifact in artifactList" :key="artifact.id">
      <v-card>
      </v-card>
    </v-col>
  </v-row>
</v-container>
</div>
</template>

<script>
import api from "@/api"
export default {
  name: "MuseumView",
  props: {
    id: {
      required: true
    }
  },
  data: () => ({
    museumData: {
      name: "",
      front_picture: null,
      country: "",
      city: "",
    },
    artifactList: null,
    loading: false
  }),
  methods: {
    collectMuseumData: function() {
      api.museum.getMuseumData(this.id).then(response => {
        this.museumData = response.data
        api.artifact.getListArtifactOfMuseum(this.id)
          .then(response => {
            this.artifactList = response.data.results;
            this.loading = false;
        });
      })
    }
  },
  beforeMount() {
    this.loading = true;
    this.collectMuseumData();
  }
};
</script>
