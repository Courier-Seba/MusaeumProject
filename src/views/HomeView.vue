Initial and presentational page of the app.
<template>
  <div class="columns is-multiline is-main-content" id="home">
    <div class="column is-full">
      <app-news-message></app-news-message>
    </div>
    <div class="column is-full has-text-centered bottom-line">
      <app-welcome-msg></app-welcome-msg>
    </div>

    <div class="column is-three-quarters bottom-line">
      <h1 class="subtitle is-size-3 intro-link">{{ $t("homeView.museum") }}</h1>
    </div>
    <div class="column is-one-quarter center-content">
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
    <div class="column is-full bottom-line" id="museum-carousel ">
      <museum-carousel> </museum-carousel>
    </div>
    <div class="column is-three-quarters">
      <h1 class="subtitle is-size-3 intro-link">
        {{ $t("homeView.artifact") }}
      </h1>
    </div>
    <div class="column is-one-quarter center-content">
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
    <div class="column is-full bottom-line">
      <div class="columns is-multiline" id="artifact-list">
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
import { mapGetters, mapActions } from "vuex";
import AppArtifactBox from "@/components/for-ui/AppArtifactBox";
import MuseumCarousel from "@/components/for-ui/MuseumCarousel";
import AppWelcomeMsg from "@/components/for-ui/AppWelcomeMsg";
import AppNewsMessage from "@/components/for-ui/AppNewsMessage";

export default {
  name: "Home",
  components: {
    MuseumCarousel,
    AppWelcomeMsg,
    AppArtifactBox,
    AppNewsMessage
  },
  computed: {
    ...mapGetters(["museumList", "artifactList"])
  },
  methods: {
    ...mapActions(["getMuseumList", "getArtifactList"])
  },
  mounted() {
    this.getMuseumList();
    this.getArtifactList();
  }
};
</script>

<style>
#artifact-list {
  padding-right: 3rem;
  padding-left: 3rem;
}
.intro-link {
  padding-left: 2rem;
}
.center-content {
  text-align: center;
}
.bottom-line {
  border-bottom: 1px solid #1f1209;
  box-shadow: 0 20px 20px -20px #333;
  margin-bottom: 1.7rem;
}
</style>
