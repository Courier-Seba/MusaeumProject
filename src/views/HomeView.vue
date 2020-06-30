<template>
  <v-main>
  <v-container 
    id="home-view"
    class="fill-height"
    fluid
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-col>
        <v-card>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt nulla architecto, debitis neque, perferendis ipsum vel ducimus eaque obcaecati beatae itaque delectus deserunt numquam vero magni repudiandae quaerat. Esse, ducimus!
        </v-card>
      </v-col>
      <v-col>
        <v-card>
          <v-card-title>Log In</v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <v-form>
              <v-text-field
                v-model="usernameInput"
                label="Username"
                :rules="[rules.required]"
                :error="isInputDataEmpty"
              ></v-text-field>
              <v-text-field
                v-model="passwordInput"
                label="Password"
                :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
                :type="showPass ? 'text' : 'password'"
                @click:append="showPass = !showPass"
                :rules="[rules.required]"
                :error="isInputDataEmpty"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn color="accent" @click="submitData">Submit</v-btn>
            <v-btn color="info">Register</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  </v-main>
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
        required: value => !!value || "Required",
      }
    }
  },
  computed: {
    ...mapGetters(["userMuseum"]),
    completeSubmitInfo() {
      return ((this.usernameInput !== "") && (this.passwordInput !== "")) 
        ? true : false;
    }
  },
  methods: {
    ...mapActions(["postLoginCredentials", "getUserMuseum"]),
    submitData: function() {
      if (this.completeSubmitInfo) { 
        this.postLoginCredentials({
          username: this.usernameInput,
          password: this.passwordInput
        }).then(result => { if (result) {
          this.getUserMuseum().then(result => {
            if (result) {
              this.$router.push({path: `/musaeum/${this.userMuseum}`})
            }
            else {
              this.museumError()
            }
          })
          } else {
            this.logInError()
          }
        })
      } else { 
        this.isInputDataEmpty = true
      }
    },
    logInError: function() {
      console.log("error")
    },
    museumError: function() {
      console.log("error museo")
    }
  },

};
</script>

<style>
</style>
