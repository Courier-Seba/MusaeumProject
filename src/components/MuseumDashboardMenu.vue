<template>
  <b-menu id="menu">
        <b-menu-list label="Menu">
            <b-menu-item icon="information-outline" label="Home"></b-menu-item>
            <b-menu-item icon="settings" active expanded>
                <template slot="label" slot-scope="props">
                    Mi perfil
                    <b-icon
                        class="is-pulled-right"
                        :icon="props.expanded ? 'menu-down' : 'menu-up'">
                    </b-icon>
                </template>
                <b-menu-item label="Configuración"></b-menu-item>
                <b-menu-item label="Datos del perfil"></b-menu-item>
                <b-menu-item label="Mis favoritos"></b-menu-item>
            </b-menu-item>
            <b-menu-item icon="account" label="Mi Museo">
                <b-menu-item label="Mis artefactos"></b-menu-item>
                <b-menu-item label="Mis colecciones"></b-menu-item>
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
