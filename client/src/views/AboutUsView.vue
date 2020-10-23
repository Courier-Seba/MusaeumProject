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
    <v-row>
      <v-btn color="info">
        <span v-t="{ path: 'aboutUsView.userRegistration' }"></span>
      </v-btn>
      <v-divider vertical class="mx-4"></v-divider>
      <v-btn color="success">
        <span v-t="{ path: 'login.logIn' }"></span>
      </v-btn>
    </v-row>
  </v-container>
</template>

<script>
export default {
name: "AboutUsView",
}
</script>

<style>

</style>