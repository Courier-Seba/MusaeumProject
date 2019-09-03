<template>
  <b-navbar type="is-info">
    <template slot="brand">
      <b-navbar-item>
        <router-link to="/">
          <img src="/favicon.ico" alt="Logo" />
        </router-link>
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item tag="div">
        <the-header-lang-chooser> </the-header-lang-chooser>
      </b-navbar-item>
      <b-navbar-item tag="router-link" to="museums">
          {{ $t("navbarItem01") }}
      </b-navbar-item>
      <b-navbar-item>
        <router-link to="artifacts">
          {{ $t("navbarItem02") }}
        </router-link>
      </b-navbar-item>
    </template>

    <template slot="end">
      <b-navbar-item tag="div">
        <app-search-bar></app-search-bar>
      </b-navbar-item>
      <b-navbar-item tag="div" v-if="logged">
        <the-header-user-login></the-header-user-login>
      </b-navbar-item>
      <b-navbar-item tag="div" v-else>
        <router-link to="my-museum">
          <p>
            {{ userName }}
          </p>
        </router-link>
      </b-navbar-item>
      <b-navbar-item tag="div">
        <the-header-sign-up></the-header-sign-up>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
import { mapGetters } from "vuex";
import AppSearchBar from "./AppSearchBar.vue";
import TheHeaderUserLogin from "./TheHeaderUserLogin.vue";
import TheHeaderSignUp from "./TheHeaderSignUp.vue";
import TheHeaderLangChooser from "./TheHeaderLangChooser";
export default {
  name: "TheHeader",
  data() {
    return {
      mobileMenuActive: false
    };
  },
  components: {
    AppSearchBar,
    TheHeaderUserLogin,
    TheHeaderSignUp,
    TheHeaderLangChooser
  },
  methods: {
    openMobileMenu: function() {
      this.mobileMenuActive = !this.mobileMenuActive;
    }
  },
  computed: {
    ...mapGetters(["userName"]),
    logged() {
      return this.userName === "" ? true : false;
    }
  }
};
</script>
