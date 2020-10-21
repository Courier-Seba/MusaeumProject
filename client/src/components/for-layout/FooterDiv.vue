<template>
    <v-footer inset app>
      <span v-t="{ path: 'footer.aboutUsDescription' }">About us</span>
      <v-spacer></v-spacer>
      <span class="px-4">Musaeum &copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
</template>

<script>
export default {
    name: "FooterDiv",
}
</script>

<style></style>