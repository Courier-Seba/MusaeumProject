<template>
  <v-container id="home-view" class="fill-height" fluid>
    <v-row align="center" justify="center">

      <v-col offset="2">
        <v-container>
          <v-row>
            <v-col>
              <v-card-title v-t="{ path: 'homeView.title' }"></v-card-title>
              <v-card-text v-t="{ path: 'homeView.intro' }"></v-card-text>
            </v-col>
            <v-col>
              <v-img src="assets/escuela.jpg"></v-img>
            </v-col>
          </v-row>
          <v-card-title v-t="{ path: 'homeView.objetiveTitle' }"></v-card-title>
          <v-card-text v-t="{ path: 'homeView.objetive' }"></v-card-text>
          <v-card-text v-t="{ path: 'homeView.conclution' }"></v-card-text>
        </v-container>
      </v-col>

      <v-col offset="1">
        <v-card 
          tile
          color="rgb(255, 255, 255, 0.1)"
          max-width="500"
        >
          <v-card-title>
            <span v-t="{ path: 'login.logIn' }"></span>
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <v-form>
              <v-text-field
                v-model="usernameInput"
                :label="$t('login.logInUsername')"
                :rules="[rules.required]"
                :error="isInputDataEmpty"
              ></v-text-field>
              <v-text-field
                v-model="passwordInput"
                :label="$t('login.logInPassword')"
                :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
                :type="showPass ? 'text' : 'password'"
                @click:append="showPass = !showPass"
                :rules="[rules.required]"
                :error="isInputDataEmpty"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="accent" @click="submitData">
              <span v-t="{ path: 'login.logInSubmit' }"></span>
            </v-btn>
            <v-btn color="info">
              <span v-t="{ path: 'login.logInRegister' }"></span>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "HomeView",
  data() {
    return {
      usernameInput: "",
      passwordInput: "",
      showPass: false,
      isInputDataEmpty: false,
      rules: {
        required: value => !!value || this.$t("general.requiredItem")
      }
    };
  },
  computed: {
    ...mapGetters(["userMuseum"]),
    completeSubmitInfo() {
      return this.usernameInput !== "" && this.passwordInput !== ""
        ? true
        : false;
    }
  },
  methods: {
    ...mapActions(["postLoginCredentials", "getUserMuseum"]),
    submitData: function() {
      if (this.completeSubmitInfo) {
        this.postLoginCredentials({
          username: this.usernameInput,
          password: this.passwordInput
        }).then(result => {
          if (result) {
            this.getUserMuseum().then(result => {
              if (result) {
                this.$router.push({ path: `/musaeum/${this.userMuseum}` });
              } else {
                this.museumError();
              }
            });
          } else {
            this.logInError();
          }
        });
      } else {
        this.isInputDataEmpty = true;
      }
    },
    logInError: function() {
      console.log("error");
    },
    museumError: function() {
      console.log("error museo");
    }
  }
};
</script>

<style>
#home-view {
  background: rgb(2,0,36);
  background: linear-gradient(90deg, rgba(255, 246, 235,1) 0%, rgba(250, 238, 222,1) 0%, rgba(255, 231, 199,1) 100%); 

}
</style>
