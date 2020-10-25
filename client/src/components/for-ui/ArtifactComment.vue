<template>
  <v-card 
    class="info"
    max-width="500"
    outlined
  >
    <v-card-title>{{ user }} dice: </v-card-title>
    <v-card-text>
      <p>{{ message }}</p>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "ArtifactComment",
  props: {
    username: String,
    message: String
  }
}
</script>

<style>

</style>
