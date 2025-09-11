import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import {
  faMountain,
  faBars,
  faTimes,
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
  faStar,
  faDollarSign,
  faShieldAlt,
  faCamera,
  faHeart,
  faPaperPlane,
  faUmbrellaBeach,
  faClock,
  faUtensils,
  faShuttleVan,
  faUsers,
  faCar,
  faShareAlt,
  faArrowLeft,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faWhatsapp,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faMountain,
  faBars,
  faTimes,
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
  faStar,
  faDollarSign,
  faShieldAlt,
  faCamera,
  faHeart,
  faPaperPlane,
  faUmbrellaBeach,
  faClock,
  faUtensils,
  faShuttleVan,
  faUsers,
  faCar,
  faWhatsapp,
  faShareAlt,
  faFacebookF,
  faInstagram,
  faArrowLeft,
  faCheck
);

import router from "./router/index.js";

const app = createApp(App);

app.use(router);

app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
