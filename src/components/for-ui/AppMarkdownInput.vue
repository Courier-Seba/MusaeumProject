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
  name: "AppMarkdownInput",
  data() {
    return {
      input: ""
    };
  }
};
</script>
