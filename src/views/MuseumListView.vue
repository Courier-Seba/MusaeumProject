<template>
  <div class="container">
    <app-museum-level v-for="museum in museumList" :key="museum.pk"></app-museum-level>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import AppMuseumLevel from "@/components/AppMuseumLevel";
export default {
  name: "MuseumListView",
  components: {
    AppMuseumLevel
  },
  computed: {
    ...mapGetters(["museumList"])
  }
};
</script>
