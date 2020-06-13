<template>
  <v-navigation-drawer
    v-if="userIsLogged"
    mini-variant
    expand-on-hover
    overflow
    color="primary darken-1"
    bottom
    app
  >
    <v-list-item class="px-2">
      <v-list-item-avatar>
        <v-img v-if="userAvatarUrl !== null" :src="avatarUrl"></v-img>
        <v-icon v-else>mdi-account</v-icon>
      </v-list-item-avatar>

      <v-list-item-title>{{ userName }}</v-list-item-title>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense>
      <v-list-item id="btn-museum">
        <v-list-item-icon>
          <v-icon>mdi-bank</v-icon>
        </v-list-item-icon>
        <v-list-item-title v-t="'drawer.museum'"></v-list-item-title>
      </v-list-item>


      <v-list-item id="btn-favorites">
        <v-list-item-icon>
          <v-icon>mdi-star</v-icon>
        </v-list-item-icon>
        <v-list-item-title v-t="'drawer.favorites'"></v-list-item-title>
      </v-list-item>

      <v-list-item id="btn-chat">
        <v-list-item-icon>
          <v-icon>mdi-forum-outline</v-icon>
        </v-list-item-icon>
        <v-list-item-title v-t="'drawer.chat'"></v-list-item-title>
      </v-list-item>

      <v-list-item id="btn-config">
        <v-list-item-icon>
          <v-icon>mdi-cog</v-icon>
        </v-list-item-icon>
        <v-list-item-title v-t="'drawer.config'"></v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "NavigationDrawer",
  computed: {
    ...mapGetters(["userIsLogged", "userAvatarUrl", "userName"])
  }
}
</script>

<style>

</style>
