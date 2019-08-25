<template>
  <div class="columns is-fullheight is-gapless">
    <museum-dashboard-menu> </museum-dashboard-menu>
    <div class="column is-2 is-sidebar-menu is-hidden-mobile">
      <p>afdashlfas</p>
    </div>
  </div>
</template>

<script>
import MuseumDashboardMenu from "@/components/MuseumDashboardMenu";
export default {
  name: "MyMuseum",
  components: {
    MuseumDashboardMenu
  }
};
</script>

<style lang="scss">
.columns {
  min-height: 100%;
}
</style>
