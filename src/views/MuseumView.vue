<template>
  <v-container fluid>
    <v-overlay :value="loading" absolute>
    <v-progress-circular
      :size="70"
      :width="7"
      color="purple"
      indeterminate
    ></v-progress-circular>
  </v-overlay>
  <v-row dense>
    <v-col v-for="artifact in artifactList" :key="artifact.id">
      <v-card>
      </v-card>
    </v-col>
  </v-row>
</v-container>
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
  museumData: null,
  artifactList: null,
  loading: false
}),

methods: {
  collectUserMuseum: function() {
    api.artifact.getListArtifactOfMuseum(this.id)
      .then(response => {
        this.artifactList = response.data.results;
        this.loading = false;
      });
    }
  },
  created() {
    this.loading = true;
    this.collectUserMuseum();
  }
};
</script>
