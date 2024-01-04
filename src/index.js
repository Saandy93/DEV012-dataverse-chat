import { home } from "./views/Home.js";
import { error } from "./views/Error_429_marieCurie.js";
import { error404 } from "./views/Error_404_adaLovelace.js";
import { details } from "./views/detailView.js";
import { setRoutes, setrootElement, onURLChange } from "./router.js";

//index el unico que tiene contacto directo con nuestro html

//lo primero es traer las vistas (como sale arriba), creando las rutas (pathname)
const routes = {
  "/": home,
  "/error": error,
  "/error2": error404,
  "/CharacterDetails": details,
};

const viewContainer = document.getElementById("root");

setRoutes(routes);
setrootElement(viewContainer);

document.addEventListener("DOMContentLoaded", (event) => {
onURLChange(event.target.location.pathname, event.target.location.search); 
});

window.onpopstate = onURLChange;
