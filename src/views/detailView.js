//import data from "../data/dataset.js";
import { generateHeader } from "../components/header.js";
import { generateFooter } from "../components/Footer.js";
//import { characterData } from "../lib/dataFunctions.js";
import { characterDetails } from "../components/characterDetails.js";



export const details = (props) => {
console.log(props);

 const characterContainer = document.createElement('div');

 const header = generateHeader();
 characterContainer.appendChild(header);

 //const characterId = characterData(data,id);
 


 const infoCharacter = characterDetails(props);
 characterContainer.appendChild(infoCharacter);

 

 const footer = generateFooter();
 characterContainer.appendChild(footer);
   
    return characterContainer
}
