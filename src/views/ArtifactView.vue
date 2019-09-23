List of popular artifacts. With a search.
<template>
  <div id="artifact-list" class="columns is-multiline">
    <div class="column is-full">
      <artifact-filter-bar></artifact-filter-bar>
    </div>
    <div v-for="(artifact, i) in artifactList" class="column is-2" :key="i">
      <app-artifact-box
        :artifact="artifact"
        :showTitle="true"
      ></app-artifact-box>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import AppArtifactBox from "@/components/for-ui/AppArtifactBox";
import ArtifactFilterBar from "@/components/for-views/ArtifactFilterBar";
export default {
  name: "ArtifactView",
  components: {
    AppArtifactBox,
    ArtifactFilterBar
  },
  computed: {
    ...mapGetters(["artifactList"])
  },
  methods: {
    ...mapActions(["getArtifactList"])
  },
  created() {
    this.getArtifactList();
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
