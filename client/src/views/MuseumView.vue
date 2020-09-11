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

  <v-row dense v-if="artifactList !== null" >
    <v-col v-for="artifact in artifactList" :key="artifact.id" cols="3">
      <v-card>
        <v-container>
          <v-row>
            <v-card-title @click="pushToArtifactView(artifact.id)">
              {{ artifact.name }}
            </v-card-title>
            <v-col cols="12">
              <v-carousel>
                <v-carousel-item
                  v-for="(image, id) in artifactImages(artifact.id)"
                  :key="id"
                  :src="image"
                  reverse-transition="fade-transition"
                  transition="fade-transition"
                ></v-carousel-item>
              </v-carousel>
            </v-col>
          </v-row>
        </v-container>
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
    artifactImageList: [],
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
            for (let artifact of response.data.results) {
              this.collectArtifactImages(artifact.id);
            };
        });
      })
    },
    collectArtifactImages: function(artifactId) {
      api.artifact.getArtifactImages(artifactId).then(response => {
        for (let image of response.data.results){
          this.artifactImageList.push({
            artifactId: image.artifact,
            imgSrc: image.image
          })
        }
      });
    },
    artifactImages: function(artifactId) {
      let result = []
      for (let image of this.artifactImageList) {
        if (image.artifactId == artifactId) {
          result.push(image.imgSrc);
        }
      }
      return result;
    },
    pushToArtifactView: function(id) {
      let artifactURL = "/artifact/" + id;
      this.$router.push(artifactURL).catch(() => false);
    }
  },
  beforeMount() {
    this.loading = true;
    this.collectMuseumData();
  }
};
</script>
