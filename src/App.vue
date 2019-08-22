<template>
  <div id="app" class="hero is-info is-fullheight is-fullwidth">
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
  }
};
</script>
