<template>
  <b-modal :active.sync="isCardModalActive" :width="640" scroll="keep">
    <div class="card">
      <div v-if="url" class="card-image">
        <figure class="image is-16by9">
          <img :src="url" alt="Image" />
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <b-field label="Title">
              <b-input
                v-model="title"
                type="text"
                required
                value=""
                placeholder="Artifact's title"
              ></b-input>
            </b-field>
            <b-field horizontal label="Description">
              <b-input
                v-model="description"
                required
                type="textarea"
                placeholder="Adds an artifact's description!"
              ></b-input>
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
              <span class="file-cta">
                <span class="file-label">
                  Choose File!
                </span>
              </span>
            </label>
          </div>
        </div>
        <div class="buttons is-grouped is-right">
          <b-button type="is-success">Upload!</b-button>

          <b-button type="is-danger" @click="eliminarUrl">Cancel</b-button>
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
      title: "",
      description: "",
      url: null
    };
  },
  props: {
    isCardModalActive: Boolean
  },
  methods: {
    onFileChange(e) {
      const file = e.target.files[0];
      this.url = URL.createObjectURL(file);
    },

    eliminarUrl() {
      this.url = null;
      this.title = "";
      this.description = "";
      this.isCardModalActive = false;
    }
  }
};
</script>
