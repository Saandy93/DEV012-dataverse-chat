import { generateHeader } from "../components/header.js";
import { generateFooter } from "../components/Footer.js";
import { apiKey } from "../components/API.js";

export const api = () => {
  const apiContainer = document.createElement("div");

  const header = generateHeader();
  apiContainer.appendChild(header);

  const api = apiKey();
  apiContainer.appendChild(api);

  const footer = generateFooter();
  apiContainer.appendChild(footer);

  return apiContainer;
};
