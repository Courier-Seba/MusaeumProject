<template>
  <div class="center">
    <div class="columns is-multiline">
      <div v-for="(artifact, i) in artifactList" class="column is-2" :key="i">
        <app-artifact-box
          :artifact="artifact"
          :showTitle="false"
        ></app-artifact-box>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import AppArtifactBox from "@/components/AppArtifactBox";
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
.center {
  
}
</style>
