<template>
  <b-modal
    :active.sync="isModalActive"
    :width="640"
    scroll="keep"
    :on-cancel="close"
  >
    <div class="card">
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <b-field label="Name">
              <b-input v-model="name" type="text" required></b-input>
            </b-field>
            <b-field horizontal label="Description">
              <b-input v-model="description" required type="textarea"></b-input>
            </b-field>
          </div>
        </div>
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
        <div class="buttons is-grouped is-right">
          <b-button type="is-success">Upload!</b-button>
          <b-button type="is-danger" @click="close">Cancel</b-button>
        </div>
      </div>
    </div>
  </b-modal>
</template>

<script>
export default {
  name: "ArtifactUploadModal",
  data() {
    return {
      name: "",
      description: "",
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
    onFileChange(e) {
      this.picture = e.target.files[0];
      this.pictureInternalURL = URL.createObjectURL(this.picture);
    },
    clearData() {
      this.name = "";
      this.description = "";
      this.url = null;
    },
    close() {
      this.$emit("closeModal");
    }
  }
};
</script>
