<template>
  <div class="hero-head">
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
        <div class="navbar-start"></div>
        <div class="navbar-end"></div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "TheHeader",
  data() {
    return {
      mobileMenuActive: false
    };
  },
  methods: {
    openMobileMenu: function() {
      this.mobileMenuActive = !this.mobileMenuActive;
    }
  }
};
</script>
