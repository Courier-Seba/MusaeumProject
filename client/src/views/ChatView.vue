<template>
  <v-container>
    <v-list three-line>
      <v-subheader
      >Mensajes</v-subheader>
      <v-list-item
        v-for="message in messages" 
        :key="message.id"
      >
        <v-list-item-avatar>
          <p>{{ message.sender }}</p>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-subtitle v-text="message.message"></v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
    </v-list>
  </v-container>
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
