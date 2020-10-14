<template>
  <v-container>
    <v-row id="artifact">
      <v-col cols="6" offset="1">
        <v-card>
          <v-carousel
            cycle
            height="600"
            hide-delimiter-background
            show-arrows-on-hover
          >
            <v-carousel-item
              v-for="(image, i) in artifactImages"
              :key="i"
              :src="image"
            >
            </v-carousel-item>
          </v-carousel>
        </v-card>
      </v-col>
      <v-col cols="3">
        <h1>{{ artifactData.name }}</h1>
        <p class="text--disbled">{{ artifactData.description }}</p>
      </v-col>
      <v-col>
        <v-btn color="accent" @click="addFavorite">
            <span v-t="{ path: 'drawer.artifact.favorite' }"></span>
        </v-btn>
      </v-col>
      <v-col>
        <v-btn color="accent" @click="addCommentDialog">
            <span v-t="{ path: 'drawer.artifact.commentAdd' }"></span>
        </v-btn>
      </v-col>
    </v-row>

    <v-row
      v-for="(comment, id) in artifactComments"
      :key="id"
    >
      <v-col cols="12">
        <v-card 
          class="info"
          max-width="500"
          outlined
        >
          <v-card-title>{{ comment.user }} dice:</v-card-title>
          <v-card-text>
            <p>{{ comment.mensaje }}</p>
          </v-card-text>

        </v-card>
      </v-col>
    </v-row>
    <new-artifact-comment
      :open="addCommentDialog"
      @closePopUp="closeCommentDialog"
    ></new-artifact-comment>
  </v-container>
</template>


<script>
import api from "@/api";
import NewArtifactComment from "@/components/for-control/NewArtifactComment";

export default {
  name: "ArtifactView",
  components: {
    NewArtifactComment,
  },
  props: {
    id: {
      required: true
    }
  },
  data() {
    return {
      artifactData: {},
      artifactImages: [],
      artifactComments: [],
      addCommentDialog: false,
    }
  },
  methods: {
    collectArtifactImages: function(artifactId) {
      api.artifact.getArtifactImages(artifactId).then(response => {
        for (let image of response.data.results) {
          this.artifactImages.push(image.image)
        }
      });
    },
    collectArtifactData: function() {
      api.artifact.getArtifactData(this.id)
        .then(response => {
          this.artifactData = response.data
          this.collectArtifactImages(this.artifactData.id)
          api.artifact.getArtifactComments(this.artifactData.id).then(response => {
            this.artifactComments = response.data.results
          })
        });
    },
  openAddComment : function(){
    this.newCommentDialog = true;
    },
  closeAddComment : function(){
    this.newCommentDialog = false;
    }
  },
  beforeMount() {
    this.collectArtifactData()
  }
}
</script>

<style>

</style>
