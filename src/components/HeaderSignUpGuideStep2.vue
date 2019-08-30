<template>
  <div class="section">
    <b-button @click="done"></b-button>
  </div>
</template>

<script>
export default {
  name: "HeaderSignUpGuideStep2",
  methods: {
    done: function() {
      this.$emit("ready");
    }
  }
};
</script>
