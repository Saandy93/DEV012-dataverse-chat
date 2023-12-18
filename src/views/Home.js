import { renderItems } from "../components/renderItem.js";
import { generateFooter } from "../components/Footer.js";
import { generateHeader } from "../components/header.js";
import { Nav } from "../components/Nav.js";
import data from "../data/dataset.js";

export const home = () => {
  const homeView = document.createElement("div");

  const header = generateHeader();
  homeView.appendChild(header);

  const nav = Nav();
  homeView.appendChild(nav);

  // Obtén tu data desde algún lugar (puedes importarla o traerla de una API)
  const data2 = [...data]; // Reemplaza con tu data
  const cardsList = renderItems(data2);

  // Crea un contenedor para la lista de tarjetas y agrégalo al contenedor principal
  const cardsContainer = document.createElement("div");
  cardsContainer.innerHTML = cardsList;
  homeView.appendChild(cardsContainer);

  const footer = generateFooter();
  homeView.appendChild(footer);

  return homeView;
};

// para descomentar ctrl + k +u
// para comentar cntrl + k+ c
