<template>
  <div id="app" class="hero is-info is-fullheight is-fullwidth">
    <div class="hero-head">
      <the-header></the-header>
    </div>
    <div class="hero-body" id="body">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
export default {
  name: "App",
  components: {
    TheHeader
  }
};
</script>

<style>
#body {
  padding: 0;
}
</style>
