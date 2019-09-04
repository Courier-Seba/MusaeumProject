<template>
  <vueper-slides autoplay :slide-ratio="0.2">
    <vueper-slide
      v-for="(museum, i) in museumList"
      :key="i"
      :title="museum.short_name"
      :image="museum.front_picture"
    ></vueper-slide>
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
