import { chatCompletions } from "../lib/openiaAPI.js";

export const createChat = () => {
  const chat = document.createElement("div");
  chat.setAttribute("id", "chat");

  const chatWindow = document.createElement("div");
  chatWindow.setAttribute("id", "chat-window");

  const input = document.createElement("input");
  input.setAttribute("id", "input-chat");

  const buttonChat = document.createElement("button");
  buttonChat.setAttribute("data-testid", "button-chat");
  buttonChat.textContent = "Enviar";
  buttonChat.classList.add("chat-button");

  buttonChat.addEventListener("click", () => {
    const inputValue = input.value;

    // Crear un globo de diálogo para el mensaje del usuario
    const userMessageElement = createMessageElement(inputValue, "user");
    chatWindow.appendChild(userMessageElement);

    //función que consume la api y retorna chat 
    chatCompletions(localStorage.getItem("apiKeyValue"), inputValue)
      .then((messages) => {
        // Manejar los mensajes de respuesta de la API
        const responseMessage = messages.choices[0].message.content;

        // Crear un globo de diálogo para la respuesta de la IA
        const responseElement = createMessageElement(responseMessage, "ai");
        chatWindow.appendChild(responseElement);
      })
      .catch((error) => {
        console.error("Error al obtener la respuesta de la API:", error);
      })
      .finally(() => {
        // Limpia input después de enviar el mensaje
        input.value = "";
      });
  });

  chat.appendChild(chatWindow);
  chat.appendChild(input);
  chat.appendChild(buttonChat);

  return chat;
};

// crear un globo de diálogo con el mensaje y clase especificados
const createMessageElement = (message, className) => {
  const messageElement = document.createElement("div");
  messageElement.classList.add("chat-message", className);
  messageElement.textContent = message;
  return messageElement;
};

