//todo lo necessario para consumir la API de chatgpt

export const chatCompletions = (apiKeyValue, characterName, inputValue) => {
  return fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKeyValue}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `Finge que eres ${characterName}`,
        },
        {
          role: "user",
          content: inputValue,
        },
      ],
    }),
  }).then((messages) => {
    return messages.json();
  });
};
