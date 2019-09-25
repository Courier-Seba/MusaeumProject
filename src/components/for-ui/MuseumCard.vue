Card for a presentation of a museum.
<template>
  <div class="museum-level">
    <div class="columns is-centered">
      <div class="column is-two-thirds">
        <div class="columns is-multiline museum-info">
          <div class="column is-full">
            <div class="media">
              <div class="media-left">
                <figure class="image is-64x64">
                  <img :src="logo" alt="" />
                </figure>
              </div>
              <div class="media-content">
                <div class="has-text-justified has-text-black">
                  <h1 class="is-capitalized has-text-weight-semibold is-size-2">
                    {{ shortName }}
                  </h1>
                </div>
                <h3 class="is-size-3">
                  {{ level }}
                </h3>
                <p class="is-capitalized has-text-black is-size-5">
                  {{ $t("museumBox.museumZone.country") }} {{ country }}
                </p>
                <p class="is-capitalized has-text-black is-size-5">
                  {{ $t("museumBox.museumZone.city") }} {{ city }}
                </p>
              </div>
              <div class="media-right">
                <app-star-modal :museum="id"></app-star-modal>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-full">
          <div class="visit-button has-text-centered">
            <b-button
              tag="router-link"
              :to="link"
              type="is-link"
              size="is-large"
              icon-right="angle-double-right"
              >{{ $t("museumBox.visit") }}</b-button
            >
          </div>
        </div>
      </div>
      <div class="column is-one-thirds">
        <figure class="image is-16by9">
          <img :src="front" alt="" />
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
import AppStarModal from "@/components/for-ui/AppStarModal";
export default {
  name: "MuseumCard",
  data() {
    return {
      level: "",
      link: ""
    };
  },
  components: {
    AppStarModal
  },
  props: {
    shortName: String,
    country: String,
    city: String,
    logo: String,
    front: String,
    museumLevel: String,
    museumType: Number,
    id: Number
  },
  mounted() {
    switch (this.museumLevel) {
      case "MM":
        this.level = this.$t("museumBox.museumLevel.MM");
        break;
      case "CL":
        this.level = this.$t("museumBox.museumLevel.CL");
        break;
      case "MU":
        this.level = this.$t("museumBox.museumLevel.MU");
        break;
      case "WH":
        this.level = this.$t("museumBox.museumLevel.WH");
        break;
      default:
        this.level = "Error";
    }
    this.link = `/museum/${this.id}`;
  }
};
</script>

<style lang="css">
.museum-level {
  -webkit-box-shadow: 0px 10px 19px 5px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 10px 19px 5px rgba(0,0,0,0.75);
  box-shadow: 0px 10px 19px 5px rgba(0,0,0,0.75);
  margin: 2.50rem
}
.museum-info {
  margin: 1rem;
}
</style>
