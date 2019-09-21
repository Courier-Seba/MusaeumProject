Dashboard of the museum information. Can modify info.
<template>
  <div class="columns is-multiline">
    <div class="column is-full">
      <h1 class="is-size-3">{{ $t("dashboard.museumInfoView.title") }}</h1>
    </div>
    <div class="column is-full">
      <museum-data-form></museum-data-form>
    </div>
    <div class="column is-full">
      <museum-card
        :shortName="userMuseum.short_name"
        :country="userMuseum.country"
        :city="userMuseum.city"
        :logo="userMuseum.logo"
        :front="userMuseum.front_picture"
        :museumLevel="userMuseum.museum_level"
        :museumType="userMuseum.museum_type"
        :id="userMuseum.id"
      ></museum-card>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import MuseumCard from "@/components/for-ui/MuseumCard";
import MuseumDataForm from "@/components/for-layout/MuseumDataForm";
export default {
  name: "DashboardMuseumInfoView",
  components: {
    MuseumCard,
    MuseumDataForm
  },
  computed: {
    ...mapGetters(["userMuseum"])
  }
};
</script>
