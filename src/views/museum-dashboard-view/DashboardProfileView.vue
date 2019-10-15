This view allows the user to modify his profile information.
<template>
  <div class="columns is-multiline">
    <div class="column is-full">
      <h1 class="subtitle is-size-3">
        {{ $t("dashboard.profileView.title") }}
      </h1>
    </div>

    <div class="column is-full">
      <div class="columns">
        <div class="column">
          <b-field>
            <b-upload
              accept="png, svg, gif, jpg"
              @input="createInternalURL"
            >
              <span v-if="profilePic !== null">
                <div class="level">
                  <span class="level-right">
                    <figure class="image is-128x128">
                      <img :src="profilePicUrl" />
                    </figure>
                  </span>
                  <span class="level-left">
                    <figure class="image is-32x32">
                      <img :src="profilePicUrl" />
                    </figure>
                  </span>
                </div>
              </span>
              <span v-else>
                <p id="profile-big-placeholder"></p>
                <p id="profile-small-placeholder"></p>
              </span>
            </b-upload>
          </b-field>
        </div>

        <div class="column is-four-fifths">
          <b-field
            position="is-centered"
            horizontal
            expanded
            :label="$t('dashboard.profileView.firstName')"
          >
            <b-input v-model="firstName"></b-input>
            <b-button type="is-primary">{{
              $t("dashboard.profileView.update")
            }}</b-button>
          </b-field>
          <b-field
            position="is-centered"
            horizontal
            expanded
            grouped
            :label="$t('dashboard.profileView.lastName')"
          >
            <b-input v-model="lastName"></b-input>
            <b-button type="is-primary">{{
              $t("dashboard.profileView.update")
            }}</b-button>
          </b-field>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "DashboardProfileView",
  data() {
    return {
      firstName: "",
      lastName: "",
      profilePic: null,
      profilePicUrl: ""
    };
  },
  methods: {
    ...mapActions(["getUserProfileData"]),
    createInternalURL: function(image) {
      this.profilePic = image[0];
      this.profilePicUrl = URL.createObjectURL(this.profilePic);
    }
  },
  computed: {
    ...mapGetters(["userProfileInfo"])
  },
  created() {
    this.getUserProfileData();
  },
  mounted() {
    if (
      this.userProfileInfo.picture !== null &&
      typeof this.userProfileInfo.picture === "string"
    ) {
      this.profilePicUrl = this.userProfileInfo.picture;
      this.profilePic = [];
    }
  }
};
</script>

<style>
#profile-big-placeholder {
  display: inline-block;
  height: 128px;
  width: 128px;
  background-color: grey;
  margin: 10px;
}
#profile-small-placeholder {
  display: inline-block;
  height: 32px;
  width: 32px;
  background-color: grey;
  border-radius: 50%;
  margin: 10px;
}
</style>
