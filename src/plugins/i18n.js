import Vue from "vue";
import VueI18n from "vue-i18n";
import { DEFAULT_LANG, FALLBACK_LANG } from "./languages";

Vue.use(VueI18n);

const messages = {
  en: {
    welcome: {
      title: "Welcome to Project Musaeum",
      intro:
        "This project is for people who want to help to spread world history and share theirs by easily building virtual museums so everybody can see it. Feel free to explore artifacts of the world and help the manage of others people museums. If you are ready to have your own sign in to build a museum and share yours artifacts. Everybody is welcome to come, big world museums, small cities, historic houses and even an individual with some old artifacts to show.",
      outro: "The Knowledge is public and History is world heritage."
    },

    navbarItem01: "Museum",
    navbarItem02: "Artifacts",
    navbarItem03: "Log in",
    navbarItem04: "Sing up",

    navbarLogInItem01: "Username",
    navbarLogInItem02: "Your username",
    navbarLogInItem03: "Password",
    navbarLogInItem04: "Your password",
    navbarLogInItem05: "Remember me",
    navbarLogInItem06: "Log in",
    navbarLogInItem07: "Cancel",

    navbarSignInItem01: "Sing up",
    navbarSignInItem02: "Username",
    navbarSignInItem03: "Your username",
    navbarSignInItem04: "E-mail",
    navbarSignInItem05: "Your e-mail address",
    navbarSignInItem06: "Password",
    navbarSignInItem07: "Your password",
    navbarSignInItem08: "Repeat password",
    navbarSignInItem09: "Repeat your password",
    navbarSignInItem10: "Sign up now!",
    navbarSignInItem11: "Your first name",
    navbarSignInItem12: "Your last name",
    navbarSignInItem13: "Your biography",
    navbarSignInItem14: "Add an image to your profile",
    navbarSignInItem15: "Name of your museum",
    navbarSignInItem16: "Full name of your museum",
    navbarSignInItem17: "Country",
    navbarSignInItem18: "City",
    navbarSignInItem19: "Logo of your museum",
    navbarSignInItem20: "Presentation image",
    navbarSignInItem21: "Continue",
    navbarSignInItem22: "Drag or click to load image",
    navbarSignInItem23: "Upload an image",
    navbarSignInItem24: "Let's add an artifact",
    navbarSignInItem25: "Name of your artifact",
    navbarSignInItem26: "Description",
    navbarSignInItem27: "Url to external site",
    navbarSignInItem28: "Picture of your artifact",
    navbarSignInItem29: "Create accout",
    navbarSignInItem30: "Your profile",
    navbarSignInItem31: "Your museum",
    navbarSignInItem32: "Your artifact",
    navbarSignInItem33: "Ready",

    dashboardItem01: "Home",
    dashboardItem02: "My profile",
    dashboardItem03: "Configuration",
    dashboardItem04: "Profile data",
    dashboardItem05: "My favourites",
    dashboardItem06: "My Museum",
    dashboardItem07: "My artifacts",
    dashboardItem08: "My collections",
    dashboardItem09: "Actions",
    dashboardItem10: "Log out",

    museumBox: {
      museumLevel: {
        MM: "Family Memories",
        CL: "Collection",
        MU: "Museum",
        WH: "World Heritage"
      },
      museumZone: {
        country: "Country",
        city: "City"
      },
      visit: "Visit"
    }
  },
  es: {
    welcome: {
      title: "Bienvenido a al Proyecto Musaeum",
      intro:
        "Este proyecto es para personas que desean ayudar a difundir la historia mundial y compartir la suya construyendo fácilmente museos virtuales para que todos puedan verla. Siéntase libre de explorar artefactos del mundo y ayudar a administrar los museos de otras personas. Si está listo para tener su propio museo: registrate para construir uno y empezar a compartir tus artefactos. Todos son bienvenidos, grandes museos mundiales, de pequeñas ciudades, casas históricas e incluso una persona con algunos artefactos antiguos para mostrar.",
      outro:
        "El conocimiento es público y la historia es patrimonio de la humanidad."
    },

    navbarItem01: "Museos",
    navbarItem02: "Artefactos",
    navbarItem03: "Iniciar sesión",
    navbarItem04: "Registrarse",

    navbarLogInItem01: "Usuario",
    navbarLogInItem02: "Nombre de usuario",
    navbarLogInItem03: "Contraseña",
    navbarLogInItem04: "Tu contraseña",
    navbarLogInItem05: "Recordarme",
    navbarLogInItem06: "Iniciar sesion",
    navbarLogInItem07: "Cancelar",

    navbarSignInItem01: "Registrarse",
    navbarSignInItem02: "Nombre del Usuario",
    navbarSignInItem03: "Tu nombre de usuario",
    navbarSignInItem04: "Tu e-mail",
    navbarSignInItem05: "Tu correo electrónico",
    navbarSignInItem06: "Contraseña",
    navbarSignInItem07: "Escribe tu contraseña",
    navbarSignInItem08: "Repetir contraseña",
    navbarSignInItem09: "Escribe nuevamente tu contraseña",
    navbarSignInItem10: "Registrarse ahora!",
    navbarSignInItem11: "Su nombre",
    navbarSignInItem12: "Su apellido",
    navbarSignInItem13: "Su biografía",
    navbarSignInItem14: "Agrega una imagen a su perfil",
    navbarSignInItem15: "Nombre de tu museo",
    navbarSignInItem16: "Nombre completo del museo",
    navbarSignInItem17: "País",
    navbarSignInItem18: "Ciudad",
    navbarSignInItem19: "Logo del museo",
    navbarSignInItem20: "Imagen de presentación",
    navbarSignInItem21: "Continuar",
    navbarSignInItem22: "Arrastrar o clickea para cargar imagen",
    navbarSignInItem23: "Cargar imagen",
    navbarSignInItem24: "Agregar artefacto",
    navbarSignInItem25: "Nombre de tu artefacto",
    navbarSignInItem26: "Descripción",
    navbarSignInItem27: "URL a sitio externo",
    navbarSignInItem28: "Foto del artefacto",
    navbarSignInItem29: "Crear cuenta",
    navbarSignInItem30: "Tus datos",
    navbarSignInItem31: "Tu museo",
    navbarSignInItem32: "Tu artefacto",
    navbarSignInItem33: "Listo",

    dashboardItem01: "Pagina principal",
    dashboardItem02: "Mi perfil",
    dashboardItem03: "Configuración",
    dashboardItem04: "Datos del perfil",
    dashboardItem05: "Mis favoritos",
    dashboardItem06: "Mi museo",
    dashboardItem07: "Mis artefactos",
    dashboardItem08: "Mis colecciones",
    dashboardItem09: "Acciones",
    dashboardItem10: "Salir",

    museumBox: {
      museumLevel: {
        MM: "Memorias de Familia",
        CL: "Colección",
        MU: "Museo",
        WH: "Patrimonio de la Humanidad"
      },
      museumZone: {
        country: "País",
        city: "Ciudad"
      },
      visit: "Visitar"
    }
  }
};

export default new VueI18n({
  locale: DEFAULT_LANG,
  fallbackLocale: FALLBACK_LANG,
  messages
});
