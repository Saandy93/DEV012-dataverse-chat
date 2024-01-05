export const characterDetails = (element) => {

 const Details = document.createElement('div');
   Details.setAttribute("id","detailsContainer");

   const imgContainer = document.createElement('div');
    imgContainer.setAttribute("id","imageInfoContainer");
    

    const image = document.createElement("img");
    image.src = '/images/marie-curie.jpg';
    image.alt = "Imagen Central";
    image.className = "imgDetails"; // Agrega una clase para aplicar estilos desde CSS
    imgContainer.appendChild(image);


    const characterInfo = document.createElement('div');
    characterInfo.setAttribute("id","text");

    const characterName = document.createElement('h2');
    characterName.textContent = 'Nombre:'+ element.name;

    const characterDescription = document.createElement('h2');
    characterDescription.textContent ='Descripción:';
    characterName.className = "name";
    characterDescription.className = "info";
    
    characterInfo.appendChild(characterName);
    characterInfo.appendChild(characterDescription)

    imgContainer.appendChild(characterInfo);
    Details.appendChild(imgContainer);
   

    

    return Details
}