<template>
  <div class="columns is-multiline is-vcentered">
    <div class="column is-full">
      <p class="has-text-black">Lets add an artifact</p>
    </div>
    <div class="column is-three-quarters">
      <div class="form">
        <b-field label="Nombre del artifacto">
          <b-input v-model="name"></b-input>
        </b-field>
        <b-field label="Descripcion">
          <b-input type="textarea" v-model="description"></b-input>
        </b-field>
        <b-field label="URL a sitio externo">
          <b-input type="url" v-model="external_reference"></b-input>
        </b-field>
      </div>
    </div>
    <div class="column is-one-quarter">
      <b-field label="Fotografia">
        <figure class="image is-3by3" v-if="picture">
          <img id="img" :src="pictureUrl" />
        </figure>
        <b-upload v-model="picture" v-else>
          <a class="button is-primary">
            <b-icon icon="image"></b-icon>
            <span>Cargar imagen</span>
          </a>
        </b-upload>
      </b-field>
    </div>
    <section class="section">
      <b-button @click="done" size="is-large" type="is-success"
        >Continue</b-button
      >
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "TheHeaderSignUpGuideStep4",
  data() {
    return {
      name: "",
      picture: null,
      description: "",
      external_reference: "",
      museum: null,
      registrator: null
    };
  },
  computed: {
    ...mapGetters(["userPk", "userMuseum"]),
    pictureUrl() {
      return URL.createObjectURL(this.picture);
    }
  },
  mounted() {
    this.registrator = this.userPk;
    this.museum = this.userMuseum;
  },
  methods: {
    done: function() {
      this.$emit("ready");
    }
  }
};
</script>

<style>
#img {
  max-height: none;
}
</style>
