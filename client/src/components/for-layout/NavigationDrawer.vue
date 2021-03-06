<template>
  <div>
    <v-navigation-drawer
      v-if="authUserIsLoged"
      mini-variant
      expand-on-hover
      overflow
      color="primary darken-1"
      bottom
      app
    >
      <div @click="pushMuseumView">
        <v-list-item class="px-2">
          <v-list-item-avatar>
            <v-img v-if="userAvatarUrl !== null" :src="userAvatarUrl"></v-img>
            <v-icon v-else>mdi-account</v-icon>
          </v-list-item-avatar>
        </v-list-item>

        <v-list-item class="px-1">
          <v-list-content>
            <v-list-item-title>{{ userName }}</v-list-item-title>
            <v-list-item-subtitle>{{ userEmail }}</v-list-item-subtitle>
          </v-list-content>
        </v-list-item>
      </div>

      <v-divider></v-divider>

      <v-list flat>
        <v-list-group id="btn-museum" prepend-icon="mdi-bank">
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Musaeum</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-group sub-group>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title v-t="'drawer.artifacts'"></v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item @click="openNewAritfactDialog">
              <v-list-item-icon>
                <v-icon>mdi-plus</v-icon>
              </v-list-item-icon>
              <v-list-item-title v-t="'drawer.newArtifact'"></v-list-item-title>
            </v-list-item>

            <v-list-item @click="pushToArtifactManagement">
              <v-list-item-icon>
                <v-icon>mdi-developer-board</v-icon>
              </v-list-item-icon>
              <v-list-item-title
                v-t="'drawer.adminArtifacs'"
              ></v-list-item-title>
            </v-list-item>
          </v-list-group>
        </v-list-group>

          <v-list-item @click="pushArtifactsCharts">
            <v-list-item-icon>
              <v-icon>mdi-chart-line</v-icon>
            </v-list-item-icon>
            <v-list-item-title v-t="'drawer.stadistics'"></v-list-item-title>
          </v-list-item>


        <v-list-item id="btn-favorites" @click="pushToFavorites">
          <v-list-item-icon>
            <v-icon>mdi-star</v-icon>
          </v-list-item-icon>
          <v-list-item-title v-t="'drawer.favorites'"></v-list-item-title>
        </v-list-item>

        <v-list-item id="btn-chat" @click="pushToChat">
          <v-list-item-icon>
            <v-icon>mdi-forum-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-title v-t="'drawer.chat'"></v-list-item-title>
        </v-list-item>

        <v-list-item id="btn-config" @click="pushMuseumConfig">
          <v-list-item-icon>
            <v-icon>mdi-cog</v-icon>
          </v-list-item-icon>
          <v-list-item-title v-t="'drawer.config'"></v-list-item-title>
        </v-list-item>

        <v-list-item id="btn-logout" @click="logOutSession">
          <v-list-item-icon>
            <v-icon>mdi-arrow-left</v-icon>
          </v-list-item-icon>
          <v-list-item-title v-t="'drawer.logOut'"></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <new-artifact
      :open="newArtifactDialog"
      @closePopUp="closeNewArtifactDialog"
    ></new-artifact>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import NewArtifact from "@/components/for-control/NewArtifact";

export default {
  name: "NavigationDrawer",
  components: {
    NewArtifact
  },
  data() {
    return {
      newArtifactDialog: false
    };
  },
  computed: {
    ...mapGetters([
      "authUserIsLoged",
      "userAvatarUrl",
      "userName",
      "userEmail",
      "userId"
    ])
  },
  methods: {
    ...mapActions(["logOut"]),
    openNewAritfactDialog: function() {
      this.newArtifactDialog = true;
    },
    closeNewArtifactDialog: function() {
      this.newArtifactDialog = false;
    },
    pushMuseumView: function() {
      let pathUserMuseum = "/musaeum/" + this.userId;
      this.$router.push(pathUserMuseum);
    },
    logOutSession: function() {
      this.logOut();
      this.$router.push("/");
    },
    pushMuseumConfig: function() {
      this.$router.push("/user/config");
    },
    pushArtifactsCharts: function () {
      this.$router.push("/stadistics");
    },
    pushToFavorites: function () {
      this.$router.push("/favorites");
    },
    pushToArtifactManagement: function() {
      this.$router.push("/artifact-list");
    },
    pushToChat: function () {
      this.$router.push("/messages");
    }

  }
};
</script>

<style></style>
