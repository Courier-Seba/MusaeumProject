<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <div class="navbar-item">
        <a>
          <img src="/favicon.ico" alt="Logo" />
        </a>
      </div>
      <button
        class="navbar-burger burger"
        :class="{ 'is-active': mobileMenuActive }"
        aria-label="menu"
        aria-expanded="false"
        @click="openMobileMenu"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </button>
    </div>
    <div class="navbar-menu" :class="{ 'is-active': mobileMenuActive }">
      <div class="navbar-start">
        <div class="navbar-item">
          <h1 class="subtitle has-text-black">Museos</h1>
        </div>
        <div class="navbar-item">
          <h1 class="subtitle has-text-black">Artefactos</h1>
        </div>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <app-search-bar></app-search-bar>
        </div>
        <div class="navbar-item" v-if="logged">
          <header-user-login></header-user-login>
        </div>
        <div class="navbar-item" v-else>
          <router-link to="my-museum">
            <p>
              {{ userName }}
            </p>
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";
import AppSearchBar from "./AppSearchBar.vue";
import HeaderUserLogin from "./HeaderUserLogin.vue";
export default {
  name: "TheHeader",
  data() {
    return {
      mobileMenuActive: false
    };
  },
  components: {
    AppSearchBar,
    HeaderUserLogin
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
