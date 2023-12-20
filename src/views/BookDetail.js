import { generateHeader } from "../components/header.js";
import { generateFooter } from "../components/Footer.js";

export const characterDetails = () => {
    const Details = document.createElement('div');

    const header = generateHeader();
    Details.appendChild(header);

   /* const imgContainer = document.createElement('div');
    imgContainer.setAttribute("id","image");
    Details.appendChild(imgContainer);*/


    const characterName = document.createElement('h2');
    characterName.textContent = 'Nombre';
    Details.appendChild(characterName);

    const footer = generateFooter();
    Details.appendChild(footer);

    //Details.appendChild(detailsContainer);

    return Details
}