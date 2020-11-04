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
    <v-fab-transition>
      <v-btn
        elevation="2"
        fab
        large
        :outlined="!isFavorite"
        color="orange"
        class="mb-2"
        @click="setFavorite"
      >
       <v-icon v-if="isFavorite">mdi-star</v-icon>
       <v-icon v-else>mdi-star-outline</v-icon>
      </v-btn>
    </v-fab-transition>
  </v-parallax>

  <v-container>
  <v-row dense v-if="artifactList !== null" >
    <v-col v-for="artifact in artifactList" :key="artifact.id" cols="3">
      <v-card 
        @click="pushToArtifactView(artifact.id)"
        elevation="5"
        max-width="450"
        class="mx-auto"
      >
        <v-img
          :src="firstArtifactImage(artifactImages(artifact.id))"
        ></v-img>
        <v-card-title >
          {{ artifact.name }}
        </v-card-title>
      </v-card>
    </v-col>
  </v-row>
</v-container>
</div>
</template>

<script>
import api from "@/api";
import { mapGetters } from "vuex";

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
    loading: false,
    isFavorite: false
  }),
  computed: {
    ...mapGetters(["userId", "authJWT"])
  },
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
    },
    checkIfFavorite: function() {
      api.star.getStarByUserAndMuseum(this.userId, this.id)
        .then(response => {
          if (
            response.data.results[0].museum == this.id &&
            response.data.results[0].user == this.userId
          ) {
            this.isFavorite = true
          }
        });
    },
    setFavorite: function() {
      api.star.postStar(
        this.authJWT,
        {
          user: this.userId,
          museum: this.id,
          status: true // Set favorite
        }
      ).then(response => {
        response.status_code == 201 ? 
          this.isFavorite = !this.isFavorite :
          console.log("error");
      });
    },
    firstArtifactImage: function(artifactList) {
      return artifactList[0]
    }
  },
  beforeMount() {
    this.loading = true;
    this.collectMuseumData();
    this.checkIfFavorite();
  }
};
</script>
