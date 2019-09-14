<template>
  <b-menu id="menu">
    <b-menu-list label="Menu">
      <b-menu-item
        icon="home"
        :label="$t('dashboard.menu.home')"
        tag="router-link"
        to="/my-museum/construction"
      ></b-menu-item>
      <b-menu-item expanded>
        <template slot="label" slot-scope="props">
          {{ $t("dashboard.menu.profile") }}
          <b-icon
            class="is-pulled-right"
            :icon="props.expanded ? 'arrow-circle-up' : 'arrow-circle-down'"
          >
          </b-icon>
        </template>
        <b-menu-item
          :label="$t('dashboard.menu.config')"
          tag="router-link"
          icon="cogs"
        ></b-menu-item>
        <b-menu-item
          :label="$t('dashboard.menu.profileData')"
          icon="id-badge"
        ></b-menu-item>
        <b-menu-item
          :label="$t('dashboard.menu.favourites')"
          icon="star"
        ></b-menu-item>
      </b-menu-item>
      <b-menu-item>
        <template slot="label" slot-scope="props">
          {{ $t("dashboard.menu.myMuseum") }}
          <b-icon
            class="is-pulled-right"
            :icon="props.expanded ? 'arrow-circle-up' : 'arrow-circle-down'"
          >
          </b-icon>
        </template>
        <b-menu-item
          icon="drafting-compass"
          :label="$t('dashboard.menu.info')"
        ></b-menu-item>
        <b-menu-item :label="$t('dashboard.menu.myCollections')"></b-menu-item>
        <b-menu-item :label="$t('dashboard.menu.actions')"></b-menu-item>
      </b-menu-item>
    </b-menu-list>
    <b-menu-list :label="$t('dashboard.menu.exit')">
      <b-menu-item
        :label="$t('dashboard.menu.logOut')"
        icon="user-times"
      ></b-menu-item>
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
export default {
  name: "MuseumDashboardMenu",
  methods: {
    toggle: function() {
      this.$emit("toggleMenu");
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
}
#bottom {
  position: absolute;
  bottom: 10px;
}
</style>
