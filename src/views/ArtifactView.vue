List of popular artifacts. With a search.
<template>
  <div id="artifact-list">
    <div class="columns is-multiline">
      <div v-for="(artifact, i) in artifactList" class="column is-2" :key="i">
        <app-artifact-box
          :artifact="artifact"
          :showTitle="true"
        ></app-artifact-box>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import AppArtifactBox from "@/components/for-ui/AppArtifactBox";
export default {
  name: "ArtifactView",
  components: {
    AppArtifactBox
  },
  computed: {
    ...mapGetters(["artifactList"])
  }
};
</script>

<style>
#artifact-list {
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  margin-top: 1rem;
}
</style>
