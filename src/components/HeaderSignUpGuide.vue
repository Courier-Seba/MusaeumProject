<template>
  <div class="modal-card" style="width: auto">
    <header class="modal-card-head" id="title">
      <p class="modal-card-title">Registrarse</p>
    </header>
    <section class="modal-card-body">
      <div class="container">
        <header-sign-up-guide-step1
        ></header-sign-up-guide-step1>
      </div>
    </section>
    <button class="button is-danger" type="button" @click="$parent.close()">
      Cancelar
    </button>
  </div>
</template>

<script>
import HeaderSignUpGuideStep1 from "./HeaderSignUpGuideStep1";
export default {
  name: "HeaderSignUpForm",
  components: {
    HeaderSignUpGuideStep1
  },
  data() {
    return {
    };
  }
};
</script>

<style>
#title {
  background-color: lightblue;
}
</style>
