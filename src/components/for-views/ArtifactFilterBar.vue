<template>
  <b-field>
    <b-input v-model="input" icon="search" rounded expanded></b-input>
  </b-field>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "ArtifactFilterBar",
  data() {
    return {
      input: ""
    };
  },
  methods: {
    ...mapActions(["getSearchArtifactList"])
  },
  watch: {
    input: function() {
      this.getSearchArtifactList(this.input);
    }
  }
};
</script>
