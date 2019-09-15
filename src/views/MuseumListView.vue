Museum view with a search.
<template>
  <div>
    <museum-card
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
    ></museum-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import MuseumCard from "@/components/for-ui/MuseumCard";
export default {
  name: "MuseumListView",
  components: {
    MuseumCard
  },
  computed: {
    ...mapGetters(["museumList"])
  }
};
</script>
