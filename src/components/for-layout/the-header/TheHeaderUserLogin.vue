Log in of a user.
<template>
  <b-dropdown position="is-bottom-left" aria-role="menu">
    <div class="navbar-item" slot="trigger" role="button">
      <b-button type="is-primary" size="is-medium" outlined>
        {{ $t("navbar.logIn.logIn") }}</b-button
      >
    </div>

    <b-dropdown-item aria-role="menu-item" :focusable="true" custom paddingless>
      <div class="modal-card" style="width:300px;">
        <section class="modal-card-body">
          <b-field :label="$t('navbar.logIn.username')">
            <b-input
              type="text"
              :placeholder="$t('navbar.logIn.username')"
              v-model="userName"
              required
            >
            </b-input>
          </b-field>

          <b-field :label="$t('navbar.logIn.password')">
            <b-input
              type="password"
              password-reveal
              :placeholder="$t('navbar.logIn.password')"
              v-model="password"
              required
            >
            </b-input>
          </b-field>

          <b-checkbox>{{ $t("navbar.logIn.remember") }}</b-checkbox>
        </section>
        <footer class="modal-card-foot">
          <button class="button is-primary" @click="logIn">
            {{ $t("navbar.logIn.logIn") }}
          </button>
          <button class="button is-danger" @click="clearInput">
            {{ $t("navbar.logIn.cancel") }}
          </button>
        </footer>
      </div>
    </b-dropdown-item>
  </b-dropdown>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "TheHeaderUserLogin",
  data() {
    return {
      dropdownActive: false,
      userName: "",
      password: ""
    };
  },
  methods: {
    ...mapActions(["activateUser", "postLoginCredentials", "getUserMuseum"]),
    errorInput() {
      this.$buefy.toast.open({
        duration: 5000,
        message: this.$t("navbar.logIn.error"),
        position: "is-bottom",
        type: "is-danger"
      });
    },
    clearInput() {
      this.userName = "";
      this.password = "";
    },
    logIn() {
      this.postLoginCredentials({
        userName: this.userName,
        password: this.password
      }).then(response => {
        response ? this.activateUser() : this.errorInput();
        this.getUserMuseum();
      });
    }
  }
};
</script>
