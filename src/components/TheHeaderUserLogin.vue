<template>
  <b-dropdown position="is-bottom-left" aria-role="menu">
    <div class="navbar-item" slot="trigger" role="button">
      <b-button type="is-primary" outlined> {{ $t("navbarItem03") }}</b-button>
    </div>

    <b-dropdown-item aria-role="menu-item" :focusable="true" custom paddingless>
      <div class="modal-card" style="width:300px;">
        <section class="modal-card-body">
          <b-field :label="$t('navbarLogInItem01')">
            <b-input
              type="text"
              :placeholder="$t('navbarLogInItem02')"
              v-model="userName"
              required
            >
            </b-input>
          </b-field>

          <b-field :label="$t('navbarLogInItem03')">
            <b-input
              type="password"
              password-reveal
              :placeholder="$t('navbarLogInItem04')"
              v-model="password"
              required
            >
            </b-input>
          </b-field>

          <b-checkbox>{{ $t('navbarLogInItem05') }}</b-checkbox>
        </section>
        <footer class="modal-card-foot">
          <button class="button is-primary" @click="logIn">{{ $t('navbarLogInItem06') }}</button>
          <button class="button is-danger" @click="clearInput">{{ $t('navbarLogInItem07') }}</button>
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
