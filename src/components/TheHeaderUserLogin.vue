<template>
  <b-dropdown position="is-bottom-left" aria-role="menu">
    <a class="navbar-item" slot="trigger" role="button">
      <span>Login</span>
      <b-icon icon="menu-down"></b-icon>
    </a>

    <b-dropdown-item aria-role="menu-item" :focusable="true" custom paddingless>
      <div class="modal-card" style="width:300px;">
        <section class="modal-card-body">
          <b-field label="Usuario">
            <b-input
              type="text"
              placeholder="Usuario"
              v-model="userName"
              required
            >
            </b-input>
          </b-field>

          <b-field label="Contraseña">
            <b-input
              type="password"
              password-reveal
              placeholder="Contraseña"
              v-model="password"
              required
            >
            </b-input>
          </b-field>

          <b-checkbox>Remember me</b-checkbox>
        </section>
        <footer class="modal-card-foot">
          <button class="button is-primary" @click="logIn">Login</button>
          <button class="button is-danger" @click="clearInput">Cancel</button>
        </footer>
      </div>
    </b-dropdown-item>
  </b-dropdown>
</template>

<script>
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
    clearInput() {
      this.userName = "";
      this.password = "";
    },
    logIn() {
      this.$store.dispatch("postLoginCredentials", {
        userName: this.userName,
        password: this.password
      });
    }
  }
};
</script>
