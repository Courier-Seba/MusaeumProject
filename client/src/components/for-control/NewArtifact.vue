<template>
  <div class="text-center">
    <v-dialog v-model="open" width="1050" :persistent="true">
      <v-stepper v-model="step">
        <v-stepper-header>
          <v-stepper-step
            :complete="step > 1"
            step="1"
          >
            Informacion
          </v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step
            :complete="step > 2"
            step="2"
          >
            Imagenes
          </v-stepper-step>
        </v-stepper-header>

        <v-stepper-items>
          <v-stepper-content step="1">
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
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
          <v-spacer></v-spacer>
          <v-card-actions>
            <v-btn color="primary" @click="toStepTwo">
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

          </v-stepper-content>
          <v-stepper-content step="2">
            <v-card>
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
              </v-row>
              </v-card-text>
              <v-spacer></v-spacer>
              <v-card-actions>
                <v-btn color="primary" @click="uploadImage">
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
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </v-dialog>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

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
      step: 1
    };
  },
  computed: {
    ...mapGetters(["userLastArtifact"]),
    imageInputUrl() {
      if (this.imageInput !== null) {
        return URL.createObjectURL(this.imageInput);
      } else {
        return null;
      }
    }
  },
  methods: {
    ...mapActions(["postArtifact", "postArtifactImage"]),
    closePopUp: function() {
      this.$emit("closePopUp");
    },
    error: function() {
      return null
    },
    uploadNewArtifact: function() {
      if (this.imageInput !== null) {
        let data = {
          name: this.titleInput,
          description: this.descriptionInput,
          image: this.imageInput
        };
        this.postArtifact(data).then(() => {
          this.closePopUp()
        });
      } else {
        let data = {}
        this.postArtifact(data).then(() => {
          this.closePopUp()
        });
      }
    },
    toStepTwo: function() {
        let data = {
          name: this.titleInput,
          description: this.descriptionInput,
        };
        this.postArtifact(data).then(result => {
          result ? this.step = 2 : this.closePopUp();
        });
    },
    uploadImage: function () {
      let data = {
        artifact: this.userLastArtifact.id,
        image: this.imageInput
      };
      this.postArtifactImage(data).then(result => {
        result ? this.closePopUp() : console.log("ERROR");
      })

    }
  }
};
</script>
