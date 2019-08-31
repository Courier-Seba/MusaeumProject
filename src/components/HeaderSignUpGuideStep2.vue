<template>
  <div class="section">
    <div class="form">
      <b-field label="Su nombre">
        <b-input v-model="first_name"></b-input>
      </b-field>
      <b-field label="Su apellido">
        <b-input v-model="last_name"></b-input>
      </b-field>
      <b-field label="Su biografia">
        <b-input v-model="biografia"></b-input>
      </b-field>
      <b-field label="Añade una image de perfil">
        <b-upload v-model="profile_image" native drag-drop>
          <section class="section">
            <div class="content has-text-centered">
              <p>
                <b-icon icon="upload" size="is-large"> </b-icon>
              </p>
              <p>Arrastra o clickea</p>
            </div>
          </section>
        </b-upload>
      </b-field>
    </div>
    <b-button @click="done" type="is-success">Continue</b-button>
  </div>
</template>

<script>
export default {
  name: "HeaderSignUpGuideStep2",
  data() {
    return {
      first_name: "",
      last_name: "",
      profile_image: null,
      biography: ""
    };
  },
  methods: {
    done: function() {
      this.$emit("ready");
    }
  }
};
</script>
