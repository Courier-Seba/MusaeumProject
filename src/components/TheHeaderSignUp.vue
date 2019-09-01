<template>
  <section>
    <button
      class="button is-primary is-medium"
      @click="isComponentModalActive = true"
    >
      Sign Up
    </button>

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
