import { generateHeader } from "../components/header.js";
import { generateFooter } from "../components/Footer.js";
import { characterDetails } from "../components/characterDetails.js";
import { createChat } from "../components/Chat.js";

export const details = (props) => {
  console.log(props);

  const detailView = document.createElement("div");
  detailView.setAttribute("id", "detail-view");

  // Contenedor principal para organizar header, contenido y footer
  const mainContainer = document.createElement("div");
  mainContainer.setAttribute("id", "main-container");
  detailView.appendChild(mainContainer);

  const header = generateHeader();
  mainContainer.appendChild(header);

  const characterContainer = document.createElement("div");
  characterContainer.setAttribute("id", "character-container");
  detailView.appendChild(characterContainer);

  const infoCharacter = characterDetails(props);
  characterContainer.appendChild(infoCharacter);

  const jump = document.createElement("hr");
  jump.classList.add("hr-detailView");
  characterContainer.appendChild(jump);

  const chatComponent = createChat(props.name);
  characterContainer.appendChild(chatComponent);

  const footer = generateFooter();
  detailView.appendChild(footer);

  return detailView;
};
