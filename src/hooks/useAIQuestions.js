import { useState, useEffect } from "react";
import OpenAI from "openai";

const openAIKey = "";
// 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**;

const useAIQuestions = () => {
  // const openAIKey1 = import.meta.env.REACT_APP_OPEN_AI_KEY;
  const openAIKey2 = process.env.REACT_APP_OPENAI_API_KEY;
  const openai = new OpenAI({
    apiKey: openAIKey2,
    dangerouslyAllowBrowser: true,
  });
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    console.log("useEffect running");
    const fetchQuestions = async () => {
      // try {
      //   const chatCompletion = await openai.chat.completions.create({
      //     model: "gpt-3.5-turbo",
      //     messages: [
      //       // {
      //       //   role: 'system',
      //       //   content: 'You are a helpful assistant.',
      //       // },
      //       {
      //         role: "system",
      //         content:
      //           'generate 10 javascript interview questions for a junior full stack developer with answers. include incorrect answers, format the response as a JSON questions object in the shape of: [{"question": "What is the primary purpose of the \'map\' function in JavaScript?", "answers": {"correct": "Transforms each element of an array and returns a new array.", "incorrect": ["Adds a new element to the end of the array.", "Removes the first element from the array.", "Concatenates two arrays into a single array."]}}]',
      //       },
      //     ],
      //   });
      //   console.log(
      //     "1. online specific prompt:",
      //     chatCompletion.choices[0].message
      //   );

        try {
          const response = await fetch('http://localhost:3001/openai/chat/completions', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              model: "gpt-3.5-turbo",
              messages: [
                {role: "system",
                    content:
                'can you say hello to me?'
              }
              ],
            }),
          });
  
          const chatCompletion = await response.json();

        console.log("2. questions:", chatCompletion);
        // Assuming the API response has a 'choices' property with the questions
        setQuestions(chatCompletion.choices);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    fetchQuestions();
  }, []);

  return questions;
};

export default useAIQuestions;
