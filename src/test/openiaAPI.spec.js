import { chatCompletions } from "../lib/openiaAPI";

const openIAResponse = jest.fn().mockResolvedValueOnce( { choices: [{ message: 'foo'}] });


// hacer implementación falsa de fetch
global.fetch = jest.fn(() => Promise.resolve({
    json: openIAResponse
  }));
  

  describe('Endpoint de openIA', () =>
  {
    it('La API es llamada con los datos adecuados', () => {
  
        openIAResponse.mockResolvedValueOnce({ choices: [{ message: 'foo' }] });
  
        const apiKeyValue = '12456';
        const characterName = 'CharacterName';
        const inputValue = 'foo';
  
      chatCompletions(apiKeyValue, characterName, inputValue); //3 parametro?
  
      expect(global.fetch).toBeCalledWith('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKeyValue}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          'model': 'gpt-3.5-turbo',
          messages: [
            {
              'role': 'system',
              'content': `Finge que eres ${characterName}`
            },
            {
              'role': 'user',
              'content': inputValue
            },
          ],
        })
      });
    });

    it('El edpoint responde de manera correcta', () => {

        const response = {
          "choices": [
            {
              "message": {
                "role": "assistant",
                "content": "¡Hola!"
              }
            }]
        };
    
        openIAResponse.mockResolvedValueOnce(response);

        const apiKeyValue = '12345';
        const characterName = 'CharacterName'; 
        const inputValue = 'foo';
    
    
                return chatCompletions(apiKeyValue, characterName, inputValue)
                  .then((resolved) => {
                  expect(resolved).toEqual(response);
                });
          });
    })