<template>
  <div class="museum-level">
    <div class="columns is-centered">
      <div class="column is-two-thirds">
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
          <div class="media-right" @click="giveStar">
            <b-icon icon="star" :type="starType"></b-icon>
          </div>
        </div>
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
      <div class="column is-one-thirds">
        <figure class="image is-16by9">
          <img :src="front" alt="" />
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppMuseumLevel",
  data() {
    return {
      level: "",
      star: false,
      starType: "is-black",
      link: ""
    };
  },
  props: {
    shortName: String,
    country: String,
    city: String,
    logo: String,
    front: String,
    museumLevel: String,
    museumType: Number,
    id: String
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
  },
  methods: {
    giveStar: function() {
      this.star = !this.star;
      this.star ? (this.starType = "is-success") : (this.starType = "is-black");
    }
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
.visit-button {
  margin-top: 6.5rem;
}
</style>
