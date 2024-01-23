import { characterData } from "../lib/dataFunctions.js";
import data from "../data/dataset.js";

export const characterDetails = (props) => {
  console.log(props);

  const Details = document.createElement("div");
  Details.setAttribute("id", "detailsContainer");

  const imgContainer = document.createElement("div");
  imgContainer.setAttribute("id", "imageInfoContainer");

  const characterId = characterData(props.id, data);
  console.log(characterId);

  const image = document.createElement("img");
  image.src = props.imageSource;
  image.alt = "Imagen Central";
  image.className = "imgDetails"; // Agrega una clase para aplicar estilos desde CSS
  imgContainer.appendChild(image);

  const characterInfo = document.createElement("div");
  characterInfo.setAttribute("id", "text");

  const characterName = document.createElement("p");
  //characterName.textContent = `Nombre: `;
  const characterNameText = document.createTextNode(characterId.nombre);
  characterName.appendChild(characterNameText);

  const characterDescription = document.createElement("p");
  //characterDescription.textContent = `Descripción: `;
  const characterDescriptionText = document.createTextNode(
    characterId.descripcion
  );
  characterDescription.appendChild(characterDescriptionText);
  characterDescription.className = "info";

  /*const buttonChat = document.createElement('button');
    buttonChat.setAttribute('data-testid', 'button-chat');
    buttonChat.textContent = 'Chat';*/

  characterInfo.appendChild(characterName);
  characterInfo.appendChild(characterDescription);

  imgContainer.appendChild(characterInfo);
  Details.appendChild(imgContainer);
  //Details.appendChild(buttonChat);

  return Details;
};
