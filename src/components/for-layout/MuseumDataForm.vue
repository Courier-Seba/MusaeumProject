This component modify user museum data in store.
<template>
  <div class="columns is-vcentered is-multiline">
    <div class="column is-one-quarter">
      <b-field :label="$t('museumForm.logo')">
        <b-upload v-model="logo">
          <p class="button">
            <b-icon icon="exchange-alt"></b-icon>
          </p>
        </b-upload>
      </b-field>
    </div>
    <div class="column is-half">
      <b-field :label="$t('museumForm.shortName')" label-position="on-border">
        <b-input v-model="shortName"></b-input>
      </b-field>
      <b-field :label="$t('museumForm.longName')" label-position="on-border">
        <b-input v-model="longName"></b-input>
      </b-field>
      <b-field :label="$t('museumForm.city')" label-position="on-border">
        <b-input v-model="city"></b-input>
      </b-field>
    </div>
    <div class="column is-one-quarter">
      <b-field :label="$t('museumForm.front')">
        <b-upload v-model="front">
          <p class="button">
            <b-icon icon="exchange-alt"></b-icon>
          </p>
        </b-upload>
      </b-field>
    </div>
    <div class="column is-full">
      <b-button @click="confirmation">{{ $t("museumForm.update") }}</b-button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "MuseumDataForm",
  data() {
    return {
      shortName: "",
      longName: "",
      logo: "",
      front: "",
      city: ""
    };
  },
  watch: {
    shortName: function() {
      this.$emit("change", { value: "shortName", data: this.shortName });
    },
    longName: function() {
      this.$emit("change", { value: "longName", data: this.longName });
    },
    logo: function() {
      this.$emit("change", { value: "logo", data: this.logo });
    },
    front: function() {
      this.$emit("change", { value: "front", data: this.front });
    },
    city: function() {
      this.$emit("change", { value: "city", data: this.city });
    }
  },
  methods: {
    ...mapActions(["updateMuseumInfo"]),
    updateInfo: function() {
      let data = {
        short_name: this.shortName
      };
      this.updateMuseumInfo(data);
    },
    confirmation() {
      this.$buefy.dialog.confirm({
        message: this.$t("museumForm.confirm"),
        onConfirm: this.updateInfo
      });
    }
  }
};
</script>
