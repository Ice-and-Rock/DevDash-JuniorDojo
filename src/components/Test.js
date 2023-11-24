import React, { useState } from "react";
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
        <div>
          <p>Loading...</p>
          <Spinner animation="border" size="lg" />
        </div>
      ) : responseData && responseData.questions ? (
        <div>
          <div className="Bootstrap render">
            <Container className="m-6 p-6">
              {responseData.questions.map((questionData, index) => (
                <Card key={index}>
                  <Card.Title>{questionData.question}</Card.Title>

                  <div className="d-grid gap-2">
                    {/* <li>Correct: {questionData.answers.correct}</li> */}
                    {/* <li>Incorrect: {questionData.answers.incorrect.join(', ')}</li> */}

                    <Button variant="primary" size="lg">
                      {questionData.answers.correct}
                    </Button>

                    {questionData.answers.incorrect.map(
                      (incorrectAnswer, index) => (
                        <Button variant="primary" size="lg" key={index}>
                          {incorrectAnswer}
                        </Button>
                      )
                    )}
                  </div>
                </Card>
              ))}
            </Container>
          </div>
        </div>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default Test;
