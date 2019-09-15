<template>
  <div>
    <the-museum-box
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
    ></the-museum-box>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import TheMuseumBox from "@/components/for-layout/TheMuseumBox";
export default {
  name: "MuseumListView",
  components: {
    TheMuseumBox
  },
  computed: {
    ...mapGetters(["museumList"])
  }
};
</script>
