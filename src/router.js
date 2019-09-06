import Vue from "vue";
import Router from "vue-router";

import HomeView from "./views/HomeView";
import MuseumDashboardView from "./views/MuseumDashboardView";
import DashboardHomeView from "./views/museum-dashboard-view/DashboardHomeView";
import DashboardProfileView from "./views/museum-dashboard-view/DashboardProfileView";
import MuseumListView from "./views/MuseumListView";
import AppConstruction from "./components/AppConstruction";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView
    },
    {
      path: "/my-museum",
      name: "my-museum",
      component: MuseumDashboardView,
      children: [
        { path: "/home", component: DashboardHomeView },
        { path: "/profile", component: DashboardProfileView },
        { path: "/construction", component: AppConstruction }
      ]
    },
    {
      path: "/museums",
      name: "museums",
      component: MuseumListView
    }
  ]
});
