import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faSearch);
library.add(faUser);
Vue.component("font-awesome-icon", FontAwesomeIcon);
