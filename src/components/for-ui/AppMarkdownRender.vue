<template>
</template>

<script>
import marked from "@/plugins/marked";
export default {
  computed: {
    rendered: function() {
      if (this.mdContent !== null) {
        return marked(this.mdContent);
      } else {
        return null;
      }
    }
  }
};
</script>
