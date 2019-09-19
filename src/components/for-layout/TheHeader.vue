App header. Contains a navbar.
<template>
  <b-navbar type="is-info" :close-on-click="false" :isActive="true">
    <template slot="brand">
      <b-navbar-item tag="router-link" to="/">
        <img src="/assets/logo.png" alt="Logo" />
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item tag="div">
        <the-header-lang-chooser> </the-header-lang-chooser>
      </b-navbar-item>
      <b-navbar-item tag="router-link" to="/museums" style="color: black">
        {{ $t("navbarItem01") }}
      </b-navbar-item>
      <b-navbar-item tag="router-link" to="/artifacts" style="color: black">
        {{ $t("navbarItem02") }}
      </b-navbar-item>
    </template>

    <template slot="end">
      <b-navbar-item tag="div" v-if="userIsLogged">
        <app-username-display></app-username-display>
      </b-navbar-item>
      <b-navbar-item tag="div" v-else>
        <the-header-user-login></the-header-user-login>
        <the-header-sign-up></the-header-sign-up>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
import { mapGetters } from "vuex";
import TheHeaderUserLogin from "./the-header/TheHeaderUserLogin.vue";
import TheHeaderSignUp from "./the-header/TheHeaderSignUp.vue";
import TheHeaderLangChooser from "./the-header/TheHeaderLangChooser";
import AppUsernameDisplay from "@/components/for-ui/AppUsernameDisplay";
export default {
  name: "TheHeader",
  data() {
    return {
      mobileMenuActive: false
    };
  },
  components: {
    TheHeaderUserLogin,
    TheHeaderSignUp,
    TheHeaderLangChooser,
    AppUsernameDisplay
  },
  methods: {
    openMobileMenu: function() {
      this.mobileMenuActive = !this.mobileMenuActive;
    }
  },
  computed: {
    ...mapGetters(["userIsLogged"])
  }
};
</script>

<style>
#username {
  color: #a52b36;
}
.burger span {
  color: #a52b36;
}
</style>
