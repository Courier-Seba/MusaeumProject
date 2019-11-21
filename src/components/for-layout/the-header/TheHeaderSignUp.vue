Sign up guide launcher.
<template>
  <section>
    <b-button
      :loading="isLoading"
      type="is-primary"
      @click="isComponentModalActive = true"
    >
      {{ $t("navbarItem04") }}
    </b-button>

    <b-modal
      :active.sync="isComponentModalActive"
      has-modal-card
      full-screen
      :can-cancel="false"
    >
      <the-header-sign-up-guide></the-header-sign-up-guide>
    </b-modal>
  </section>
</template>

<script>
import TheHeaderSignUpGuide from "./TheHeaderSignUpGuide.vue";
export default {
  name: "TheHeaderSignUp",
  components: {
    TheHeaderSignUpGuide
  },
  data() {
    return {
      isComponentModalActive: false
    };
  }
};
</script>
