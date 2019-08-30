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
      <header-sign-up-guide></header-sign-up-guide>
    </b-modal>
  </section>
</template>

<script>
import HeaderSignUpGuide from "./HeaderSignUpGuide.vue";
export default {
  name: "HeaderSignUp",
  components: {
    HeaderSignUpGuide
  },
  data() {
    return {
      isComponentModalActive: false
    };
  }
};
</script>
