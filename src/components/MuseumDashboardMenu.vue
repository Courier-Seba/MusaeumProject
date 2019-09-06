<template>
  <b-menu id="menu">
    <b-menu-list label="Menu">
      <b-menu-item
        icon="information-outline"
        :label="$t('dashboard.menu.home')"
      ></b-menu-item>
      <b-menu-item icon="settings" active expanded>
        <template slot="label" slot-scope="props">
          {{ $t("dashboard.menu.profile") }}
          <b-icon
            class="is-pulled-right"
            :icon="props.expanded ? 'menu-down' : 'menu-up'"
          >
          </b-icon>
        </template>
        <b-menu-item :label="$t('dashboard.menu.config')"></b-menu-item>
        <b-menu-item :label="$t('dashboard.menu.profileData')"></b-menu-item>
        <b-menu-item :label="$t('dashboard.menu.favourites')"></b-menu-item>
      </b-menu-item>
      <b-menu-item icon="account" :label="$t('dashboard.menu.myMuseum')">
        <b-menu-item :label="$t('dashboard.menu.info')"></b-menu-item>
        <b-menu-item :label="$t('dashboard.menu.myCollections')"></b-menu-item>
        <b-menu-item :label="$t('dashboard.menu.actions')"></b-menu-item>
      </b-menu-item>
    </b-menu-list>
    <b-menu-list :label="$t('dashboard.menu.exit')">
      <b-menu-item :label="$t('dashboard.menu.logOut')"></b-menu-item>
    </b-menu-list>
  </b-menu>
</template>

<style>
#menu {
  background-color: #f5f4f3;
  padding-left: 7.5px;
  padding-top: 5px;
  height: 100%;
  position: absolute;
  width: 230px;
}
</style>
