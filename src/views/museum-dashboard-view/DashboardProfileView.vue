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

        <div class="column">
          <b-field>
            <b-upload v-model="profilePic" drag-drop>
              <span v-if="profilePic !== null"> </span>
              <span v-else>
                <p id="profile-big-placeholder"></p>
                <p id="profile-small-placeholder"></p>
              </span>
            </b-upload>
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
      profilePic: null
    };
  },
  methods: {
    ...mapActions(["getUserProfileData"])
  },
  computed: {
    ...mapGetters(["userProfileInfo"])
  },
  created() {
    this.getUserProfileData();
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
