import { home } from "./views/Home.js";
import { error } from "./views/Error_429_rochi.js";
import { error404 } from "./views/Error_404_androide.js";
import { setRoutes, setrootElement, onURLChange } from "./router.js";

//index el el unico que tiene contacto directo con nuestro html

//lo primero es traer los componentes(como sale arriba), creando las rutas (pathname)
const routes = {
  "/": home,
  "/error": error,
  "/error2": error404,
};

const viewContainer = document.getElementById("root");

setRoutes(routes);
setrootElement(viewContainer);

document.addEventListener("DOMContentLoaded", (event) => {
  onURLChange(event.target.location.pathname);
});

window.onpopstate = onURLChange;

/*
TODO:
1.- Definir rutas en router.
2.- Pasar "root element" a router.
3.- Invocar el router para renderizar la vista correcta.
*/
