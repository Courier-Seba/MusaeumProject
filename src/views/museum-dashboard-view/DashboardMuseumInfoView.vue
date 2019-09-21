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
        :shortName="shortName"
        :country="country"
        :city="city"
        :logo="logoUrl"
        :front="frontUrl"
        :museumLevel="museumLevel"
        :museumType="museumType"
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
  data() {
    return {
      shotName: "",
      longName: "",
      logo: null,
      logoUrl: null,
      front: null,
      frontUrl: null
    };
  },
  computed: {
    ...mapGetters(["userMuseum"])
  },
  created() {
    this.shortName = this.userMuseum.short_name;
    this.country = this.userMuseum.country;
    this.city = this.userMuseum.city;
    this.logoUrl = this.userMuseum.logo;
    this.frontUrl = this.userMuseum.front_picture;
    this.museumLevel = this.userMuseum.museum_level;
    this.museumType = this.userMuseum.museum_type;
  }
};
</script>
