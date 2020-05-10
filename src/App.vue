<template>
  <div id="app">
    Test
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "App",
  computed: {
    ...mapGetters(["userIsLogged"])
  },
  methods: {
    ...mapActions(["refreshToken", "reLogUser"]),
    updateJwt: function() {
      this.refreshToken();
    }
  },
  watch: {
    userIsLogged: function() {
      if (this.userIsLogged) {
        this.updateJwt();
      }
    }
  },
  created() {
    let token = this.$cookie.get("token");
    if (typeof token === "string") {
      this.reLogUser();
    }
  }
};
</script>
