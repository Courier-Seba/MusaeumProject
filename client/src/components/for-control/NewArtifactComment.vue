<template>
  <div class="text-center">
    <v-dialog v-model="open" width="1050" :persistent="true">
      <v-card class="general-card">
        <v-card-text>
            <v-col id="description-tags">
              <v-row>
                <v-col fluid>
                  <v-textarea
                    v-model="descriptionInput"
                    background-color="white"
                    filled
                    :label="$t('drawer.artifact.artifactComment')"
                    auto-grow
                    counter
                  ></v-textarea>
                </v-col>
              </v-row>
            </v-col>
        </v-card-text>

        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="addNewComment">
            <span
              v-t="{
                path: 'general.acceptButton'
              }"
            >
            </span>
          </v-btn>
          <v-btn color="warning" @click="closePopUp">
            <span v-t="{ path: 'general.denyButton' }"></span>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
    name: "addComment",
    props: {
        open: {
            type: Boolean
        }
    },
    method: {
    closePopUp: function() {
        this.$emit("closePopUp");
    },
    }
}
</script>

<style>

</style>