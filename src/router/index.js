import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/pages/Home.vue";
import TourPackagesPage from "../components/pages/TourPackagesPage.vue";
import PackageDetailsPage from "../components/pages/PackageDetailsPage.vue";
import AboutPage from "../components/pages/AboutPage.vue";
import ContactPage from "../components/pages/ContactPage.vue";
import GalleryPage from "../components/pages/GalleryPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: AboutPage,
  },
  {
    path: "/tour-packages",
    name: "TourPackages",
    component: TourPackagesPage,
  },
  {
    path: "/package/:id",
    name: "PackageDetails",
    component: PackageDetailsPage,
  },
  {
    path: "/contact",
    name: "Contact",
    component: ContactPage,
  },
  {
    path: "/gallery",
    name: "Gallery",
    component: GalleryPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
