Upload artifact modal. Simple modal with basic form to upload an artifact.
<template>
  <b-modal :active.sync="isModalActive" scroll="keep" :on-cancel="close">
    <div class="card">
      <section class="card-content">
        <div class="columns is-multiline is-centered">
          <div class="column is-full">
            <b-field :label="$t('artifactUpload.name')" label-position="inside">
              <b-input v-model="name" type="text" required></b-input>
            </b-field>
            <b-field
              :label="$t('artifactUpload.description')"
              label-position="inside"
            >
              <b-input
                v-model="description"
                required
                type="textarea"
                label-position="inside"
              ></b-input>
            </b-field>
          </div>
          <div class="column">
            <b-field :label="$t('artifactUpload.url')" label-position="inside">
              <b-input v-model="externalReference" type="url"></b-input>
            </b-field>
          </div>
        </div>
        <div class="column">
          <b-field class="file">
            <b-upload v-model="picture" @input="onFileChange">
              <span v-if="picture">
                <img :src="this.pictureInternalURL" alt="!" />
              </span>
              <a class="button is-primary" v-else>
                <b-icon icon="upload"></b-icon>
                <span>{{ $t("artifactUpload.file") }}</span>
              </a>
            </b-upload>
          </b-field>
        </div>
        <div class="column">
          <div class="buttons is-grouped is-right">
            <b-button type="is-success" @click="uploadArtifact">{{
              $t("artifactUpload.upload")
            }}</b-button>
            <b-button type="is-danger" @click="close">{{
              $t("artifactUpload.cancel")
            }}</b-button>
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
    onFileChange: function() {
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
#image-preview {
  text-align: center;
}
</style>
