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
      logo: null,
      front: null,
      city: "",
      updatedDataPayload: {} // New data to push to backend
    };
  },
  watch: {
    shortName: function() {
      this.$emit("change", { value: "shortName", data: this.shortName });
      this.appendNewData("shortName", this.shortName);
    },
    longName: function() {
      this.$emit("change", { value: "longName", data: this.longName });
      this.appendNewData("longName", this.longName);
    },
    logo: function() {
      this.$emit("change", { value: "logo", data: this.logo });
      this.appendNewData("logo", this.logo);
    },
    front: function() {
      this.$emit("change", { value: "front", data: this.front });
      this.appendNewData("front", this.front);
    },
    city: function() {
      this.$emit("change", { value: "city", data: this.city });
      this.appendNewData("city", this.city);
    }
  },
  methods: {
    ...mapActions(["updateMuseumInfo"]),
    updateInfo: function() {
      this.updateMuseumInfo(this.updatedDataPayload);
    },
    confirmation: function() {
      this.$buefy.dialog.confirm({
        message: this.$t("museumForm.confirm"),
        onConfirm: this.updateInfo
      });
    },
    appendNewData: function(type, value) {
      switch (type) {
        case "shortName":
          this.updatedDataPayload.shortName = value;
          break;
        case "longName":
          this.updatedDataPayload.longName = value;
          break;
        case "logo":
          this.updatedDataPayload.logo = value;
          break;
        case "front":
          this.updatedDataPayload.logo = value;
          break;
        case "city":
          this.updatedDataPayload.city = value;
          break;
        default:
          this.updatedDataPayload;
          break;
      }
    }
  }
};
</script>
