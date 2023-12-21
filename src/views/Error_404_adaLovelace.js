export const error404 = () => {
  // Crear un contenedor div para aplicar el fondo
  const contenedor = document.createElement("div");
  contenedor.classList.add("container-style");

  // Crear un contenedor interno para el párrafo
  const contenidoInternoParrafo = document.createElement("div");
  contenidoInternoParrafo.classList.add("text-container-style");
  contenedor.appendChild(contenidoInternoParrafo);

  // Crear el elemento de párrafo
  const tittle = document.createElement("h1");
  tittle.textContent = "u_u Error 404";
  tittle.classList.add("error-message", "title-style");
  contenidoInternoParrafo.appendChild(tittle);

  // crea el contenido del elemento
  const parrafo = document.createElement("p");
  parrafo.textContent =
    "Parece que el enlace está dañado o has introducido una URL que no existe en este sitio.";
  parrafo.classList.add("error-message", "paragraph-style");
  contenidoInternoParrafo.appendChild(parrafo);

  // Crear un contenedor interno para la imagen
  const contenidoInternoImagen = document.createElement("div");
  contenidoInternoImagen.classList.add("image-container-style-404");

  // Aplicar efecto espejo horizontal a la imagen
  contenidoInternoImagen.classList.add("mirror-effect");

  // Agregar el contenedor interno de la imagen al contenedor principal
  contenedor.appendChild(contenidoInternoImagen);

  // Agregar el contenedor interno del párrafo al contenedor principal
  contenedor.appendChild(contenidoInternoParrafo);

  return contenedor;
};
