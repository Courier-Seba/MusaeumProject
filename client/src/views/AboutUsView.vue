<template>
  <v-container>
    <v-row>
      <v-card-title v-t="{ path: 'aboutUsView.objetiveTitle' }"></v-card-title>
      <v-card-text v-t=" {path: 'aboutUsView.objetiveDescription'} "></v-card-text>
      <v-card-text v-t=" {path: 'aboutUsView.objetiveMain'} "></v-card-text>
    </v-row>
    <v-row>
      <v-card-title v-t=" {path: 'aboutUsView.justificationTitle'} "></v-card-title>
      <v-card-text v-t=" {path: 'aboutUsView.justificationDescription'} "></v-card-text>
      <v-card-text v-t=" {path: 'aboutUsView.justificationHistory'} "></v-card-text>
    </v-row>
    <v-row>
      <v-card-title v-t=" {path: 'aboutUsView.userInvitationTitle'} "></v-card-title>
      <v-card-text v-t=" {path: 'aboutUsView.userHelp'} "></v-card-text>
      <v-card-text v-t=" {path: 'aboutUsView.userInvitation'} "></v-card-text>
    </v-row>
    <span>authorized: {{ $store.state.authorized }}</span>
    <v-row v-if= '$store.state.authorized  = false'>
      
      <v-btn color="info">
        <span v-t="{ path: 'aboutUsView.userRegistration' }" @click="pushRegistration"></span>
      </v-btn>
      <v-divider vertical class="mx-3"></v-divider>
      <v-btn color="success">
        <span v-t="{ path: 'login.logIn' }" @click="pushLogIn"></span>
      </v-btn>
    </v-row>
  </v-container>
</template>

<script>
export default {
name: "AboutUsView",
methods: {
  pushLogIn: function() {
    let pathUserLogIn = "/";
    this.$router.push(pathUserLogIn);
  },
  pushRegistration: function() {
    let pathUserRegistration = "/user-registration";
    this.$router.push(pathUserRegistration);
  }
}
}
</script>

<style>

</style>