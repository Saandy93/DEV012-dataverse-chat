import { generateHeader } from "../components/header.js";
import { generateFooter } from "../components/Footer.js";

export const characterDetails = () => {
    const Details = document.createElement('div');

    const header = generateHeader();
    Details.appendChild(header);

   const imgContainer = document.createElement('div');
    imgContainer.setAttribute("id","image");
    

    const image = document.createElement("img");
    image.src = '/images/marie-curie.jpg';
    image.alt = "Imagen Central";
    image.className = "imgDetails"; // Agrega una clase para aplicar estilos desde CSS
    imgContainer.appendChild(image);

    /*const textContainer = document.createElement('div');
    textContainer.setAttribute("id","text");
    const text = document.createElement('p');
    text.textContent("Nombre:")
    textContainer.appendChild(text)*/

    Details.appendChild(imgContainer);
    //Details.appendChild(textContainer);

    const characterName = document.createElement('h2');
    characterName.textContent = 'Nombre';
    characterName.className = "name";
    Details.appendChild(characterName);

    const footer = generateFooter();
    Details.appendChild(footer);

    

    return Details
}