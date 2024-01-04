import { renderItems } from "../components/renderItem.js";
import { generateFooter } from "../components/Footer.js";
import { generateHeader } from "../components/header.js";
import { subHeader } from "../components/subHeader.js";
import { Nav } from "../components/Nav.js";
//import { characterDetails } from "./characterDetail.js";
import { filterData, sortData } from "../lib/dataFunctions.js";
import data from "../data/dataset.js";

export const home = () => {
  const homeView = document.createElement("div");

  const dataCards = [...data]; // "Operador de propagación" copia de la data

  const header = generateHeader();
  homeView.appendChild(header);

  const nav = Nav();
  homeView.appendChild(nav);

  const main = subHeader();
  homeView.appendChild(main);

  const cardsContainer = document.createElement("div");
  cardsContainer.setAttribute("id", "cards");
  homeView.appendChild(cardsContainer);

  const footer = generateFooter();
  homeView.appendChild(footer);

  const cardsList = renderItems(dataCards);
  cardsContainer.appendChild(cardsList);

  let dataFiltrada;
  const selectFiltro = homeView.querySelector('select[name="filtro"]');
  selectFiltro.addEventListener("change", (event) => {
   dataFiltrada = filterData(dataCards, "mainField", event.target.value);
    cardsContainer.innerHTML = "";
    cardsContainer.appendChild(renderItems(dataFiltrada));
  });

  const ordenado = homeView.querySelector("select[name='name']");
  ordenado.addEventListener("change", (event) => {
    const orden = sortData(dataFiltrada, "name", event.target.value);
    cardsContainer.innerHTML = "";
    cardsContainer.appendChild(renderItems(orden));
  });

  const botonBorrar = homeView.querySelector("button[data-testid='button-clear']");
  botonBorrar.addEventListener("click", function () {
    cardsContainer.innerHTML = "";
    cardsContainer.appendChild(renderItems(data));
  });

 /* const characterUrl = homeView.querySelectorAll(".li-container");
  characterUrl.forEach((characterUrl) => {
  characterUrl.addEventListener("click", function (event) {
    // Verificar si el clic se realizó en un elemento con la clase "liConteiner"
   
   // if (event.target.classList.contains("li-conteiner")) {
      console.log("detalleInfo");
      const cardId = event.target.getAttribute("dataCards-id"); // Asegúrate de tener un atributo data-id en tus cards
      const clickedCharacter = data.find(character => character.id === cardId);

      // Construir la URL del componente characterDetails con la información de la card
      const characterDetailsURL = `/CharacterDetails?id=${clickedCharacter.cardId}`;

         // Redirigir al usuario a la nueva URL
    window.location.href = characterDetailsURL;
  //}
});
});*/

  return homeView;
};

// para descomentar ctrl + k +u
// para comentar cntrl + k+ c
