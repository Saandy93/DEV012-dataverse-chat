export const subHeader = () => {
  const mainElement = document.createElement("main");

  const Welcome = document.createElement("p");
  Welcome.textContent =
    "¡Bienvenido! Aquí encontrarás información sobre mujeres icónicas que dejaron su huella en el mundo de la ciencia y la tecnología. En la pantalla principal te recibirán 24 tarjetas con imágenes y datos destacados de estas mujeres. Puedes explorar la información con las herramientas de filtro y ordenamiento. Utiliza el filtro por campo de estudio para encontrar rápidamente aquellas mujeres que se destacaron en un área específica. También puedes ordenar las tarjetas alfabéticamente, para personalizar tu experiencia de navegación. Para una experiencia más personalizada, dirígete al botón API-KEY donde podrás ingresar tu clave y guardarla. Esta API-key te permitirá interactuar y chatear con los personajes de tu elección. Al hacer clic en la imagen de un personaje, podrás visualizar más información. ¡Pero eso no es todo! También podrás disfrutar de una experiencia única de conversación gracias a nuestra ventana de chat con inteligencia artificial. Habla con el personaje de tu interés y descubre más sobre sus logros y contribuciones.";
    Welcome.className = "welcome-description";
  mainElement.appendChild(Welcome);

  return mainElement;
};
