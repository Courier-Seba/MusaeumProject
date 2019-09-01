<template>
  <div class="modal-card" style="width: auto">
    <header class="modal-card-head" id="title">
      <p class="modal-card-title">Registrarse</p>
      <b-button type="is-danger" @click="$parent.close()" icon-right="times" />
    </header>
    <section class="modal-card-body">
      <div class="container">
        <the-header-sign-up-guide-step1
          v-if="step === 0"
          @ready="nextStep"
        ></the-header-sign-up-guide-step1>
        <the-header-sign-up-guide-step2 v-if="step === 1" @ready="nextStep">
        </the-header-sign-up-guide-step2>
      </div>
    </section>
    <div class="container">
      <b-steps v-model="step">
        <b-step-item label="Crear cuenta" icon="user"></b-step-item>
        <b-step-item label="Su perfil" icon="id-card"></b-step-item>
        <b-step-item label="Su museo" icon="university"></b-step-item>
        <b-step-item label="Primer artefacto" icon="image"></b-step-item>
        <b-step-item label="Listo" icon="check"></b-step-item>
      </b-steps>
    </div>
  </div>
</template>

<script>
import TheHeaderSignUpGuideStep1 from "./TheHeaderSignUpGuideStep1";
import TheHeaderSignUpGuideStep2 from "./TheHeaderSignUpGuideStep2";
export default {
  name: "TheHeaderSignUpForm",
  components: {
    TheHeaderSignUpGuideStep1,
    TheHeaderSignUpGuideStep2
  },
  data() {
    return {
      step: 0
    };
  },
  methods: {
    nextStep: function() {
      this.step++;
    }
  }
};
</script>

<style>
#title {
  background-color: lightblue;
}
</style>
