<template>
  <div class="field">
    <p class="control">
      <textarea
        v-model="input"
        class="textarea"
        :placeholder="$t('mdEditor.info')"
        :disabled="isDisabled"
        rows="16"
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
  props: {
    isDisabled: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    input: function(value) {
      this.$emit("input", value);
      return value;
    }
  }
};
</script>
