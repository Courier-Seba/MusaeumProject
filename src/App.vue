<template>
  <div id="app">
    <the-header></the-header>
    <router-view></router-view>
  </div>
</template>

<script>
import TheHeader from "@/components/for-layout/TheHeader.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "App",
  components: {
    TheHeader
  },
  created() {

    if (this.userIsLogged) {
      this.getJwt();
      this.updateJwt();
    }
  },
  computed: {
    ...mapGetters(["userIsLogged"])
  },
  methods: {
    ...mapActions(["refreshToken"]),
    updateJwt: function() {
      setInterval(() => this.refreshToken(), 270000);
    },
    getJwt: function() {
      this.refreshToken();
    }
  }
};
</script>
