export const apiKey = () => {
  const apiView = document.createElement("div");
  apiView.setAttribute("id", "api");

  const apiContainer = document.createElement("div");
  apiContainer.setAttribute("id", "apiContainer");

  const nameLabel = document.createElement("label");
  nameLabel.setAttribute("id", "nameLabel");
  nameLabel.textContent = "Ingresa Api-Key:";
  apiContainer.appendChild(nameLabel);

  const nameInput = document.createElement("input");
  nameInput.setAttribute("id", "nameInput");
  apiContainer.appendChild(nameInput);

  const submitApi = document.createElement("button");
  submitApi.setAttribute("data-testid", "button-submit");
  submitApi.textContent = "Submit";
  submitApi.classList.add("submit-button");
  apiContainer.appendChild(submitApi);

  submitApi.addEventListener("click", function () {
    // valor del input
    const apiKeyValue = nameInput.value;

    // quita "" comienzo/final y compara que no sea una cadena vacía)
    if (apiKeyValue.trim() !== "") {
      //almacena la api
      localStorage.setItem("apiKeyValue", apiKeyValue);
      // Si es una api válida mostrar mensaje de alerta que fue ingresada
      alert("API-KEY registrada: " + apiKeyValue);
    } else {
      // Si no es válida, redireccionar a la vista de error
      window.location.href = "/error";
    }
  });

  apiView.appendChild(apiContainer);

  return apiView;
};
