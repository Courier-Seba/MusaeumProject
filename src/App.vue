<template>
  <v-app id="musaeum-app">
    <navigation-drawer></navigation-drawer>

    <v-app-bar app color="primary lighten-1">
      <v-img
        class="mx-2"
        src="/favicon.ico"
        contain
        max-height="40"
        max-width="40"
      ></v-img>
      <v-toolbar-title>MUSAEUM</v-toolbar-title>
    </v-app-bar>

    <v-content id="router-page-view">
      <router-view></router-view>
    </v-content>

    <v-footer v-if="isFooterActive" inset app>
      <span class="px-4">Musaeum &copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import cookies from "@/storage/cookies";

import NavigationDrawer from "./components/for-layout/NavigationDrawer";

export default {
  name: "App",
  components: {
    NavigationDrawer
  },
  data() {
    return {
      isFooterActive: true
    };
  },
  computed: {
    ...mapGetters(["authUserIsLogged", "userMuseum"])
  },
  methods: {
    ...mapActions(["reLogUser", "getUserMuseum"])
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
                let userMuseumURL = "/musaeum/" + this.userMuseum;
                this.$router.push(userMuseumURL).catch(() => false);
              }
            })
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
