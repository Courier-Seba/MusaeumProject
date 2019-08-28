<template>
  <vueper-slides>
    <vueper-slide v-for="(slide, i) in slides" :key="i" :title="slide.title" :content="slide.content"></vueper-slide>
  </vueper-slides>
</template>

<script>
export default {
  name:"AppCarousel",
  components: { VueperSlides, VueperSlide },
  data: () => ({
  slides: [
    {
      title: 'Slide #1',
      content: 'Slide content.'
    },
    {
      title: 'Slide #2',
      content: 'Slide content.'
    }
  ]
})
}
</script>