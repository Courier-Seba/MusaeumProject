<template>
  <b-field>
    <b-input
      placeholder="$t('dashboard.artifactView.collectionPlaceholder')"
      v-model="title"
    >
    </b-input>
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
import { mapGetters, mapActions } from "vuex";
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
      postUserCollection(this.title)
    }
  }
};
</script>
