import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch, faUser, fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faSearch);
library.add(faUser);
library.add(fas);
Vue.component("font-awesome-icon", FontAwesomeIcon);
