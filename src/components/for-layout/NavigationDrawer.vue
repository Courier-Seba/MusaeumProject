<template>
  <v-navigation-drawer
    v-if="authUserIsLoged"
    mini-variant
    expand-on-hover
    overflow
    color="primary darken-1"
    bottom
    app
  >
    <v-list>
      <v-list-item-avatar>
        <v-img :src="userAvatarUrl"></v-img>
      </v-list-item-avatar>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "NavigationDrawer",
  computed: {
    ...mapGetters(["authUserIsLoged", "userAvatarUrl"])
  }
}
</script>

<style>

</style>
