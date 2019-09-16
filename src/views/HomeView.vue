Initial and presentational page of the app.
<template>
  <div class="columns is-multiline is-main-content ">
    <div class="column is-full has-text-centered ">
      <app-welcome-msg></app-welcome-msg>
    </div>

    <div class="column is-three-quarters">
      <h1 class="subtitle is-size-3">{{ $t("homeView.museum") }}</h1>
    </div>
    <div class="column is-one-quarter">
      <b-button
        tag="router-link"
        to="/museums"
        size="is-large"
        icon-right="chevron-circle-right"
        type="is-primary"
      >
        {{ $t("homeView.museumLink") }}
      </b-button>
    </div>
    <div class="column is-full" id="museum-carousel">
      <museum-carousel> </museum-carousel>
    </div>
    <div class="column is-three-quarters">
      <h1 class="subtitle is-size-3">{{ $t("homeView.artifact") }}</h1>
    </div>
    <div class="column is-one-quarter">
      <b-button
        tag="router-link"
        to="/artifacts"
        size="is-large"
        icon-right="chevron-circle-right"
        type="is-primary"
      >
        {{ $t("homeView.artifactLink") }}
      </b-button>
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
