<template>
  <b-button
    type="is-primary"
    tag="router-link"
    to="/my-museum"
    icon-left="landmark"
  >
    {{ $t("common.welcome") }} {{ userName }}
  </b-button>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "AppUsernameDisplay",
  computed: {
    ...mapGetters(["userName"])
  }
};
</script>
