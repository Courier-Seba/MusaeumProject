<template>
  <v-container>
    <v-card class="mx-auto" max-width="100%">
      <v-toolbar color="indigo" dark>
        <v-toolbar-title v-t="{ path: 'mymuseum.general' }"></v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon disabled>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </v-toolbar>

      <v-container fluid>
        <v-row dense>
          <v-col v-for="artifact in artifactList" :key="artifact.id">
            <v-card>
              <v-img
                :src="artifact.picture"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="200px"
              >
                <v-card-title v-text="artifact.name"></v-card-title>
              </v-img>

              <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn icon>
                  <v-icon>mdi-heart</v-icon>
                </v-btn>

                <v-btn icon>
                  <v-icon>mdi-bookmark</v-icon>
                </v-btn>

                <v-btn icon>
                  <v-icon>mdi-share-variant</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  name: "MuseumView",
  props: {
    id: {
      required: true
    }
  },

  data: () => ({
    museumData: null,
    artifactList: null
  }),

  methods: {
    collectUserMuseum: function() {
      let url = "http://localhost:8000/api/v1/museum/" + this.id + "/";
      axios.get(url).then(response => {
        this.museumData = response.data;
        axios
          .get(
            "http://localhost:8000/api/v1/artifact/?collection=&museum__id=1"
          )
          .then(response => (this.artifactList = response.data.results));
      });
    }
  },
  created() {
    this.collectUserMuseum();
  }
};
</script>
