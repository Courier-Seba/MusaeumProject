<template>
  <div class="container has-text-centered">
    <h1 class="is-size-1 has-text-dark">
      {{ $t("signUp5.thanks") }}
    </h1>
    <div class="container has-text-centered">
      <b-button @click="done" size="is-large" type="is-success">{{
        $t("signUp5.finishButtom")
      }}</b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheHeaderSignUpGuideStep5",
  methods: {
    done: function() {
      this.$emit("ready");
    }
  }
};
</script>
