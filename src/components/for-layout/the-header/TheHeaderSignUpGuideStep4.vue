Fourth step. first artifact creation.
<template>
  <div class="columns is-multiline is-vcentered">
    <div class="column is-full">
      <p class="has-text-black">{{ $t("navbarSignInItem24") }}</p>
    </div>
    <div class="column is-three-quarters">
      <div class="form">
        <b-field :label="$t('navbarSignInItem25')">
          <b-input v-model="name"></b-input>
        </b-field>
        <b-field :label="$t('navbarSignInItem26')">
          <b-input type="textarea" v-model="description"></b-input>
        </b-field>
        <b-field :label="$t('navbarSignInItem27')">
          <b-input type="url" v-model="externalReference"></b-input>
        </b-field>
      </div>
    </div>
    <div class="column is-one-quarter">
      <b-field :label="$t('navbarSignInItem28')">
        <figure class="image is-3by3" v-if="picture">
          <img id="img" :src="pictureUrl" />
        </figure>
        <b-upload v-model="picture" v-else>
          <a class="button is-primary">
            <b-icon icon="image"></b-icon>
            <span>{{ $t("navbarSignInItem23") }}</span>
          </a>
        </b-upload>
      </b-field>
    </div>
    <div class="container has-text-centered">
      <b-button @click="done" size="is-large" type="is-success">{{
        $t("navbarSignInItem21")
      }}</b-button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
export default {
  name: "TheHeaderSignUpGuideStep4",
  data() {
    return {
      name: "",
      picture: null,
      description: "",
      externalReference: "",
      museum: "",
      registrator: null
    };
  },
  computed: {
    ...mapGetters(["userPk", "userMuseum"]),
    pictureUrl() {
      return URL.createObjectURL(this.picture);
    }
  },
  methods: {
    ...mapActions(["postArtifact"]),
    done: function() {
      this.registrator = this.userPk;
      this.museum = this.userMuseum;
      let data = {
        name: this.name,
        description: this.description,
        registrator: this.registrator,
        externalReference: this.externalReference,
        museum: this.museum,
        picture: this.picture
      };
      this.postArtifact(data);
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
