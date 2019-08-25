<template>
  <div class="dropdown" :class="{ 'is-active': dropdownActive }">
    <div class="dropdown-trigger" @click="toggleDropdown">
      <button class="button">
        <font-awesome-icon icon="user"></font-awesome-icon>
        Log In
      </button>
    </div>
    <div class="dropdown-menu" role="menu">
      <div class="dropdown-content is-centered">
        <div class="field">
          <label class="label">Username</label>
          <div class="control">
            <input
              class="input is-small"
              type="text"
              placeholder="You"
              v-model="userName"
            />
          </div>
          <label class="label">Password</label>
          <div class="control">
            <input
              class="input is-small"
              type="password"
              placeholder="****"
              v-model="password"
            />
          </div>
        </div>
        <hr class="dropdown-divider" />
        <div class="buttons has-addons is-centered">
          <button class="button is-primary" @click="logIn">
            Log in
          </button>
          <button class="button is-danger" @click="clearInput">
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderUserLogin",
  data() {
    return {
      dropdownActive: false,
      userName: "",
      password: ""
    };
  },
  methods: {
    toggleDropdown() {
      this.dropdownActive = !this.dropdownActive;
    },
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
