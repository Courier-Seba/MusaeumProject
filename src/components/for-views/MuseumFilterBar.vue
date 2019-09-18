<template>
  <div class="container">
    <div class="field">
      <div class="control">
        <b-input v-model="input" icon="search" rounded> </b-input>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "MuseumFilterBar",
  data() {
    return {
      input: ""
    };
  },
  methods: {
    ...mapActions("getSearchMuseumList")
  },
  watch: {
    input: function() {
      this.getSearchMuseumList();
    }
  }
};
</script>
