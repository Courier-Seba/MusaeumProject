<template>
  <div class="box">
    <h2 class="has-text-black">{{ title }}</h2>
    <figure class="image is-64x64">
      <img :src="img" />
    </figure>
  </div>
</template>

<script>
export default {
  name: "AppBoxMuseum",
  props: {
    title: String,
    img: String
  }
};
</script>
