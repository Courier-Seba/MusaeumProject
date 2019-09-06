<template>
  <div class="columns is-vcentered">
    <div class="column is-full has-text-centered">
      <h1 class="is-size-2">
      {{ $t("museumView.welcome") }} {{ museumDetail.short_name }}
      </h1>
    </div>
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
