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
    initial: Number,
    artifactId: Number
  },
  methods: {
    ...mapActions(["updateArtifact"]),
    changeCollection: function() {
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
  },
  watch: {
    selected: function(newVal, oldVal) {
      if (this.selected !== null) {
        if (newVal === oldVal) {
          this.changeCollection();
        }
      }
    }
  },
  created() {
    this.selected = this.initial;
  }
};
</script>
