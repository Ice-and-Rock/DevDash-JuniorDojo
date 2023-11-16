import React, { useState } from 'react';
import useOpenAIQuestions from '../hooks/useAIQuestions';

const Quiz = ({ subject }) => {
  const questions = useOpenAIQuestions();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleAnswerClick = (selectedAnswer) => {
    // Handle user's answer logic
    // For example, move to the next question
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div>
      {currentQuestion ? (
        <div>
          <p>{currentQuestion}</p>
          
          <ul>
            {currentQuestion.answers.map((option, index) => (
              <li key={index} onClick={() => handleAnswerClick(option)}>
                {option}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div>
          <p>Quiz completed!</p>
        </div>
      )}
    </div>
  );
};

export default Quiz;
