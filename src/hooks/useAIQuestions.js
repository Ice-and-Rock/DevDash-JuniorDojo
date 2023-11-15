import { useState, useEffect } from 'react';
import OpenAI from 'openai';

const openAIKey2 = process.env.OPEN_AI_KEY;
const openAIKey = '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';
// const openAIUrl = import.meta.env.OPEN_AI_URL;

// THE BELOW SCRIPT IS BAD
const openai = new OpenAI({apiKey: openAIKey, dangerouslyAllowBrowser: true});

const useAIQuestions = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const chatCompletion = await openai.chat.completions.create({
          model: 'gpt-3.5-turbo',
          messages: [
            // {
            //   role: 'system',
            //   content: 'You are a helpful assistant.',
            // },
            {
              role: 'system',
              content:
                'generate 10 javascript interview questions for a junior full stack developer with answers. include incorrect answers, format the response as a JSON questions object in the shape of: [{"question": "What is the primary purpose of the \'map\' function in JavaScript?", "answers": {"correct": "Transforms each element of an array and returns a new array.", "incorrect": ["Adds a new element to the end of the array.", "Removes the first element from the array.", "Concatenates two arrays into a single array."]}}]',
            },
          ],
        });

        console.log('questions:', chatCompletion);
        // Assuming the API response has a 'choices' property with the questions
        setQuestions(chatCompletion.choices);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };

    fetchQuestions();
  }, []); 

  return questions;
};

export default useAIQuestions;
