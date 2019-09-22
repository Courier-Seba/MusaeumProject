Museum view with a search.
<template>
  <div class="columns is-multiline">
    <div class="column is-full">
      <museum-filter-bar></museum-filter-bar>
    </div>

    <div class="column is-full">
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
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import MuseumCard from "@/components/for-ui/MuseumCard";
import MuseumFilterBar from "@/components/for-views/MuseumFilterBar";
export default {
  name: "MuseumListView",
  components: {
    MuseumCard,
    MuseumFilterBar
  },
  computed: {
    ...mapGetters(["museumList"])
  },
  methods: {
    ...mapActions(["getMuseumList"])
  },
  created() {
    this.getMuseumList();
  }
};
</script>
