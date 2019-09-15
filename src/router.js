import Vue from "vue";
import Router from "vue-router";

// Views
import HomeView from "@/views/HomeView";
import MuseumDashboardView from "@/views/MuseumDashboardView";
import DashboardHomeView from "@/views/museum-dashboard-view/DashboardHomeView";
import DashboardProfileView from "@/views/museum-dashboard-view/DashboardProfileView";
import DashboardConfigMuseumView from "@/views/museum-dashboard-view/DashboardConfigMuseumView";
import MuseumListView from "@/views/MuseumListView";
import MuseumDetailView from "@/views/MuseumDetailView.vue";
import ArtifactView from "@/views/ArtifactView.vue";

// Non views
import AppConstructionMsg from "@/components/for-ui/AppConstructionMsg";

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
        { path: "home", component: DashboardHomeView },
        { path: "profile", component: DashboardProfileView },
        { path: "construction", component: AppConstructionMsg },
        { path: "configuration", component: DashboardConfigMuseumView }
      ]
    },
    {
      path: "/museums",
      name: "museums",
      component: MuseumListView
    },
    {
      path: "/museum/:id",
      component: MuseumDetailView,
      props: true
    },
    {
      path: "/artifacts",
      component: ArtifactView
    }
  ]
});
