<template>
  <div class="columns is-multiline">
    <div class="column is-full has-text-centered">
      <h1 class="is-size-4 title is-uppercase">
        {{ $t("dashboard.homeView.title") }}
      </h1>
    </div>
    <div class="column is-full has-text-centered">
      <p>{{ $t("dashboard.homeView.whatToDo") }}</p>
    </div>
    <div
      class="column is-full"
      v-for="announcement in news"
      :key="announcement.id"
    >
      <app-announcement
        :title="announcement.title"
        :body="announcement.body"
        :date="announcement.date"
      ></app-announcement>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import AppAnnouncement from "@/components/for-ui/AppAnnouncement";

export default {
  name: "MuseumView",
  components: {
    AppAnnouncement
  },
  computed: {
    ...mapGetters(["news"])
  },
  methods: {
    ...mapActions(["getNews"])
  },
  mounted() {
    this.getNews();
  }
};
</script>
