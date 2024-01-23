export const error = () => {
  const errorContainer = document.createElement("div");
  errorContainer.setAttribute("id", "error-container");

  // Crear un elemento de imagen de fondo
  const backgroundImage = document.createElement("img");
  backgroundImage.src = "./images/Ada.error_429.jpeg";
  backgroundImage.classList.add("background-image");
  errorContainer.appendChild(backgroundImage);

  // Crear un cuadro translúcido con el mensaje de error
  const errorOverlay = document.createElement("div");
  errorOverlay.classList.add("error-overlay");

  const errorMessage = document.createElement("p");
  errorMessage.textContent =
    "Error 429: Se ha superado la cuota de tokens permitida por minuto.";
  errorOverlay.appendChild(errorMessage);

  errorContainer.appendChild(errorOverlay);

  return errorContainer;
};
