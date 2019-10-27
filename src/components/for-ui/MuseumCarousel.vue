Carousel for displaying museums.
<template>
  <vueper-slides autoplay :slide-ratio="0.2" slide-content-outside="bottom">
    <vueper-slide
      v-for="(museum, i) in museumsToDisplay"
      :key="i"
      :image="museum.front_picture"
    >
      <div slot="slideTitle">
        <div class="slide-title-text has-text-centered is-size-3">
          {{ museum.short_name }}
        </div>
      </div>
    </vueper-slide>
  </vueper-slides>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

export default {
  name: "MuseumCarousel",
  components: { VueperSlides, VueperSlide },
  props: {
    museums: Array
  },
  computed: {
    museumsToDisplay: function() {
      return this.museums.slice(0, 9);
    }
  }
};
</script>

<style>
.slide-title-text {
  color: black;
  font-weight: bold;
  padding: 0.4rem;
  text-align: center;
}
</style>
