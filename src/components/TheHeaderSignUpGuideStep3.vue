<template>
  <div class="form">
    <section class="section"></section>
    <section class="section">
      <b-field :label="$t('navbarSignInItem15')">
        <b-input v-model="shortName"></b-input>
      </b-field>
      <b-field :label="$t('navbarSignInItem16')">
        <b-input v-model="completeName"></b-input>
      </b-field>
      <b-field :label="$t('navbarSignInItem17')">
        <b-input v-model="country"></b-input>
      </b-field>
      <b-field :label="$t('navbarSignInItem18')">
        <b-input v-model="city"></b-input>
      </b-field>
      <b-field :label="$t('navbarSignInItem19')">
        <b-upload v-model="logo">
          <figure class="image is-32x32" v-if="logo">
            <img :src="logoUrl" />
          </figure>
          <a class="button is-primary" v-else>
            <b-icon icon="image"></b-icon>
            <span>{{$t('navbarSignInItem23')}}</span>
          </a>
        </b-upload>
      </b-field>
      <b-field :label="$t('navbarSignInItem20')">
        <b-upload v-model="frontPicture">
          <span class="file-name has-text-black" v-if="frontPicture">
            {{ frontPicture.name }}
          </span>
          <a class="button is-primary" v-else>
            <b-icon icon="image"></b-icon>
            <span>{{$t('navbarSignInItem23')}}</span>
          </a>
        </b-upload>
      </b-field>
    </section>
    <section class="section">
      <b-button @click="done" size="is-large" type="is-success"
        >{{$t('navbarSignInItem21')}}</b-button
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
    ...mapActions(["postMuseum", "storeUserMuseum"]),
    createForm: function() {
      let dataForm = new FormData();
      dataForm.append("short_name", this.shortName);
      dataForm.append("complete_name", this.completeName);
      dataForm.append("country", this.country);
      dataForm.append("city", this.city);
      dataForm.append("administrator", this.administrator);
      dataForm.append("logo", this.logo);
      dataForm.append("front_picture", this.frontPicture);
      return dataForm;
    },
    done: function() {
      let data = this.createForm();
      this.storeUserMuseum(this.administrator);
      this.postMuseum(data);
      this.$emit("ready");
    }
  }
};
</script>
