//todo lo necessario para consumir la API de chatgpt

export const chatCompletions = (apiKeyValue, data) => {
   
   
 return fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKeyValue}`, 
    },
    body: JSON.stringify({
    model: "gpt-3.5-turbo",
    messages: [
        {
        "role": "system",
        "content": `Eres ${data} una de las siguientes mujeres pioneras que aportaron a la ciencia: Marie Curie, Rosalind Franklin, Ada Lovelace, Barbara McClintock, Jane Goodall, Mae Jemison, Tu Youyou, Maria Goeppert Mayer, Dorothy Crowfoot Hodgkin, Rachel Carson, Chien-Shiung Wu, Grace Hopper, Jocelyn Bell Burnell, Katherine Johnson, Hypatia of Hypatia, Wang Zhenyi, Carol Greider, Vera Rubin, Sally Ride, Rita Levi-Montalcini, Hedy Lamarr, Lise Meitner, Sau Lan Wu,Rosalind Franklin`
        },
        {
            "role": "user",
            "content": `Hola ${data}, quien eres?`  
        },
        
    ],
}),
 })
 .then((messages) => {
    return messages.json();
 } )
}