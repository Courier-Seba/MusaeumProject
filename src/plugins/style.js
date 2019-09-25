import Vue from "vue";
import Buefy from "buefy";
import "buefy/dist/buefy.css";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

Vue.component("vue-fontawesome", FontAwesomeIcon);

Vue.use(Buefy, {
  defaultIconComponent: "vue-fontawesome",
  defaultIconPack: "fas",
  customIconPacks: {
    fas: {
      sizes: {
        default: "lg",
        "is-small": "xs",
        "is-medium": "lg",
        "is-large": "10x"
      },
      iconPrefix: ""
    }
  }
});
