<template>
  <div class="section">
    <b-field label="Nombre de usuario">
      <b-input
        type="text"
        v-model="userName"
        placeholder="Usuario"
        required
        icon="user"
      >
      </b-input>
    </b-field>

    <b-field label="Email">
      <b-input
        type="email"
        v-model="email"
        :value="email"
        placeholder="Email"
        required
        icon="envelope"
      >
      </b-input>
    </b-field>

    <b-field label="Contraseña">
      <b-input
        type="password"
        :value="password1"
        password-reveal
        placeholder="Contraseña"
        v-model="password1"
        required
        icon="key"
      >
      </b-input>
    </b-field>
    <b-field label="Repita la contraseña">
      <b-input
        type="password"
        :value="password2"
        password-reveal
        placeholder="Contraseña"
        required
        v-model="password2"
        icon="key"
      >
      </b-input>
    </b-field>
    <hr />
    <div class="container has-text-centered">
      <b-button size="is-large" type="is-success" @click="proceedRegistration"
        >Registrarse!!</b-button
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderSignUpFormStep1",
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
