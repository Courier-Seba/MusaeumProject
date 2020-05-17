<template>
  <v-navigation-drawer
    v-if="true"
    mini-variant
    expand-on-hover
    overflow
    color="primary darken-1"
    app
  ></v-navigation-drawer>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "NavigationDrawer",
  computed: {
    ...mapGetters(["userIsLogged"]) // TODO: Conditional reder if is loged only
  }
}
</script>

<style>

</style>
