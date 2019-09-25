This is a museum detailed view with their collections, artifact, address (if
any), info about and the username
<template>
  <div class="columns is-vcentered is-multiline">
    <div class="column is-full has-text-centered">
      <h1 class="is-size-2">
        {{ $t("museumView.welcome") }} {{ museumDetail.short_name }}
        <app-star-modal :isActive="true"></app-star-modal>
      </h1>
    </div>

    <div class="column is-full has-text-centered">
      <h1 class="is-size-4">{{ $t("museumView.artifactIntro") }}</h1>
    </div>
    <div class="column is-full">
      <div
        class="section"
        v-for="(collection, i) in museumCollections"
        :key="i"
      >
        <h1 class="is-size-5 has-text-centered">{{ collection.title }}</h1>
        <hr />
        <collection-carousel
          :collectionId="collection.id"
        ></collection-carousel>
      </div>
    </div>
    <br />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import CollectionCarousel from "@/components/for-ui/CollectionCarousel";
import AppStarModal from "@/components/for-ui/AppStarModal";
export default {
  name: "MuseumDetailView",
  components: {
    CollectionCarousel,
    AppStarModal
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
