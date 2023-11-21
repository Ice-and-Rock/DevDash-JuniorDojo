import React, { useState, useEffect } from 'react';
import OpenAI from 'openai';

const OpenAIChat = () => {
  const [response, setResponse] = useState(null);
  const openAIKey2 = process.env.REACT_APP_OPENAI_API_KEY;

  useEffect(() => {
    const openai = new OpenAI({ apiKey: openAIKey2, dangerouslyAllowBrowser: true, });
    
    const fetchData = async () => {
      const completion = await openai.chat.completions.create({
        messages: [
          {
            role: "system",
            content: "You are a helpful assistant designed to output JSON.",
          },
          { role: "user", content: "Can you tell me how cool i am?" },
        ],
        model: "gpt-3.5-turbo-1106",
        response_format: { type: "json_object" },
      });
      console.log(completion.choices[0].message.content);
      setResponse(completion.choices[0].message.content) 
    }

    fetchData();
  }, []); // Empty dependency array to run the effect only once on component mount

  return (
    <div>
      {response ? (
        <p>{response}</p>
      ) : (
        <p>Loading...</p>
      )}
      <div>
      {response}
      </div>
    </div>
  );
};

export default OpenAIChat;
