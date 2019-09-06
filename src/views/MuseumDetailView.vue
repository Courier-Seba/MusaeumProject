<template>
  <div class="columns">
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
export default {
  name: "MuseumDetailView",
  computed: {
    ...mapGetters(["museumDetail"])
  },
  props: {
    id: String
  },
  methods: {
    ...mapActions(["getMuseumData"])
  },
  mounted() {
    this.getMuseumData(this.id);
  }
};
</script>
