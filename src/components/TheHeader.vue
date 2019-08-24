<template>
  <nav class="navbar is-transparent">
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
      </div>
    </div>
  </nav>
</template>

<script>
import AppSearchBar from "./AppSearchBar.vue";
export default {
  name: "TheHeader",
  data() {
    return {
      mobileMenuActive: false
    };
  },
  components: {
    AppSearchBar
  },
  methods: {
    openMobileMenu: function() {
      this.mobileMenuActive = !this.mobileMenuActive;
    }
  }
};
</script>
