<template>
  <div class="columns is-multiline is-main-content ">
    <div class="column is-full has-text-centered ">
      <app-welcome-msg></app-welcome-msg>
    </div>
    <div class="column is-full">
      <app-carousel> </app-carousel>
    </div>
    <div class="column is-full">
      <div class="columns is-multiline">
        <div v-for="(artifact, i) in artifactList" class="column is-2" :key="i">
          <app-artifact-box :artifact="artifact" :showTitle="false"></app-artifact-box>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import AppArtifactBox from "@/components/for-ui/AppArtifactBox";
import AppCarousel from "@/components/for-ui/AppCarousel";
import AppWelcomeMsg from "@/components/for-ui/AppWelcomeMsg";

export default {
  name: "Home",
  components: {
    AppCarousel,
    AppWelcomeMsg,
    AppArtifactBox
  },
  computed: {
    ...mapGetters(["museumList", "artifactList"])
  }
};
</script>
