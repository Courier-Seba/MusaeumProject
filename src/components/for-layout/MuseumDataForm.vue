This component modify user museum data in store.
<template>
  <div>
    <b-field :label="$t('museumForm.shortName')" label-position="on-border">
      <b-input v-model="shortName"></b-input>
      <b-button>{{ $t("museumForm.update") }}</b-button>
    </b-field>
    <b-field :label="$t('museumForm.shortName')" label-position="on-border">
      <b-input v-model="shortName"></b-input>
    </b-field>
    <b-field :label="$t('museumForm.logo')">
      <b-upload>
      </b-upload>
    </b-field>
  </div>
</template>

<script>
export default {
  name: "MuseumDataForm",
  data() {
    return {
      shortName: ""
    };
  }
};
</script>
