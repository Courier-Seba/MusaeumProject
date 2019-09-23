Component to display an artifact.
<template>
  <div class="box" @click="expand">
    <div v-if="showTitle">
      <span class="level">
        <div class="level-left">
          <h1 class="is-size-5 subtitle has-text-centered is-capitalized">
            {{ artifact.name }}
          </h1>
        </div>
        <div class="level-right">
          <app-artifact-modal :artifact="artifact"></app-artifact-modal>
        </div>
      </span>
    </div>
    <b-collapse :open.sync="isOpen" v-else>
      <h1 class="is-size-5 subtitle has-text-centered">
        {{ artifact.name }}
      </h1>
    </b-collapse>
    <figure class="image is-square">
      <img :src="artifact.picture" alt="Error" />
    </figure>
    <b-collapse :open="isOpen">
      <div class="has-text-centered"></div>
    </b-collapse>
  </div>
</template>

<script>
import AppArtifactModal from "@/components/for-ui/AppArtifactModal";
export default {
  name: "AppArtifactBox",
  data() {
    return {
      isOpen: false
    };
  },
  props: {
    artifact: Object,
    showTitle: Boolean
  },
  components: {
    AppArtifactModal
  },
  methods: {
    expand: function() {
      this.isOpen = !this.isOpen;
    }
  }
};
</script>
