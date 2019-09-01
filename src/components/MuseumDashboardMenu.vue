<template>
  <b-menu id="menu">
    <b-menu-list label="Menu">
      <router-link to="/home">
        <b-menu-item icon="information-outline" label="Home"></b-menu-item>
      </router-link>
      <b-menu-item icon="settings" active expanded>
        <template slot="label" slot-scope="props">
          Configuración
          <b-icon
            class="is-pulled-right"
            :icon="props.expanded ? 'menu-down' : 'menu-up'"
          >
          </b-icon>
        </template>

        <router-link to="/profile">
          <b-menu-item label="Mi perfil"></b-menu-item>
        </router-link>
        <b-menu-item label="Mis favoritos"></b-menu-item>
      </b-menu-item>
      <b-menu-item icon="account" label="Mis Museos">
        <b-menu-item label="Mi museo"></b-menu-item>
        <b-menu-item label="Datos del usuario"></b-menu-item>
      </b-menu-item>
    </b-menu-list>
    <b-menu-list label="Acciones">
      <b-menu-item label="Salir"></b-menu-item>
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
