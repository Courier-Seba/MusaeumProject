<template>
  <div class="columns is-fullheight">
    <div class="column is-2 is-sidebar-menu is-hidden-mobile">
      <museum-dashboard-menu></museum-dashboard-menu>
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
  components: {
    MuseumDashboardMenu,
  }
};
</script>

<style lang="scss">
</style>
