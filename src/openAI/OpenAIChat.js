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
          { role: "user", content: 
             'generate 10 javascript interview questions for a junior full stack developer with answers. include incorrect answers, format the response as a JSON questions object in the shape of: [{"question": "What is the primary purpose of the \'map\' function in JavaScript?", "answers": {"correct": "Transforms each element of an array and returns a new array.", "incorrect": ["Adds a new element to the end of the array.", "Removes the first element from the array.", "Concatenates two arrays into a single array."]}}]',
    },
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
     
    </div>
  );
};

export default OpenAIChat;
