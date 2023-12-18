export const renderItems = (data) => {
  let tarjetas = "";
  data.forEach((element) => {
    tarjetas += `<li class="Info"
  <dl itemscope itemtype="WomenInTech">
  <img src="${element.imageUrl}" alt=${element.name} /> 
  <dt>Nombre:</dt><dd itemprop="name">${element.name}</dd>
  <dt>Descripción:</dt><dd itemprop="shortDescription">${element.shortDescription}</dd>
  <dt>Año de Nacimiento:</dt><dd itemprop="yearOfBirth">${element.facts.yearOfBirth}</dd>
  <dt>Campo de Estudio:</dt><dd itemprop="mainField">${element.facts.mainField}</dd>
  </dl> </li>`;
  });

  return `<ul class="Cards">${tarjetas}</ul>`;
};

//para renderizar cards/data
// ctrl k c comentar! ctr k u descomentar
