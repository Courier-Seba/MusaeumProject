<template>
  <div class="form">
    <b-field label="Nombre de usuario">
      <b-input type="text" v-model="userName" placeholder="Usuario" required>
      </b-input>
    </b-field>

    <b-field label="Email">
      <b-input
        type="email"
        v-model="email"
        :value="email"
        placeholder="Email"
        required
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
      >
      </b-input>
    </b-field>
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
  }
};
</script>
