import { navigateTo } from "../router.js";

export const renderItems = (data) => {
  const ulElement = document.createElement("ul");
  ulElement.classList.add("Cards");

  data.forEach((props) => {
    const liElement = document.createElement("li");
    liElement.classList.add("Info");

    // Crear el elemento dl
    const dlElement = document.createElement("dl");
    dlElement.setAttribute("itemscope", "");
    dlElement.setAttribute("itemtype", "WomenInTech");

    // Crear el elemento img
    const imgElement = document.createElement("img");
    imgElement.setAttribute("src", props.imageUrl);
    imgElement.setAttribute("alt", props.name);
    const link = document.createElement("a");
    link.addEventListener("click",function(){
      console.log(props);
    navigateTo("/CharacterDetails",{
      id: props.id,
      name: props.name,
      imageSource: props.imageUrl,
      description: props.shortDescription,
    });
  });
    //link.setAttribute("href",`/CharacterDetails?id=${element.id}`);
    

// Contenedor Li
    const liContainer = document.createElement("div");
    liContainer.classList.add("li-container");
    liContainer.setAttribute("data", "id");
    

    //Contenedor info
    const infoContainer = document.createElement("div");
    infoContainer.classList.add("info-container");

    // Crear y agregar el elemento dt y dd para Nombre
    const dtNombre = document.createElement("dt");
    dtNombre.textContent = "Nombre:";
    const ddNombre = document.createElement("dd");
    ddNombre.setAttribute("itemprop", "name");
    ddNombre.textContent = props.name;

    // Crear y agregar el elemento dt y dd para Descripción
    const dtDescripcion = document.createElement("dt");
    dtDescripcion.textContent = "Descripción:";
    const ddDescripcion = document.createElement("dd");
    ddDescripcion.setAttribute("itemprop", "shortDescription");
    ddDescripcion.textContent = props.shortDescription;

    // Crear y agregar el elemento dt y dd para Año de Nacimiento
    const dtAñoNacimiento = document.createElement("dt");
    dtAñoNacimiento.textContent = "Año de Nacimiento:";
    const ddAñoNacimiento = document.createElement("dd");
    ddAñoNacimiento.setAttribute("itemprop", "yearOfBirth");
    ddAñoNacimiento.textContent = props.facts.yearOfBirth;

    // Crear y agregar el elemento dt y dd para Campo de Estudio
    const dtCampoEstudio = document.createElement("dt");
    dtCampoEstudio.textContent = "Campo de Estudio:";
    const ddCampoEstudio = document.createElement("dd");
    ddCampoEstudio.setAttribute("itemprop", "mainField");
    ddCampoEstudio.textContent = props.facts.mainField;

    // Agregar todos los elementos creados al DOM
    infoContainer.appendChild(link);
    link.appendChild(imgElement);
    infoContainer.appendChild(dtNombre);
    infoContainer.appendChild(ddNombre);
    infoContainer.appendChild(dtDescripcion);
    infoContainer.appendChild(ddDescripcion);
    infoContainer.appendChild(dtAñoNacimiento);
    infoContainer.appendChild(ddAñoNacimiento);
    infoContainer.appendChild(dtCampoEstudio);
    infoContainer.appendChild(ddCampoEstudio);
    infoContainer.appendChild(dlElement);

  

    liElement.appendChild(infoContainer);
    liContainer.appendChild(liElement);

    
    ulElement.appendChild(liContainer);
  });

  return ulElement;
};

/*export const renderItems = (data) => {
  const cardsList = document.createElement("ul");
cardsList.classList.add("Cards");
  let tarjetas = "";
  data.forEach((element) => {
    cardsList.innerHTML += `<li class="Info" 
  <dl itemscope itemtype="WomenInTech">
  <img src="${element.imageUrl}" alt=${element.name} /> 
  <dt>Nombre:</dt><dd itemprop="name">${element.name}</dd>
  <dt>Descripción:</dt><dd itemprop="shortDescription">${element.shortDescription}</dd>
  <dt>Año de Nacimiento:</dt><dd itemprop="yearOfBirth">${element.facts.yearOfBirth}</dd>
  <dt>Campo de Estudio:</dt><dd itemprop="mainField">${element.facts.mainField}</dd>
  </dl> </li>`;
  });

  return cardsList
};*/

//para renderizar cards/data
// ctrl k c comentar! ctr k u descomentar
