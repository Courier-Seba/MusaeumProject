<template>
  <div class="dropdown" :class="{ 'is-active': dropdownActive }">
    <div class="dropdown-trigger" @click="toggleDropdown">
      <button class="button">
        <font-awesome-icon icon="user"></font-awesome-icon>
        Log In
      </button>
    </div>
    <div class="dropdown-menu" id="dropdown-menu2" role="menu">
      <div class="dropdown-content is-centered">
        <div class="field">
          <label class="label">Username</label>
          <div class="control">
            <input class="input is-small" type="email" placeholder="You" />
          </div>
          <label class="label">Password</label>
          <div class="control">
            <input class="input is-small" type="password" placeholder="****" />
          </div>
        </div>
        <hr class="dropdown-divider" />
        <div class="buttons has-addons is-centered">
          <button class="button is-primary">
            Log in
          </button>
          <button class="button is-danger">
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
      username: "",
      password: "",
      email: ""
    };
  },
  methods: {
    toggleDropdown: function() {
      this.dropdownActive = !this.dropdownActive;
    }
  }
};
</script>
