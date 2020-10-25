<template>
    <div>
        <div>
            <v-card-title v-t="{ path: 'comment.title' }"> </v-card-title>
            <v-card-text>
              <v-textarea :label="$t('comment.addNew')"> </v-textarea>
            </v-card-text>
            <v-card-actions>
              <v-btn color="accent" @click="submitComment">
                <span v-t="{ path: 'general.acceptButton' }"></span>
              </v-btn>
              <v-divider class="mx-4" vertical></v-divider>
              <v-btn color="warning" @click="cancelComment">
                <span v-t="{ path: 'general.denyButton' }"></span>
              </v-btn>
          </v-card-actions>
        </div>
    </div>
</template>

<script>
import { mapGetters} from "vuex";

export default {
  name: "ArtifactComments",
  computed: {
    ...mapGetters(["authUserIsLoged","userId"])
  },
  methods: {
    cancelComment: function() {
      let pathUserMuseum = "/musaeum/" + this.userId;
      this.$router.push(pathUserMuseum);
    },
  },
}
</script>

<style></style>