This view allows the user to modify his profile information.
<template>
  <div class="columns is-multiline" v-bind:class="{ blured: isLoading }">
    <div class="column is-full">
      <h1 class="subtitle is-size-3">
        {{ $t("dashboard.profileView.title") }}
      </h1>
    </div>

    <div class="column is-full">
      <div class="columns">
        <div class="column">
          <span v-if="profilePicUrl !== null">
            <figure class="image is-128x128">
              <img :src="profilePicUrl" />
            </figure>
            <figure class="image is-32x32">
              <img :src="profilePicUrl" />
            </figure>
          </span>
          <span v-else>
            <p id="profile-big-placeholder"></p>
            <p id="profile-small-placeholder"></p>
          </span>
          <b-field class="file">
            <b-upload v-model="inputProfilePic" @input="inputPictureTrigger">
              <a class="button is-primary">
                <b-icon icon="upload"></b-icon>
                <span>Click to upload</span>
              </a>
            </b-upload>
            <b-button
              v-if="isUploadPictureReady"
              type="is-primary"
              icon-right="check"
              @click="changeProfileImage"
            ></b-button>
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
            <b-button type="is-primary" @click="changeFirstName">{{
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
            <b-button type="is-primary" @click="changeLastName">{{
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
      isLoadingUserData: true,
      isLoadingProfile: true,
      firstName: "",
      lastName: "",
      inputProfilePic: null,
      profilePicUrl: null,
      isUploadPictureReady: false
    };
  },
  computed: {
    ...mapGetters([
      "userProfile",
      "userName",
      "userEmail",
      "userFirstName",
      "userLastName"
    ]),
    isLoading() {
      return this.isLoadingUserData === true && this.isLoadingProfile === true
        ? true
        : false;
    }
  },
  methods: {
    ...mapActions([
      "getUserProfile",
      "getUserData",
      "updateFirstName",
      "updateLastName",
      "updateProfilePicture"
    ]),
    inputPictureTrigger: function() {
      this.profilePicUrl = URL.createObjectURL(this.inputProfilePic);
      this.isUploadPictureReady = true;
    },
    launchConnError: function() {
      this.$buefy.toast.open({
        duration: 5000,
        message: this.$t("common.connError"),
        position: "is-bottom",
        type: "is-danger"
      });
    },
    changeFirstName: function() {
      this.updateFirstName(this.firstName).then(result => {
        return result ? null : this.launchConnError();
      });
    },
    changeLastName: function() {
      this.updateLastName(this.lastName).then(result => {
        return result ? null : this.launchConnError();
      });
    },
    changeProfileImage: function() {
      this.$buefy.dialog.confirm({
        title: this.$t("changeProfileImageTitle"),
        type: "is-danger",
        onConfirm: () =>
          this.updateProfilePicture(this.inputProfilePic).then(result => {
            result ? null : this.launchConnError();
          })
      });
    },
    loadUserData: function() {
      this.firstName = this.userFirstName;
      this.lastName = this.userLastName;
      this.email = this.userEmail;
      this.isLoadingUserData = false;
    },
    loadUserProfile: function() {
      this.profilePicUrl = this.userProfile.picture;
      this.isLoadingProfile = false;
    }
  },

  created() {
    this.getUserData().then(result => {
      !result ? this.launchConnError() : this.loadUserData();
    });
    this.getUserProfile().then(result => {
      !result ? this.launchConnError() : this.loadUserProfile();
    });
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
.blured {
  filter: blur(8px);
  -webkit-filter: blur(8px);
}
</style>
