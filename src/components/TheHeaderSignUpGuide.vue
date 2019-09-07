<template>
  <div class="modal-card" style="width: auto">
    <header class="modal-card-head" id="title">
      <p class="modal-card-title">{{ $t("navbarSignInItem01") }}</p>
      <b-button type="is-danger" @click="close" icon-right="times" />
    </header>
    <section class="modal-card-body">
      <div class="container">
        <the-header-sign-up-guide-step1
          v-if="step === 0"
          @ready="nextStep"
        ></the-header-sign-up-guide-step1>
        <the-header-sign-up-guide-step2 v-if="step === 1" @ready="nextStep">
        </the-header-sign-up-guide-step2>
        <the-header-sign-up-guide-step3 v-if="step === 2" @ready="nextStep">
        </the-header-sign-up-guide-step3>
        <the-header-sign-up-guide-step4 v-if="step === 3" @ready="nextStep">
        </the-header-sign-up-guide-step4>
        <the-header-sign-up-guide-step5 v-if="step === 4" @ready="close">
        </the-header-sign-up-guide-step5>
      </div>
    </section>
    <div class="container">
      <b-steps v-model="step" :has-navigation="false">
        <b-step-item
          :label="$t('navbarSignInItem29')"
          icon="user"
        ></b-step-item>
        <b-step-item
          :label="$t('navbarSignInItem30')"
          icon="id-card"
        ></b-step-item>
        <b-step-item
          :label="$t('navbarSignInItem31')"
          icon="university"
        ></b-step-item>
        <b-step-item
          :label="$t('navbarSignInItem32')"
          icon="image"
        ></b-step-item>
        <b-step-item
          :label="$t('navbarSignInItem33')"
          icon="check"
        ></b-step-item>
      </b-steps>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import TheHeaderSignUpGuideStep1 from "./TheHeaderSignUpGuideStep1";
import TheHeaderSignUpGuideStep2 from "./TheHeaderSignUpGuideStep2";
import TheHeaderSignUpGuideStep3 from "./TheHeaderSignUpGuideStep3";
import TheHeaderSignUpGuideStep4 from "./TheHeaderSignUpGuideStep4";
import TheHeaderSignUpGuideStep5 from "./TheHeaderSignUpGuideStep5";
export default {
  name: "TheHeaderSignUpForm",
  components: {
    TheHeaderSignUpGuideStep1,
    TheHeaderSignUpGuideStep2,
    TheHeaderSignUpGuideStep3,
    TheHeaderSignUpGuideStep4,
    TheHeaderSignUpGuideStep5
  },
  data() {
    return {
      step: 0
    };
  },
  methods: {
    ...mapActions(["activateUser"]),
    nextStep: function() {
      this.step++;
    },
    close: function() {
      this.activateUser();
      this.$parent.close();
    }
  }
};
</script>

<style>
#title {
  background-color: lightblue;
}
</style>
