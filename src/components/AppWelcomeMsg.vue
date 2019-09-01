<template>
  <div class="container">
    {{ text }}
  </div>
</template>

<script>
export default {
  name: "AppWelcomeMsg",
  props: {
    text: String
  }
};
</script>
