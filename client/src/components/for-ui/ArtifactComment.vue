<template>
  <v-card 
    class="info"
    max-width="500"
    outlined
  >
    <v-card-title>{{ username }} dice: </v-card-title>
    <v-card-text>
      <p>{{ message }}</p>
    </v-card-text>
  </v-card>
</template>

<script>
import api from "@/api";

export default {
  name: "ArtifactComment",
  props: {
    user: String,
    message: String,
  },
  data() {
    return {
      username: "Anon"
    }
  },
  beforeMount() {
    api.user.getUsername(this.user).then(response => 
      this.username = response.data.username
    )
  }
}
</script>

<style>

</style>
