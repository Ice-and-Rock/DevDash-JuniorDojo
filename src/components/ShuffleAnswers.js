// ShuffledAnswers.js
import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

const ShuffledAnswers = ({ question, handleAnswerClick }) => {
  const [shuffledAnswers, setShuffledAnswers] = useState([]);
  
  useEffect(() => {
    shuffleAnswers();
  }, []);

  const shuffleAnswers = () => {
    const correctAnswer = question.answers.correct;
    const incorrectAnswers = question.answers.incorrect;
    const allAnswers = [correctAnswer, ...incorrectAnswers];
    const shuffled = allAnswers.sort(() => Math.random() - 0.5);
    setShuffledAnswers(shuffled);
  };

  return (
    <div className="d-grid gap-3">
      {shuffledAnswers.map((answer, answerIndex) => (
        <Button
          key={answerIndex}
          variant="primary"
          size="md"
          onClick={() => handleAnswerClick(answer === question.answers.correct)}
        >
          {answer}
        </Button>
      ))}
    </div>
  );
};

export default ShuffledAnswers;
