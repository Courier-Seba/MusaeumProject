<template>
  <b-menu id="menu">
        <b-menu-list label="Menu">
            <b-menu-item icon="information-outline" :label="$t('dashboardItem01')"></b-menu-item>
            <b-menu-item icon="settings" active expanded>
                <template slot="label" slot-scope="props">
                   {{ $t("dashboardItem02")}}
                    <b-icon
                        class="is-pulled-right"
                        :icon="props.expanded ? 'menu-down' : 'menu-up'">
                    </b-icon>
                </template>
                <b-menu-item :label="$t('dashboardItem03')"></b-menu-item>
                <b-menu-item :label="$t('dashboardItem04')"></b-menu-item>
                <b-menu-item :label="$t('dashboardItem05')"></b-menu-item>
            </b-menu-item>
            <b-menu-item icon="account" :label="$t('dashboardItem06')">
                <b-menu-item :label="$t('dashboardItem07')"></b-menu-item>
                <b-menu-item :label="$t('dashboardItem08')"></b-menu-item>
            </b-menu-item>
        </b-menu-list>
        <b-menu-list :label="$t('dashboardItem09')">
            <b-menu-item :label="$t('dashboardItem10')"></b-menu-item>
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
