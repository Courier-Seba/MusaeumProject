import Vue from "vue";
import Router from "vue-router";

// Views
import HomeView from "@/views/HomeView";
import MuseumView from "@/views/MuseumView";
import ArtifactView from "@/views/ArtifactView";
import MuseumConfig from "@/views/menu-views/MuseumConfig";
import AboutUsview from "@/views/AboutUsView";
import NotFoundView from "@/views/NotFoundView";
import FavoritesView from "@/views/FavoritesView";

// Non views

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: HomeView
    },
    {
      path: "/musaeum/:id",
      component: MuseumView,
      props: true
    },
    {
      path: "/artifact/:id",
      component: ArtifactView,
      props: true
    },
    {
      path: "/user/config",
      component: MuseumConfig
    },
    {
      path: "*",
      component: NotFoundView,
    },
    {
      path: "/about-us",
      component: AboutUsview,
    },
    {
      path: "/favorites",
      component: FavoritesView
    }
  ]
});
