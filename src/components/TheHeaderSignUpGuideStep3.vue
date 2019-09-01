<template>
  <div class="form">
    <section class="section"></section>
    <section class="section">
      <b-field label="Nombre de referencia del museo">
        <b-input v-model="shortName"></b-input>
      </b-field>
      <b-field label="Nombre completo del museo">
        <b-input v-model="completeName"></b-input>
      </b-field>
      <b-field label="Pais">
        <b-input v-model="country"></b-input>
      </b-field>
      <b-field label="Ciudad">
        <b-input v-model="city"></b-input>
      </b-field>
      <b-field label="Añade un logo">
        <b-upload v-model="logo">
          <figure class="image is-32x32" v-if="logo">
            <img :src="logoUrl" />
          </figure>
          <a class="button is-primary" v-else>
            <b-icon icon="image"></b-icon>
            <span>Cargar imagen</span>
          </a>
        </b-upload>
      </b-field>
      <b-field label="Añade una imagen de presentacion">
        <b-upload v-model="frontPicture">
          <span class="file-name has-text-black" v-if="frontPicture">
            {{ frontPicture.name }}
          </span>
          <a class="button is-primary" v-else>
            <b-icon icon="image"></b-icon>
            <span>Cargar imagen</span>
          </a>
        </b-upload>
      </b-field>
    </section>
    <section class="section">
      <b-button @click="done" size="is-large" type="is-success"
        >Continue</b-button
      >
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
export default {
  name: "TheHeaderSignUpGuideStep2",
  data() {
    return {
      shortName: "",
      completeName: "",
      country: "",
      city: "",
      logo: null,
      frontPicture: null,
      administrator: null
    };
  },
  computed: {
    ...mapGetters(["userName", "userPk"]),
    logoUrl() {
      return URL.createObjectURL(this.logo);
    }
  },
  mounted() {
    this.shortName = this.userName;
    this.completeName = this.userName + " musaeum";
    this.administrator = this.userPk;
  },
  methods: {
    ...mapActions(["storeUserMuseum"]),
    done: function() {
      this.storeUserMuseum(this.administrator);
      this.$emit("ready");
    }
  }
};
</script>
