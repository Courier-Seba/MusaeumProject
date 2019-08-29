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
      <b-navbar-item href="#">
        <router-link to="museum">
          Museos
        </router-link>
      </b-navbar-item>
      <b-navbar-item href="#">
        <router-link to="artifact">
          Artefactos
        </router-link>
      </b-navbar-item>
    </template>

    <template slot="end">
      <b-navbar-item tag="div">
        <app-search-bar></app-search-bar>
      </b-navbar-item>
      <b-navbar-item tag="div" v-if="logged">
        <header-user-login></header-user-login>
        <header-sign-up></header-sign-up>
      </b-navbar-item>
      <b-navbar-item tag="div" v-else>
        <router-link to="my-museum">
          <p>
            {{ userName }}
          </p>
        </router-link>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
import { mapGetters } from "vuex";
import AppSearchBar from "./AppSearchBar.vue";
import HeaderUserLogin from "./HeaderUserLogin.vue";
import HeaderSignUp from "./HeaderSignUp.vue";
export default {
  name: "TheHeader",
  data() {
    return {
      mobileMenuActive: false
    };
  },
  components: {
    AppSearchBar,
    HeaderUserLogin,
    HeaderSignUp
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
