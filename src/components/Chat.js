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

    chatCompletions(localStorage.getItem("apiKeyValue"), inputValue).then(
      (messages) => {
        // Manejar los mensajes de respuesta de la API
        const responseMessage = messages.choices[0].message.content;

        // nuevo contenedor para mostrar el mensaje en chatWindow
        const responseElement = document.createElement("div");
        responseElement.classList.add("chat-message");
        responseElement.textContent = responseMessage;

        chatWindow.appendChild(responseElement);

        // Limpia input después de enviar el mensaje
        input.value = "";
      }
    );
  });

  chat.appendChild(chatWindow);
  chat.appendChild(input);
  chat.appendChild(buttonChat);

  return chat;
};

// Puedes agregar más configuraciones, eventos, etc., según tus necesidades.
/*

    const addMessage = (message) => {
      const messageElement = document.createElement('div');
      messageElement.classList.add('chat-message');
      messageElement.textContent = message;  //creatTextNode?
  
      chatWindow.appendChild(messageElement);
    }
  
    const render = () => {
        chat.appendChild(chatWindow);
      return chat;
    }
  
    return {
      addMessage,
      render,
    };*/
