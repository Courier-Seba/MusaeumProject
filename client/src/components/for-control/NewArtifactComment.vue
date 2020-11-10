<template>
  <div class="mx-auto">
    <v-card-text>
      <v-textarea
        :label="$t('comment.addNew')"
        clearable
        clear-icon="mdi-close-circle"
        v-model="message"
      ></v-textarea>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="accent" @click="submitComment">
        <span v-t="{ path: 'general.acceptButton' }"></span>
      </v-btn>
    </v-card-actions>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import api from "@/api";

export default {
  name: "ArtifactComments",
  props: {
    artifactId: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      message: ""
    };
  },
  computed: {
    ...mapGetters(["authUserIsLoged", "userId", "authJWT"])
  },
  methods: {
    submitComment: function() {
      api.artifact.postArtifactComment(this.authJWT, {
        artifact: this.artifactId,
        user: this.userId,
        message: this.message
      });
    }
  }
};
</script>

<style></style>
