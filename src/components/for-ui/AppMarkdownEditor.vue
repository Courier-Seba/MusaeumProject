<template>
  <div class="field">
    <p class="control">
      <textarea
        v-model="input"
        class="textarea"
        placeholder="Add a comment..."
      ></textarea>
    </p>
  </div>
</template>

<script>
export default {
  name: "AppMarkdownEditor",
  data() {
    return {
      input: ""
    };
  },
  watch: {
    input: function(value) {
      this.$emit("input", value);
      return value;
    }
  }
};
</script>
