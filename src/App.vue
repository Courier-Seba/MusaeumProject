<template>
  <v-app id="musaeum-app">
    <v-navigation-drawer
      v-model="isDrawerActive"
      app
      overflow
      color="primary darken-1"
    ></v-navigation-drawer>

    <v-app-bar app color="primary">
      <v-app-bar-nav-icon
        @click.stop="isDrawerActive = !isDrawerActive"
      ></v-app-bar-nav-icon>
      <v-toolbar-title>Musaeum</v-toolbar-title>
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
export default {
  name: "App",
  data() {
    return {
      isDrawerActive: true,
      isFooterActive: true
    };
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

<style>
@import url("https://fonts.googleapis.com/css2?family=Alegreya&display=swap");

#musaeum-app {
  font-family: "Alegreya", serif;
}
</style>
