export const Nav = () => {
const navContainer = document.createElement("div");
navContainer.setAttribute("id", "navContainer");


  const navElement = document.createElement("nav");
  navElement.setAttribute("id", "navElement");
  navContainer.appendChild(navElement);
  // Etiqueta y select para filtrar
  const labelFilter = document.createElement("label");
  labelFilter.setAttribute("for", "Campo de estudio");
  labelFilter.textContent = "Filtrar por:";

  const selectFilter = document.createElement("select");
  selectFilter.setAttribute("data-testid", "select-filter");
  selectFilter.setAttribute("name", "filtro");

  // Opciones para filtrar
  const optionsFilter = [
    "Matemáticas",
    "Computación",
    "Química",
    "Física",
    "Astronomía",
    "Astrofísica",
    "Filosofía",
    "Actuación",
    "Música",
  ];

  optionsFilter.forEach((optionValue) => {
    const optionElement = document.createElement("option");
    optionElement.setAttribute("value", optionValue);
    optionElement.textContent = optionValue;
    selectFilter.appendChild(optionElement);
  });

  // Etiqueta y select para ordenar
  const labelSort = document.createElement("label");
  labelSort.setAttribute("for", "Abecedario");
  labelSort.textContent = "Ordenar por:";

  const selectSort = document.createElement("select");
  selectSort.setAttribute("data-testid", "select-sort");
  selectSort.setAttribute("name", "name");

  // Opciones para ordenar
  const optionAsc = document.createElement("option");
  optionAsc.setAttribute("value", "Asc");
  optionAsc.textContent = "A-Z";

  const optionDesc = document.createElement("option");
  optionDesc.setAttribute("value", "Desc");
  optionDesc.textContent = "Z-A";

  // Botón de limpiar
  const buttonClear = document.createElement("button");
  buttonClear.setAttribute("data-testid", "button-clear");
  buttonClear.textContent = "Limpiar";

  const buttonApi = document.createElement("button");
  buttonApi.setAttribute("data-testid", "button-api");
  buttonApi.textContent = "Api-Key";
  buttonApi.classList.add("api-button");

  // Agregar elementos al nav
  navElement.appendChild(labelFilter);
  navElement.appendChild(selectFilter);
  navElement.appendChild(labelSort);
  navElement.appendChild(selectSort);
  selectSort.appendChild(optionAsc);
  selectSort.appendChild(optionDesc);
  navElement.appendChild(buttonClear);
  navElement.appendChild(buttonApi);

  return navContainer;
};
