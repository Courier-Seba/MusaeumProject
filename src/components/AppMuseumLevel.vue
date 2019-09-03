<template>
  <div class="level">
    <div class="level-left"></div>
  </div>
</template>

<script>
export default {
  name: "AppMuseumLevel",
  props: {
    shortName: String,
    country: String,
    city: String,
    logo: String,
    museumLevel: String,
    museumType: String,
    user: Number
  }
};
</script>
