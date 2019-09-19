First step. User creation.
<template>
  <div class="section">
    <b-field :label="$t('navbarSignInItem02')">
      <b-input
        type="text"
        v-model="userName"
        :placeholder="$t('navbarSignInItem03')"
        required
        icon="user"
      >
      </b-input>
    </b-field>

    <b-field :label="$t('navbarSignInItem04')">
      <b-input
        type="email"
        v-model="email"
        :value="email"
        :placeholder="$t('navbarSignInItem05')"
        required
        icon="envelope"
      >
      </b-input>
    </b-field>

    <b-field :label="$t('navbarSignInItem06')">
      <b-input
        type="password"
        :value="password1"
        password-reveal
        :placeholder="$t('navbarSignInItem07')"
        v-model="password1"
        required
        icon="key"
      >
      </b-input>
    </b-field>
    <b-field :label="$t('navbarSignInItem08')">
      <b-input
        type="password"
        :value="password2"
        password-reveal
        :placeholder="$t('navbarSignInItem09')"
        required
        v-model="password2"
        icon="key"
      >
      </b-input>
    </b-field>
    <hr />
    <div class="container has-text-centered">
      <b-button
        size="is-large"
        type="is-success"
        @click="proceedRegistration"
        >{{ $t("navbarSignInItem10") }}</b-button
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "TheHeaderSignUpFormStep1",
  data() {
    return {
      userName: "",
      email: "",
      password1: "",
      password2: ""
    };
  },
  methods: {
    proceedRegistration: function() {
      if (this.userName !== "") {
        if (this.email !== "") {
          if (this.password1 === this.password2 && this.password1 !== "") {
            this.$store.dispatch("postUserRegistration", {
              userName: this.userName,
              email: this.email,
              password1: this.password1,
              password2: this.password2
            });
            this.$emit("ready");
          } else {
            this.errorToast("Las contraseñas son incorrectas");
          }
        } else {
          this.errorToast("Ingrese un mail valido");
        }
      } else {
        this.errorToast("Ingrese nombre de usuario");
      }
    },
    errorToast(error) {
      this.$buefy.toast.open({
        duration: 5000,
        message: error,
        type: "is-danger"
      });
    }
  }
};
</script>
