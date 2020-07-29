<template>
  <div class="text-center">
    <v-dialog v-model="open" width="1050" :persistent="true">
      <v-card class="general-card">
        <v-card-title
          class="headline grey lighten-2"
          primary-title
          background-color="white"
        >
          <v-text-field
            v-model="titleInput"
            :label="$t('drawer.artifact.artifactName')"
            :hint="$t('drawer.artifact.artifactNameHint')"
            :rules="[rules.required]"
          >
          </v-text-field>
        </v-card-title>

        <v-card-text>
          <v-row id="container">
            <v-col id="image-upload" cols="7" align-self="end">
              <v-row>
                <v-col v-if="imageInputUrl != null">
                  <v-img :src="imageInputUrl"></v-img>
                </v-col>
                <v-col>
                  <v-file-input
                    v-model="imageInput"
                    accept="image/png, image/jpeg, image/bmp"
                    prepend-icon="mdi-camera"
                    hide-input
                  ></v-file-input>
                </v-col>
              </v-row>
            </v-col>

            <v-col id="description-tags">
              <v-row>
                <v-col fluid>
                  <v-textarea
                    v-model="descriptionInput"
                    background-color="white"
                    filled
                    :label="$t('drawer.artifact.artifactDescription')"
                    auto-grow
                    counter
                    :rules="[rules.required]"
                  ></v-textarea>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-autocomplete
                    :label="$t('drawer.artifact.artifactTag')"
                  ></v-autocomplete>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-card-text>

        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="uploadNewArtifact">
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
import { mapActions } from "vuex";

export default {
  name: "NewArtifact",
  props: {
    open: {
      type: Boolean
    }
  },
  data() {
    return {
      rules: {
        required: value => !!value || this.$t("general.requiredItem")
      },
      titleInput: "",
      descriptionInput: "",
      imageInput: null,
      tagsInput: []
    };
  },
  computed: {
    imageInputUrl() {
      if (this.imageInput !== null) {
        return URL.createObjectURL(this.imageInput);
      } else {
        return null;
      }
    }
  },
  methods: {
    ...mapActions(["postArtifact"]),
    closePopUp: function() {
      this.$emit("closePopUp");
    },
    uploadNewArtifact: function() {
      let data = {
        name: this.titleInput,
        description: this.descriptionInput,
        picture: this.imageInput
      };
      this.postArtifact(data);
    }
  }
};
</script>
