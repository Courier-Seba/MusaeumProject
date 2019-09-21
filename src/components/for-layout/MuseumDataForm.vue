This component modify user museum data in store.
<template>
  <div class="columns">
    <div class="column is-one-quarter">
      <b-field :label="$t('museumForm.logo')">
        <b-upload v-model="logo">
          <b-button icon-right="exchange-alt"></b-button>
        </b-upload>
      </b-field>
    </div>
    <div class="column is-half">
      <b-field :label="$t('museumForm.shortName')" label-position="on-border">
        <b-input v-model="shortName"></b-input>
        <b-button>{{ $t("museumForm.update") }}</b-button>
      </b-field>
      <b-field :label="$t('museumForm.shortName')" label-position="on-border">
        <b-input v-model="shortName"></b-input>
      </b-field>
    </div>
    <div class="column is-one-quarter">
      <b-field :label="$t('museumForm.front')">
        <b-upload v-model="front">
          <b-button icon-right="exchange-alt"></b-button>
        </b-upload>
      </b-field>
    </div>
  </div>
</template>

<script>
export default {
  name: "MuseumDataForm",
  data() {
    return {
      shortName: "",
      longName: "",
      logo: null,
      logoUrl: null,
      front: null,
      frontUrl: null,
    };
  }
};
</script>
