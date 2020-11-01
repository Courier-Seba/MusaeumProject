<template>
  <div class="mx-auto">
    <v-card-text>
      <v-textarea :label="$t('comment.addNew')"> </v-textarea>
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
import { mapGetters} from "vuex";

export default {
  name: "ArtifactComments",
  computed: {
    ...mapGetters(["authUserIsLoged","userId"])
  },

}
</script>

<style></style>
