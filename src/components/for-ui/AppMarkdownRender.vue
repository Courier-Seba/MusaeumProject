<template>
  <div class="marked-content">
    <div v-html="rendered"></div>
  </div>
</template>

<script>
import marked from "@/plugins/marked";
export default {
  name: "AppMarkdownRender",
  props: {
    markdown: {
      type: String,
      required: true
    }
  },
  computed: {
    rendered: function() {
      if (this.markdown !== undefined) {
        return marked(this.markdown);
      } else {
        return null;
      }
    }
  }
};
</script>
