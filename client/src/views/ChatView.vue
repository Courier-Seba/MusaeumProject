<template>
  <div>
    <v-navigation-drawer
      app
      permanent
      clipped
      right
    >
      <v-list dense>
        <v-list-item
          v-for="message in messages"
          :key="message.id"
        >
          <v-list-item-content>
            <v-list-item-title>{{ message.id }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  
  </div>
  
</template>

<script>
import api from "@/api";
import { mapGetters } from "vuex";

export default {
  name: "ChatView",
  data() {
    return {
      messages: []
    }
  },
  computed: {
    ...mapGetters(["userId", "authJWT"]),
  },
  beforeMount() {
    api.user.getUserMessages(this.userId, this.authJWT)
      .then(response => {
        this.messages = response.data.results
      })
  }

}
</script>

<style>

</style>
