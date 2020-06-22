import Vue from "vue";
import Router from "vue-router";

// Views
import HomeView from "@/views/HomeView";
import MuseumView from"@/views/MuseumView";

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
    }
  ]
});
