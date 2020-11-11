<template>
  <v-footer inset app>
    <v-spacer></v-spacer>
    <v-btn
      outlined
      tile
      small
      v-t="{ path: 'footer.aboutUsDescription' }"
      @click="pushAboutUs"
    ></v-btn>
    <v-divider vertical class="mx-4"></v-divider>
    <span class="px-4">Musaeum &copy; {{ new Date().getFullYear() }}</span>
  </v-footer>
</template>

<script>
export default {
  name: "FooterDiv",
  methods: {
    pushAboutUs: function() {
      this.$router.push("/about-us");
    }
  }
};
</script>

<style></style>
