export const error404 = () => {
  const errorContainer = document.createElement("div");
  errorContainer.setAttribute("id", "error-container");

  // Crear un elemento de imagen de fondo
  const backgroundImage = document.createElement("img");
  backgroundImage.src = "./images/Ada.error_404.jpeg";
  backgroundImage.classList.add("background-image");
  errorContainer.appendChild(backgroundImage);

  // Crear un cuadro translúcido con el mensaje de error
  const errorOverlay = document.createElement("div");
  errorOverlay.classList.add("error-overlay");

  const errorMessage = document.createElement("p");
  errorMessage.textContent = "Error 404: Parece que el enlace está dañado o has introducido una URL que no existe en este sitio.";
  errorOverlay.appendChild(errorMessage);

  errorContainer.appendChild(errorOverlay);

  return errorContainer;
};



