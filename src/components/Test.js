import React, { useState } from "react";
// import useOpenAIQuestions from '../hooks/useAIQuestions';
import useOpenAIChat from "../openAI/useOpenAIChat";

const Test = ({ subject }) => {
  const [responseData, loading] = useOpenAIChat(subject);
  // const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // const handleAnswerClick = (selectedAnswer) => {
  //   // Handle user's answer logic
  //   // For example, move to the next question
  //   setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  // };

  // const currentQuestion = responseData[currentQuestionIndex];

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : responseData && responseData.questions ? (
        <div>
          <h1>Interview Questions for {subject}</h1>
          <p>Test Question: {responseData.questions[0].question}</p>

          <div>
            <h1>Interview Questions for {subject}</h1>
            <ul>
              {responseData.questions.map((questionData, index) => (
                <li key={index}>
                  <p>{questionData.question}</p>
                  <ul>
                    {/* <li>Correct: {questionData.answers.correct}</li> */}
                    {/* <li>Incorrect: {questionData.answers.incorrect.join(', ')}</li> */}
                    <p>
                      Mapped list of CORRECT answers:
                      <li>{questionData.answers.correct}</li>
                    </p>
                    <p>
                      Mapped list of INCORRECT answrs:
                      <ul>
                        {questionData.answers.incorrect.map(
                          (incorrectAnswer, index) => (
                            <li key={index}>{incorrectAnswer}</li>
                          )
                        )}
                      </ul>
                    </p>
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default Test;
