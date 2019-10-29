This is the side menu for the museum dashboard view.
<template>
  <b-menu id="menu">
    <b-menu-list label="Menu">
      <b-menu-item tag="router-link" to="/my-museum/home">
        <template slot="label">
          {{ $t("dashboard.menu.home") }}
          <b-icon class="is-pulled-right" icon="home"></b-icon>
        </template>
      </b-menu-item>

      <b-menu-item
        :active="isProfileActive"
        :expanded="isProfileActive"
        @click="isProfileActive = !isProfileActive"
      >
        <template slot="label" slot-scope="props">
          {{ $t("dashboard.menu.profile") }}
          <b-icon
            class="is-pulled-right"
            :icon="props.expanded ? 'arrow-circle-up' : 'arrow-circle-down'"
          >
          </b-icon>
        </template>
        <b-menu-item tag="router-link" to="/my-museum/profile">
          <template slot="label">
            <p class="is-disabled">
              {{ $t("dashboard.menu.profileData") }}
              <b-icon class="is-pulled-right" icon="id-badge"></b-icon>
            </p>
          </template>
        </b-menu-item>
        <b-menu-item>
          <template slot="label">
            <p class="is-disabled">
              {{ $t("dashboard.menu.favourites") }}
              <b-icon class="is-pulled-right" icon="star"></b-icon>
            </p>
          </template>
        </b-menu-item>
        <b-menu-item>
          <template slot="label">
            <p class="is-disabled">
              {{ $t("dashboard.menu.config") }}
              <b-icon class="is-pulled-right" icon="cogs"></b-icon>
            </p>
          </template>
        </b-menu-item>
      </b-menu-item>

      <b-menu-item
        :active="isMuseumActive"
        :expanded="isMuseumActive"
        @click="isMuseumActive = !isMuseumActive"
      >
        <template slot="label" slot-scope="props">
          {{ $t("dashboard.menu.myMuseum") }}
          <b-icon
            class="is-pulled-right"
            :icon="props.expanded ? 'arrow-circle-up' : 'arrow-circle-down'"
          >
          </b-icon>
        </template>
        <b-menu-item tag="router-link" to="/my-museum/info">
          <template slot="label">
            {{ $t("dashboard.menu.info") }}
            <b-icon class="is-pulled-right" icon="drafting-compass"></b-icon>
          </template>
        </b-menu-item>
        <b-menu-item tag="router-link" to="/my-museum/my-artifacts">
          <template slot="label">
            {{ $t("dashboard.menu.myArtifacts") }}
            <b-icon class="is-pulled-right" icon="gavel"></b-icon>
          </template>
        </b-menu-item>
        <!--
           -<b-menu-item>
           -  <template slot="label">
           -    {{ $t("dashboard.menu.map") }}
           -    <b-icon class="is-pulled-right" icon="map"></b-icon>
           -  </template>
           -</b-menu-item>
           -->
      </b-menu-item>
    </b-menu-list>
    <b-menu-list :label="$t('dashboard.menu.exit')">
      <b-menu-item @click="confirmLogOut">
        <template slot="label">
          {{ $t("dashboard.menu.logOut") }}
          <b-icon class="is-pulled-right" icon="user-times"></b-icon>
        </template>
      </b-menu-item>
    </b-menu-list>
    <div id="bottom">
      <b-button
        @click="toggle"
        type="is-primary"
        icon-left="caret-left"
      ></b-button>
    </div>
  </b-menu>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "MuseumDashboardMenu",
  data() {
    return {
      isMuseumActive: false,
      isProfileActive: false
    };
  },
  methods: {
    ...mapActions(["logOut"]),
    toggle: function() {
      this.$emit("toggleMenu");
    },
    confirmLogOut: function() {
      this.$buefy.dialog.confirm({
        message: this.$t("dashboard.menu.confirmLogOut"),
        onConfirm: this.logUserOut
      });
    },
    logUserOut: function() {
      this.logOut();
      this.$router.push({ path: "/" });
    }
  }
};
</script>

<style>
#menu {
  background-color: #f5f4f3;
  padding-left: 7.5px;
  padding-top: 5px;
  height: 100%;
  position: absolute;
  width: 230px;
  border-right: 1px solid rgba(124, 124, 126, 0.3);
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.75);
}
#bottom {
  position: absolute;
  bottom: 60px;
}
.is-disabled {
  text-decoration: line-through;
}
</style>
