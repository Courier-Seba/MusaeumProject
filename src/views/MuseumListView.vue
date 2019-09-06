<template>
  <div>
    <app-museum-box
      v-for="museum in museumList"
      :key="museum.id"
      :id="museum.id"
      :short-name="museum.short_name"
      :museum-level="museum.museum_level"
      :museum-type="museum.museum_type"
      :city="museum.city"
      :country="museum.country"
      :logo="museum.logo"
      :front="museum.front_picture"
    ></app-museum-box>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import AppMuseumBox from "@/components/AppMuseumBox";
export default {
  name: "MuseumListView",
  components: {
    AppMuseumBox
  },
  computed: {
    ...mapGetters(["museumList"])
  }
};
</script>
