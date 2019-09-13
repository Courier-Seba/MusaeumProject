<template>
  <vueper-slides
    class="no-shadow"
    :visible-slides="3"
    slide-multiple
    :slide-ratio="1 / 4"
    :dragging-distance="200"
    :breakpoints="{ 800: { visibleSlides: 2 } }"
  >
    <vueper-slide
      v-for="(artifact, i) in artifacts"
      :key="i"
      :image="artifact.picture"
    ></vueper-slide>
  </vueper-slides>
</template>

<script>
import api from "@/api";
import { VueperSlides, VueperSlide } from "vueperslides";
export default {
  name: "AppCollectionCarousel",
  components: { VueperSlides, VueperSlide },
  props: {
    collectionId: Number
  },
  data() {
    return {
      artifacts: []
    };
  },
  mounted() {
    api.artifact
      .getListArtifactOfCollection(this.collectionId)
      .then(response => {
        this.artifacts = response.data.results;
      });
  }
};
</script>
