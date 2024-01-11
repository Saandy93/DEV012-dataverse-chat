export const createChat = () => {

    const chat = document.createElement('div');
    chat.setAttribute("id","chat");
    
  
    const chatWindow = document.createElement('div');
    chatWindow.setAttribute("id","chat-window");

    const input = document.createElement('input');
    input.setAttribute("id", "input-chat");

    const buttonChat = document.createElement('button');
    buttonChat.setAttribute('data-testid', 'button-chat');
    buttonChat.textContent = 'Enviar';
    buttonChat.classList.add("chat-button");

    chat.appendChild(chatWindow);
    chat.appendChild(input);
    chat.appendChild(buttonChat);
  
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

    return chat
  };
  