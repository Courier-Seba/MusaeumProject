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
      <header-sign-up-form v-bind="formProps"></header-sign-up-form>
    </b-modal>
  </section>
</template>

<script>
import HeaderSignUpForm from "./HeaderSigUpForm.vue";
export default {
  name: "HeaderSignUp",
  components: {
    HeaderSignUpForm
  },
  data() {
    return {
      isComponentModalActive: false,
      formProps: {
        email: "Email",
        password: "Password"
      }
    };
  }
};
</script>
