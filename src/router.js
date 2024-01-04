// el obejto que mapea las rutas de nuestro sitio
let ROUTES = {};

//Va a ser la referencia al elemento html donde vamos a dibujar el contenido de nuestros componentes
let rootElement = "";

export const setrootElement = (newRootElementValue) => {
  rootElement = newRootElementValue;
  // validar que newRootElementValue es un objeto html
};

export const setRoutes = (newRoutesValue) => {
  // optional Throw errors if routes isn't an object
  // optional Throw errors if routes doesn't define an /error route
  if (typeof newRoutesValue === "object") {
    if (newRoutesValue["/error"]) {
      ROUTES = newRoutesValue;
    }
  }
};

//oye objeto tienes este objeto (pathname ) ye devuelves algo
export const renderView = (pathname, props = {}) => {
  // clear the root element
  const root = rootElement;
  root.innerHTML = "";
  // find the correct view in ROUTES for the pathname
  //revisar 0:20:35 de video
  if (ROUTES[pathname]) {
    const template = ROUTES[pathname]();
    /*const template = ROUTES[pathname](props);*/
    root.appendChild(template);
  } else {
    root.appendChild(ROUTES["/error"]());
  }
  // in case not found render the error view
  // render the correct view passing the value of props
  // add the view element to the DOM root element
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
  
  
  
 
  
  // parse the location for the pathname and search params
  // convert the search params to an object
  // render the view with the pathname and object
  renderView(pathname, id);
};
