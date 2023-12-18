export const generateHeader = () => {
  const headerElement = document.createElement('header');

  // Título
  const titleElement = document.createElement('h1');
  titleElement.textContent = 'Mujeres Pioneras en la Ciencia y la Tecnología';

  // Agrega título al header
  headerElement.appendChild(titleElement);

  return headerElement;
};