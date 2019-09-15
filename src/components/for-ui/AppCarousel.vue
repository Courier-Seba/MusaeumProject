<template>
  <vueper-slides autoplay :slide-ratio="0.2" slide-content-outside="top">
    <vueper-slide
      v-for="(museum, i) in museumList"
      :key="i"
      :image="museum.front_picture"
    >
      <v-layout slot="slideTitle">
        <div class="slide-title-text is-size-3">{{ museum.short_name }}</div>
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
  color: black;
  font-weight: bold;
  padding: 0.4rem;
  text-align: center;
  border-top: 1px solid black;
  border-radius: 10px;
}
</style>
