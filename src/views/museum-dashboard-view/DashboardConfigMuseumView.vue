<template>
  <div class="profile-config"></div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "DashboardConfigurationView",
  computed: {
    ...mapGetters(["userMuseum"])
  }
};
</script>

<style>
.profile-config {
  margin-left: 5rem;
  margin-top: 1rem;
}
</style>
