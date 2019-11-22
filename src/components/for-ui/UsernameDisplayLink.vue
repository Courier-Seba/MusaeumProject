<template>
  <b-button
    type="is-info"
    outlined
    tag="router-link"
    to="/my-museum/home"
    icon-left="landmark"
  >
    {{ $t("common.welcome") }} {{ userName }}
  </b-button>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "UsernameDisplayLink",
  computed: {
    ...mapGetters(["userName"])
  }
};
</script>
