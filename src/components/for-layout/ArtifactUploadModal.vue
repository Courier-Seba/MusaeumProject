Upload artifact modal. Simple modal with basic form to upload an artifact.
<template>
  <b-modal :active.sync="isModalActive" scroll="keep" :on-cancel="close">
    <div class="card">
      <section class="card-content">
        <div class="columns is-multiline">
          <div class="column is-full">
            <b-field label="Name">
              <b-input v-model="name" type="text" required></b-input>
            </b-field>
            <b-field horizontal label="Description">
              <b-input v-model="description" required type="textarea"></b-input>
            </b-field>
          </div>
          <div class="column">
            <b-field label="External reference">
              <b-input v-model="externalReference" type="url"></b-input>
            </b-field>
          </div>
        </div>
        <div class="column">
          <div class="field">
            <div class="file is-primary">
              <label class="file-label">
                <input
                  class="file-input"
                  type="file"
                  name="resume"
                  @change="onFileChange"
                  required
                />
                <div v-if="picture" class="card-image">
                  <figure class="image is-128x128">
                    <img :src="pictureInternalURL" alt="/assets/error.png" />
                  </figure>
                </div>
                <span class="file-cta" v-else>
                  <span class="file-label">
                    Choose File!
                  </span>
                </span>
              </label>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="buttons is-grouped is-right">
            <b-button type="is-success" @click="uploadArtifact">Upload!</b-button>
            <b-button type="is-danger" @click="close">Cancel</b-button>
          </div>
        </div>
      </section>
    </div>
  </b-modal>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "ArtifactUploadModal",
  data() {
    return {
      name: "",
      description: "",
      externalReference: "",
      picture: null,
      pictureInternalURL: null
    };
  },
  props: {
    isModalActive: Boolean,
    museum: Number,
    registrator: Number
  },
  methods: {
    ...mapActions(["postArtifact"]),
    onFileChange: function(e) {
      this.picture = e.target.files[0];
      this.pictureInternalURL = URL.createObjectURL(this.picture);
    },
    clearData: function() {
      this.name = "";
      this.description = "";
      this.url = null;
    },
    close: function() {
      this.$emit("closeModal");
    },
    uploadArtifact: function() {
      let artifactData = {
        name: this.name,
        description: this.description,
        registrator: this.registrator,
        picture: this.picture,
        museum: this.museum,
        externalReference: this.externalReference
      };
      this.postArtifact(artifactData);
    }
  }
};
</script>

<style>
.card-foot {
  padding: 3px;
  border-top: 1px solid black;
}
</style>
