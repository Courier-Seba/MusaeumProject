<template>
  <v-card class="mx-auto" outlined shaped>
    <v-card-title>
      <v-icon large left>
        mdi-account
      </v-icon>
      <span class="title font-weight-light">{{ username }}:</span>
    </v-card-title>
    <v-card-text class="font-weight-bold">
      {{ message }}
    </v-card-text>
  </v-card>
</template>

<script>
import api from "@/api";

export default {
  name: "ArtifactComment",
  props: {
    user: String,
    message: String
  },
  data() {
    return {
      username: "Anon",
      picture: null
    };
  },
  beforeMount() {
    api.user.getUsername(this.user).then(response => {
      this.username = response.data.username;
      api.user
        .getUserProfileData(this.user)
        .then(response => (this.picture = response.data.picture));
    });
  }
};
</script>

<style></style>
