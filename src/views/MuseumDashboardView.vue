<template>
  <div class="columns is-fullheight">
    <div class="column is-2 is-sidebar-menu is-hidden-mobile">
      <museum-dashboard-menu
        @toggleMenu="toggleMenu"
        v-if="isMenuActive"
      ></museum-dashboard-menu>
      <div id="buttom-top" v-else>
        <b-button
          @click="toggleMenu"
          type="is-primary"
          icon-left="caret-right"
        ></b-button>
      </div>
    </div>
    <div class="column is-main-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import MuseumDashboardMenu from "@/components/MuseumDashboardMenu";
export default {
  name: "MyMuseum",
  data() {
    return {
      isMenuActive: true
    };
  },
  components: {
    MuseumDashboardMenu
  },
  methods: {
    toggleMenu: function() {
      this.isMenuActive = !this.isMenuActive;
    }
  }
};
</script>

<style>
#buttom-top {
  margin: 10px
}
</style>
