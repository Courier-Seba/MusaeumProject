Initial and presentational page of the app.
<template>
  <div class="columns is-multiline is-main-content" id="home">
    <div class="column is-full">
      <app-news-message></app-news-message>
    </div>
    <div class="column is-full has-text-centered bottom-line">
      <div id="welcome" class="hero is-fullheight">
        <section class="hero-body">
          <div class="container">
            <h1 class="is-size-2">{{ $t("homeView.title") }}</h1>
            <p class="is-size-4">{{ $t("homeView.intro") }}</p>
            <hr />
            <h6 class="is-size-6 has-text-black">{{ $t("homeView.outro") }}</h6>
            <h6 class="is-size-7 has-text-grey">- Rodrigo Barceló</h6>
          </div>
        </section>
      </div>
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
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import AppNewsMessage from "@/components/for-ui/AppNewsMessage";

export default {
  name: "Home",
  components: {
    AppNewsMessage
  },
  computed: {
    ...mapGetters(["museumList", "artifactList"])
  },
  methods: {
    ...mapActions(["getMuseumList", "getArtifactList"])
  },
  created() {
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
