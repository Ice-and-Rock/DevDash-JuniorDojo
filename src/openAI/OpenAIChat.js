import React, { useState, useEffect } from 'react';
import OpenAI from 'openai';

const OpenAIChat = () => {
  const [responseData, setResponseData] = useState(null);
  const openAIKey2 = process.env.REACT_APP_OPENAI_API_KEY;

  useEffect(() => {
    const openai = new OpenAI({ apiKey: openAIKey2, dangerouslyAllowBrowser: true, });
    
    const fetchData = async () => {
      try {
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
      const responseData = JSON.parse(completion.choices[0].message.content);
      console.log(responseData);
      // console.log(completion.choices[0].message.content);
      setResponseData(responseData) 
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
    fetchData();
  }, []); // Empty dependency array to run the effect only once on component mount

  return (
    <div>
      {responseData ? (
        <div>
          <h1>Interview Questions</h1>
          <ul>
            {responseData.questions.map((question, index) => (
              <li key={index}>
                <p>{question.question}</p>
                <ul>
                  <li>Correct: {question.answers.correct}</li>
                  <li>Incorrect: {question.answers.incorrect.join(', ')}</li>
                </ul>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading...</p>
      )}
     
    </div>
  );
};

export default OpenAIChat;
