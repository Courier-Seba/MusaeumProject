<template>
  <div>
    <b-button
      @click="showArtifactModal"
      icon-right="info"
      type="is-danger"
      size="is-small"
    ></b-button>
    <b-modal :active.sync="isModalActive" :width="640" scroll="keep">
      <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img :src="artifact.picture" alt="Image" />
          </figure>
        </div>
        <div class="card-content">
          <div class="has-text-black has-text-justified">
            {{ artifact.description }}
          </div>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "AppArtifactModal",
  data() {
    return {
      isModalActive: false
    };
  },
  props: {
    artifact: Object
  },
  methods: {
    showArtifactModal: function() {
      this.isModalActive = true;
    }
  }
};
</script>
