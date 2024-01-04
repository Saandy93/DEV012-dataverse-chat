import { generateHeader } from "../components/header.js";
import { generateFooter } from "../components/Footer.js";
import { characterDetails } from "../components/characterDetails.js";



export const details = (character) => {
console.log(character);

 const characterContainer = document.createElement('div');

 const header = generateHeader();
 characterContainer.appendChild(header);

 const infoCharacter = characterDetails(character);
 characterContainer.appendChild(infoCharacter);

 const footer = generateFooter();
 characterContainer.appendChild(footer);
   
    return characterContainer
}
