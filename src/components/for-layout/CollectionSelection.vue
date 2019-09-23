<template>
  <b-field>
    <b-select v-model="selected">
      <option
        v-for="collection in collections"
        :key="collection.id"
        :value="collection.id"
      >
        {{ collection.title }}
      </option>
    </b-select>
  </b-field>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "CollectionSelection",
  data() {
    return {
      selected: null
    };
  },
  props: {
    collections: Array,
    intial: Number,
    artifactId: Number
  },
  methods: {
    ...mapActions(["updateArtifact"])
  },
  watch: {
    selected: function() {
      this.updateArtifact({
        type: "collection",
        artifact: this.artifactId,
        data: this.selected
      });
      this.$buefy.toast.open({
        duration: 1000,
        message: this.$t("collectionSelector.done"),
        position: "is-bottom",
        type: "is-danger"
      });
    }
  }
};
</script>
