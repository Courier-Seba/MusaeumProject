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
  computed: {
    ...mapGetters(["userIsLogged"])
  },
  methods: {
    ...mapActions(["refreshToken", "reLogUser"]),
    updateJwt: function() {
      this.refreshToken();
    }
  },
  watch: {
    userIsLogged: function() {
      if (this.userIsLogged) {
        this.updateJwt();
      }
    }
  },
  created() {
    let token = this.$cookie.get("token");
    if (typeof token === "string") {
      this.reLogUser();
    }
  }
};
</script>
