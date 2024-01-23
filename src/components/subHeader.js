export const subHeader = () => {
  const mainElement = document.createElement("main");

  // Primer bloque de contenido
  const firstHeading = document.createElement("h2");
  firstHeading.textContent =
    "Las Visionarias de la Informática y las Matemáticas";

  const firstParagraph = document.createElement("p");
  firstParagraph.textContent =
    "Destacando a Ada Lovelace, Emmy Noether, Hypatia de Alejandría y otras pioneras que revolucionaron el mundo de la informática y las matemáticas a lo largo de la historia.";

  // Segundo bloque de contenido
  const secondHeading = document.createElement("h2");
  secondHeading.textContent = "Innovadoras en Diversas Disciplinas";

  const secondParagraph = document.createElement("p");
  secondParagraph.textContent =
    "Resaltando a Marjorie Lee Browne, Shakuntala Devi, Yoko Shimomura y otras mujeres que dejaron su huella en campos diversos, desde la matemática y la música hasta la informática y la programación.";

  // Agregar elementos al main
  mainElement.appendChild(firstHeading);
  mainElement.appendChild(firstParagraph);
  mainElement.appendChild(secondHeading);
  mainElement.appendChild(secondParagraph);

  return mainElement;
};
