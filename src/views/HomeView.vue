<template>
  <div class="columns is-multiline is-main-content ">
    <div class="column is-full has-text-centered ">
      <app-welcome-msg :text="$t('welcomeMsg')"></app-welcome-msg>
    </div>
    <div class="column is-full">
      <app-carousel> </app-carousel>
    </div>
    <div class="column is-full">
      <div class="columns is-multiline">
        <div v-for="artifact in artifactList" class="column is-narrow">
          <app-box :title="artifact.name" :img="artifact.picture"> </app-box>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import AppBox from "@/components/AppBox";
import AppCarousel from "@/components/AppCarousel";
import AppWelcomeMsg from "@/components/AppWelcomeMsg";

export default {
  name: "Home",
  components: {
    AppBox,
    AppCarousel,
    AppWelcomeMsg
  },
  created() {
    this.$store.dispatch("getMuseumList");
    this.$store.dispatch("getArtifactList");
  },
  computed: {
    ...mapGetters(["museumList", "artifactList"])
  }
};
</script>
