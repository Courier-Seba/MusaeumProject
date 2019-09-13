<template>
  <div class="columns is-vcentered">
    <div class="column is-full has-text-centered">
      <h1 class="is-size-2">
        {{ $t("museumView.welcome") }} {{ museumDetail.short_name }}
      </h1>
      <h1 class="is-size-4">{{ $t("museumView.artifactIntro") }}</h1>
      <div class="section" v-for="(collection, i) in museumCollections" :key="i">
        <app-collection-carousel
          :collectionId="collection.id"
        ></app-collection-carousel>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import AppCollectionCarousel from "@/components/AppCollectionCarousel";
export default {
  name: "MuseumDetailView",
  components: {
    AppCollectionCarousel
  },
  computed: {
    ...mapGetters(["museumDetail", "museumCollections"])
  },
  props: {
    id: String
  },
  methods: {
    ...mapActions(["getMuseumData", "getMuseumCollections"])
  },
  mounted() {
    this.getMuseumData(this.id);
    this.getMuseumCollections(this.id);
  }
};
</script>
