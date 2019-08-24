<template>
  <div class="hero-body">
    <div class="columns is-multiline">
      <div class="column is-full">
        <div class="columns is-multiline">
          <div v-for="museum in museumList" class="column is-narrow">
            <app-box :title="museum.short_name" :img="museum.logo"> </app-box>
          </div>
        </div>
      </div>
      <div class="column is-full">
        <div class="columns is-multiline">
          <div v-for="artifact in artifactList" class="column is-narrow">
            <app-box :title="artifact.name" :img="artifact.picture"> </app-box>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import AppBox from "@/components/AppBox";
export default {
  name: "Home",
  components: {
    AppBox
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
