<template>
  <vueper-slides autoplay :slide-ratio="0.2">
    <vueper-slide
      v-for="(museum, i) in museumList"
      :key="i"
      :image="museum.front_picture"
    >
      <v-layout slot="slideTitle">
        <div class="slide-title-text">{{ museum.short_name }}</div>
      </v-layout>
    </vueper-slide>
  </vueper-slides>
</template>

<script>
import { mapGetters } from "vuex";
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

export default {
  name: "AppCarousel",
  components: { VueperSlides, VueperSlide },
  computed: {
    ...mapGetters(["museumList"])
  }
};
</script>

<style>
.slide-title-text {
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  font-weight: bold;
  padding: 1rem;
  text-align: center;
  border: 1px solid #f1f1f1;
  border-radius: 10px;
}
</style>
