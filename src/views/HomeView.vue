<template>
  <div class="columns is-multiline is-main-content ">
    <div class="column is-full has-text-centered ">
      <the-welcome-msg></the-welcome-msg>
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
import AppArtifactBox from "@/components/AppArtifactBox";
import AppCarousel from "@/components/AppCarousel";
import TheWelcomeMsg from "@/components/TheWelcomeMsg";

export default {
  name: "Home",
  components: {
    AppCarousel,
    TheWelcomeMsg,
    AppArtifactBox
  },
  computed: {
    ...mapGetters(["museumList", "artifactList"])
  }
};
</script>
