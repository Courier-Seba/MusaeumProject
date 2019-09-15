Initial and presentational page of the app.
<template>
  <div class="columns is-multiline is-main-content ">
    <div class="column is-full has-text-centered ">
      <app-welcome-msg></app-welcome-msg>
    </div>
    <div class="column is-full">
      <museum-carousel> </museum-carousel>
    </div>
    <div class="column is-full">
      <div class="columns is-multiline">
        <div v-for="(artifact, i) in artifactList" class="column is-2" :key="i">
          <app-artifact-box
            :artifact="artifact"
            :showTitle="false"
          ></app-artifact-box>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import AppArtifactBox from "@/components/for-ui/AppArtifactBox";
import MuseumCarousel from "@/components/for-ui/MuseumCarousel";
import AppWelcomeMsg from "@/components/for-ui/AppWelcomeMsg";

export default {
  name: "Home",
  components: {
    MuseumCarousel,
    AppWelcomeMsg,
    AppArtifactBox
  },
  computed: {
    ...mapGetters(["museumList", "artifactList"])
  }
};
</script>
