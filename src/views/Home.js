import { renderItems } from "../components/renderItem.js";
import { generateFooter } from "../components/Footer.js";
import { generateHeader } from "../components/header.js";
import { subHeader } from "../components/subHeader.js";
import { Nav } from "../components/Nav.js";
import { filterData,sortData } from "../lib/dataFunctions.js";
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
   cardsContainer.innerHTML = cardsList;
  
   const selectFiltro = homeView.querySelector('select[name="filtro"]');
   selectFiltro.addEventListener("change", (event) => {
     const dataFiltrada = filterData(
       dataCards,
       "mainField",
       event.target.value
     );
     cardsContainer.innerHTML = "";
     cardsContainer.innerHTML = renderItems(dataFiltrada);
   });

   const ordenado = homeView.querySelector("select[name='name']");
   ordenado.addEventListener("change", (event) => {
     const orden = sortData(dataCards, "name", event.target.value);
     cardsContainer.innerHTML = "";
     cardsContainer.innerHTML = renderItems(orden);
   });
 
   const botonBorrar = homeView.querySelector("button[data-testid='button-clear']");
   botonBorrar.addEventListener("click", function () {
    cardsContainer.innerHTML = renderItems(data);
   });



  return homeView;
};










// para descomentar ctrl + k +u
// para comentar cntrl + k+ c
