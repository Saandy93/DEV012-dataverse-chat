import { generateHeader } from "../components/header.js";
import { generateFooter } from "../components/Footer.js";

export const characterDetails = (character) => {
console.log(character);

    const Details = document.createElement('div');
   Details.setAttribute("id","detailsContainer");

    const header = generateHeader();
    Details.appendChild(header);

   const imgContainer = document.createElement('div');
    imgContainer.setAttribute("id","image");
    

    const image = document.createElement("img");
    image.src = '/images/marie-curie.jpg';
    image.alt = "Imagen Central";
    image.className = "imgDetails"; // Agrega una clase para aplicar estilos desde CSS
    imgContainer.appendChild(image);


    const characterInfo = document.createElement('div');
    characterInfo.setAttribute("id","text");
    const characterName = document.createElement('h2');
    characterName.textContent = 'Nombre:';
    const characterDescription = document.createElement('h2');
    characterDescription.textContent ='Descripción:';
    characterName.className = "name";
    characterDescription.className = "info";
    characterInfo.appendChild(characterName);
    characterInfo.appendChild(characterDescription);

    Details.appendChild(imgContainer);
    Details.appendChild(characterInfo);

    const footerContainer = document.createElement('div');
    footerContainer.setAttribute("id","footer");

    const footer = generateFooter();
    Details.appendChild(footer);

    

    return Details
}