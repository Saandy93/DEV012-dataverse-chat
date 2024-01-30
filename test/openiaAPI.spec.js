import { chatCompletions } from "../lib/openiaAPI";

const openIAResponse = jest
  .fn()
  .mockResolvedValueOnce({ choices: [{ message: ["role","content"] }] });

// hacer implementación falsa de fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: openIAResponse,
  })
);

describe("Endpoint de openIA", () => {
  it("La API es llamada con los datos adecuados", () => {
    openIAResponse.mockResolvedValueOnce({ choices: [{ message: ["role","content"] }] });

    const apiKeyValue = "12456";
    const characterName = "CharacterName";
    const inputValue = "";

    chatCompletions(apiKeyValue, characterName, inputValue); //3 parametros?

    expect(global.fetch).toBeCalledWith(
      "https://api.openai.com/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${apiKeyValue}`,
          "Content-Type": "application/json"
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
      }
    );
  });

  it("El edpoint responde de manera correcta", () => {
    const response = {
      "choices": [
        {
          "message": ["role", "content"], 
        },
      ],
    };

    openIAResponse.mockResolvedValueOnce(response);

    const apiKeyValue = "12345";
    const characterName = "CharacterName";
    const inputValue = "";

    return chatCompletions(apiKeyValue, characterName, inputValue).then(
      (resolved) => {
        expect(resolved.choices).toEqual(response.choices);
      }
    );
  });
});
