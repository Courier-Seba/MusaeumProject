<template>
  <v-app id="musaeum-app">
    <navigation-drawer></navigation-drawer>

    <navbar></navbar>

    <v-content id="router-page-view">
      <router-view></router-view>
    </v-content>
    <footer-div></footer-div>
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import cookies from "@/storage/cookies";

import NavigationDrawer from "./components/for-layout/NavigationDrawer";
import Navbar from "./components/for-layout/Navbar";
import FooterDiv from "./components/for-layout/FooterDiv";

export default {
  name: "App",
  components: {
    NavigationDrawer,
    Navbar,
    FooterDiv,
  },
  computed: {
    ...mapGetters(["authUserIsLogged", "userId"])
  },
  methods: {
    ...mapActions(["reLogUser", "getUserMuseum", "getUserProfile"])
  },
  created() {
    let tokenInCookies = cookies.getRefreshToken();
    let userIdInCookies = cookies.getUserId();
    if (typeof tokenInCookies !== "undefined") {
      this.reLogUser({
        refreshToken: tokenInCookies,
        userId: userIdInCookies
      }).then(result => {
        if (result) {
          this.getUserMuseum()
            .then(result => {
              if (result) {
                let userMuseumURL = "/musaeum/" + this.userId;
                this.$router.push(userMuseumURL).catch(() => false);
              }
            });
          this.getUserProfile();
        }
      })
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Alegreya&display=swap");

#musaeum-app {
  font-family: "Alegreya", serif;
}
</style>
