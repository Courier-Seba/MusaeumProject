import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

const messages = {
  en: {
    welcomeMsg: "Welcome to musaeum",
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

  },
  es: {
    welcomeMsg: "Bienvenido a musaeum",
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
    dashboardItem01: "Pagina principal",
    dashboardItem02: 'Mi perfil',
    dashboardItem03: "Configuración",
    dashboardItem04: "Datos del perfil",
    dashboardItem05: "Mis favoritos",
    dashboardItem06: "Mi museo",
    dashboardItem07: "Mis artefactos",
    dashboardItem08: "Mis colecciones",
    dashboardItem09: "Acciones",
    dashboardItem10: "Salir",
  }
};

export default new VueI18n({
  locale: "en",
  fallbackLocale: "es",
  messages
});
