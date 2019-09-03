<template>
  <div id="app">
    <the-header></the-header>
    <router-view></router-view>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
export default {
  name: "App",
  components: {
    TheHeader
  },
  created() {
    this.$store.dispatch("getMuseumList");
    this.$store.dispatch("getArtifactList");
  }
};
</script>
