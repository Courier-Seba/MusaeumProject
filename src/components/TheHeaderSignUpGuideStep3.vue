<template>
  <div class="form">
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
      <b-field :label="type">
        <b-select placeholder="Select a type" v-model="museumType">
          <option
            v-for="option in museumTypes"
            :value="option.id"
            :key="option.id"
          >
            {{ option.description }}
          </option>
        </b-select>
      </b-field>
      <b-field :label="$t('navbarSignInItem19')">
        <b-upload v-model="logo">
          <figure class="image is-32x32" v-if="logo">
            <img :src="logoUrl" />
          </figure>
          <a class="button is-primary" v-else>
            <b-icon icon="image"></b-icon>
            <span>{{ $t("navbarSignInItem23") }}</span>
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
            <span>{{ $t("navbarSignInItem23") }}</span>
          </a>
        </b-upload>
      </b-field>
    </section>
    <section class="section">
      <b-button @click="done" size="is-large" type="is-success">{{
        $t("navbarSignInItem21")
      }}</b-button>
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
      administrator: null,
      museumType: ""
    };
  },
  computed: {
    ...mapGetters(["userName", "userPk", "museumTypes"]),
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
    ...mapActions(["postMuseum", "storeUserMuseum", "getMuseumTypeList"]),
    done: function() {
      let data = {
        shortName: this.shortName,
        completeName: this.completeName,
        country: this.country,
        city: this.city,
        administrator: this.administrator,
        logo: this.logo,
        frontPicture: this.frontPicture,
        museumType: this.museumType
      };
      this.storeUserMuseum(this.administrator);
      this.postMuseum(data);
      this.$emit("ready");
    }
  },
  created() {
    this.getMuseumTypeList();
  }
};
</script>
