import Vue from "vue";
import Router from "vue-router";

// Views
import HomeView from "@/views/HomeView";
import MuseumDashboardView from "@/views/MuseumDashboardView";
import DashboardHomeView from "@/views/museum-dashboard-view/DashboardHomeView";
import DashboardProfileView from "@/views/museum-dashboard-view/DashboardProfileView";
import DashboardConfigMuseumView from "@/views/museum-dashboard-view/DashboardConfigMuseumView";
import DashboardArtifactView from "@/views/museum-dashboard-view/DashboardArtifactView";
import DashboardMuseumInfoView from "@/views/museum-dashboard-view/DashboardMuseumInfoView";
import MuseumListView from "@/views/MuseumListView";
import MuseumDetailView from "@/views/MuseumDetailView";
import ArtifactView from "@/views/ArtifactView";
import AboutUsView from "@/views/AboutUsView";

// Non views
import AppConstructionMsg from "@/components/for-ui/AppConstructionMsg";

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
      path: "/my-museum",
      component: MuseumDashboardView,
      children: [
        { path: "home", component: DashboardHomeView },
        { path: "profile", component: DashboardProfileView },
        { path: "info", component: DashboardMuseumInfoView },
        { path: "construction", component: AppConstructionMsg },
        { path: "my-artifacts", component: DashboardArtifactView },
        { path: "configuration", component: DashboardConfigMuseumView }
      ]
    },
    {
      path: "/museums",
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
    },
    {
      path: "/about-us",
      component: AboutUsView
    }
  ]
});
