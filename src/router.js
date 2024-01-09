// el obejto que mapea las rutas de nuestro sitio
let ROUTES = {};

//Va a ser la referencia al elemento html donde vamos a dibujar el contenido de nuestros componentes
let rootElement = "";

export const setrootElement = (newRootElementValue) => {
  rootElement = newRootElementValue;
  // validar que newRootElementValue es un objeto html
};

export const setRoutes = (newRoutesValue) => {
  if (typeof newRoutesValue === "object") {
    if (newRoutesValue["/error"]) {
      ROUTES = newRoutesValue;
    }
  }
};

export const renderView = (pathname, props = {}) => {
  const root = rootElement;
  root.innerHTML = "";
  if (ROUTES[pathname]) {
   const template = ROUTES[pathname](props);
    root.appendChild(template);
  } else {
    root.appendChild(ROUTES["/error"]());
  }
  };

// guarda el historial de navegacion

export const navigateTo = (pathname, props = {}) => {
  // update window history with pushState
  const URLvisited = window.location.hostname + pathname;
  history.pushState({}, "", URLvisited);

  // render the view with the pathname and props
  renderView(pathname, props);
};
//
  export const onURLChange = (pathname, params) =>{
    const queryParams = new URLSearchParams(params);
    const id = queryParams.get('id');
      
  renderView(pathname, id);
};
