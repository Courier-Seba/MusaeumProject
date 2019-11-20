Initial and presentational page of the app.
<template>
  <div class="is-main-content" id="home">
    <app-news-message></app-news-message>
    <div class="has-text-centered">
      <div id="welcome" class="hero is-fullheight">
        <section class="hero-body">
          <div class="columns is-vcentered is-multiline">
            <div class="column is-full">
              <div class="container">
                <h1 class="is-size-3">{{ $t("homeView.title") }}</h1>
                <p class="is-size-5">{{ $t("homeView.intro") }}</p>
                <hr />
                <h6 class="is-size-6 has-text-black">
                  {{ $t("homeView.outro") }}
                </h6>
                <h6 class="is-size-7 has-text-grey">- Rodrigo Barceló</h6>
              </div>
            </div>
            <div class="column is-half">
              <b-button
                tag="router-link"
                to="/museums"
                size="is-large"
                icon-right="chevron-circle-right"
                type="is-primary"
              >
                <h2 class="is-size-4">
                  {{ $t("homeView.museumLink") }}
                </h2>
              </b-button>
            </div>
            <div class="column is-half">
              <b-button
                tag="router-link"
                to="/artifacts"
                size="is-large"
                icon-right="chevron-circle-right"
                type="is-primary"
              >
                <h2 class="is-size-4">
                  {{ $t("homeView.artifactLink") }}
                </h2>
              </b-button>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import AppNewsMessage from "@/components/for-ui/AppNewsMessage";

export default {
  name: "Home",
  components: {
    AppNewsMessage
  },
};
</script>

<style>
.intro-link {
  padding-left: 2rem;
}
.center-content {
  text-align: center;
}
</style>
