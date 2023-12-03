import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import dummyData from "../data/dummyData.json";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";
// import useOpenAIQuestions from '../hooks/useAIQuestions';
// import useOpenAIChat from "../openAI/useOpenAIChat";

const Test = ({ subject }) => {
  // IMPORTANT ❗️
  // Below is the API fetch
  // Disabled for now ⛔️
  // const [responseData, loading] = useOpenAIChat(subject);
  // const responseData = '../../data/dummyData.json'
  const [responseData, setResponseData] = useState(dummyData);
  const [loading, setLoading] = useState(null);

// States for the Test questions and score 
  // score state is added when 'cerrect answer is true
  // showScore boolean, set to true at the end
  // currentQuestion set to index 0 and changes when answer is given
  // useranswers will create an object of answers
const [score, setScore] = useState(0)
const [showScore, setShowScore] = useState(false) 
const [currentQuestion, setCurrentQuestion] = useState(0) 
const [userAnswers, setUserAnswers] = useState({});


const handleAnswerClick = (isCorrect) => {
  setUserAnswers((prevAnswers) => {
    const updatedAnswers = {
      ...prevAnswers,
      [currentQuestion]: isCorrect,
    };

    setUserAnswers(updatedAnswers)

  // Move to the next question when funciotn is called 
  if (currentQuestion < responseData.questions.length - 1) {
    setCurrentQuestion((prevIndex) => prevIndex + 1);
  } else if (currentQuestion === responseData.questions.length - 1) {
    setShowScore(true)
    console.log("end of questions")
  } 
    // call calculateScore after setting UPDATED ANSWERS ! 
    calculateScore(updatedAnswers);

    return updatedAnswers;
  });
  
};



// Calculate the score, but it must use updatedAnswers object !
const calculateScore = (updatedAnswers) => {
  console.log("calculate score running")
  const correctAnswersCount = Object.values(updatedAnswers).filter(
    (answer) => answer
    ).length;
    setScore(correctAnswersCount);
    console.log("correct Answer Count:", correctAnswersCount)
  };

  // Checks ⭐️
  console.log("user answers:", userAnswers)
  console.log("Score:", score)

  // Simple reset 
  const resetTest = () => {
    setCurrentQuestion(0);
    setUserAnswers({});
    setScore(0);
    setShowScore(false);
  };
  
  
  return (
    <div>
    {loading ? (
      <div>
        <p>Loading...</p>
        <Spinner animation="border" size="lg" />
      </div>
    ) : responseData && responseData.questions ? (
      <div>
        <Container className="m-6 p-6">
          <Card>
            <Card.Title>
              {responseData.questions[currentQuestion].question}
            </Card.Title>

            <div className="d-grid gap-2">
              <Button
                variant="primary"
                size="lg"
                onClick={() => handleAnswerClick(true)} // Correct answer
              >
                {responseData.questions[currentQuestion].answers.correct}
              </Button>

              {responseData.questions[currentQuestion].answers.incorrect.map(
                (incorrectAnswer, answerIndex) => (
                  <Button
                    key={answerIndex}
                    variant="primary"
                    size="lg"
                    onClick={() => handleAnswerClick(false)} // Incorrect answer
                  >
                    {incorrectAnswer}
                  </Button>
                )
              )}
            </div>
          </Card>
          <div className="text-center mt-3">
            {/* <Button variant="success" onClick={calculateScore}>
              Calculate Score
            </Button> */}
            <Button variant="danger" onClick={resetTest} className="ms-2">
              Reset Test
            </Button>
            {Object.keys(userAnswers).length ===
            responseData.questions.length ? (
              <div>
                <h2>Your Score: {score}</h2>
                <p>
                  Correct Answers: {score} /{" "}
                  {responseData.questions.length}
                </p>
              </div>
            ) : null}
          </div>
        </Container>
      </div>
    ) : (
      <p>No data available</p>
    )}
  </div>
);

};

export default Test;
