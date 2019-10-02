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

    <div class="column is-full has-text-centered" id="artifact-title">
      <h1 class="is-size-4">{{ $t("museumView.artifactIntro") }}</h1>
    </div>

    <div class="column is-full">
      <h1 class="title subtitle has-text-centered">
        {{ $t("museumView.collections") }}
      </h1>
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

    <hr />
    <div class="column is-full" id="artifact-list">
      <h1 class="title has-text-centered">
        {{ $t("museumView.allArtifacts") }}
      </h1>
      <div class="columns is-multiline">
        <div
          class="column is-one-quarter"
          v-for="artifact in museumArtifacts"
          :key="artifact.id"
        >
          <app-artifact-box
            :artifact="artifact"
            :showTitle="true"
          ></app-artifact-box>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/api";
import CollectionCarousel from "@/components/for-ui/CollectionCarousel";
import AppStarModal from "@/components/for-ui/AppStarModal";
import AppArtifactBox from "@/components/for-ui/AppArtifactBox";
export default {
  name: "MuseumDetailView",
  components: {
    CollectionCarousel,
    AppStarModal,
    AppArtifactBox
  },
  data() {
    return {
      museumInfo: {},
      museumArtifacts: {},
      museumCollections: {}
    };
  },
  props: {
    id: String
  },
  mounted() {
    api.museum.getMuseumDetails(this.id).then(response => response.data)
  }
};
</script>

<style>
#artifact-list {
  border-top: 1px solid rgba(54, 54, 54, 1);
  border-bottom: 1px solid #f4f4f4;
}
#artifact-title {
  border-bottom: 1px solid #f4f4f4;
}
</style>
