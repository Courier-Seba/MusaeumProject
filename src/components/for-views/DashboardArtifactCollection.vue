<template>
  <b-field :label="$t('collectionInput.label')" label-position="on-border">
    <b-input v-model="title"></b-input>
    <span class="control">
      <b-button
        @click="createCollection"
        icon-right="plus"
        type="is-primary"
      ></b-button>
    </span>
  </b-field>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "DashboardArtifactCollection",
  data() {
    return {
      title: ""
    };
  },
  methods: {
    ...mapActions(["postUserCollection"]),
    createCollection: function() {
      this.postUserCollection(this.title);
    }
  }
};
</script>
