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
  data: () => ({
    slides: [
      {
        title: "Slide #1",
        content: "Slide content."
      },
      {
        title: "Slide #2",
        content: "Slide content."
      }
    ]
  }),
  computed: {
    ...mapGetters(["museumList"])
  }
};
</script>
