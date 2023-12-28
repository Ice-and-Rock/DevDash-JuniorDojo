import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";


// import dummyData from "../data/dummyData.json";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";
import useOpenAIChat from "../openAI/useOpenAIChat";
import ShowScore from "./ShowScore";
import ShuffledAnswers from "./ShuffleAnswers";

const Test = ({ subject }) => {
  const [responseData, loading] = useOpenAIChat(subject);
  // IMPORTANT ❗️
  // Below is the DUMMY-DATA used for developement
  // Disabled for now ⛔️
  // const responseData = '../../data/dummyData.json'
  // const [responseData, setResponseData] = useState(dummyData);
  // const [loading, setLoading] = useState(null);

  // States for the Test questions and score
  // score state is added when 'cerrect answer is true
  // showScore boolean, set to true at the end
  // currentQuestion set to index 0 and changes when answer is given
  // useranswers will create an object of answers
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});

  const handleAnswerClick = (isCorrect) => {
    setUserAnswers((prevAnswers) => {
      const updatedAnswers = {
        ...prevAnswers,
        [currentQuestion]: isCorrect,
      };

      setUserAnswers(updatedAnswers);

      // Move to the next question when funciotn is called
      if (currentQuestion < responseData.questions.length - 1) {
        setCurrentQuestion((prevIndex) => prevIndex + 1);
      } else if (currentQuestion === responseData.questions.length - 1) {
        setShowScore(true);
        console.log("end of questions");
      }
      // call calculateScore after setting UPDATED ANSWERS !
      calculateScore(updatedAnswers);

      return updatedAnswers;
    });
  };

  // Calculate the score, but it must use updatedAnswers object !
  const calculateScore = (updatedAnswers) => {
    const correctAnswersCount = Object.values(updatedAnswers).filter(
      (answer) => answer
    ).length;
    setScore(correctAnswersCount);
    console.log(
      "calculate score running ✅",
      "correct Answer Count:",
      correctAnswersCount
    );
  };

  // Checks ⭐️
  console.log("user answers:", userAnswers);
  // console.log("Score:", score)

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
        <div className="text-center p-4">
          <p>Retrieving questions from my AI bot...</p>
          <Spinner animation="border" size="lg" />
          <p>
            This may take a few moments because every Dojo Exam is tailor made
            and unique!{" "}
          </p>
        </div>
      ) : responseData && responseData.questions ? (
        <div>
          <Container className="m-6 p-6">
            {/* Show the score if showScore = true */}
            {showScore ? (
              <ShowScore
                score={score}
                totalQuestions={responseData.questions.length}
                resetTest={resetTest}
                userAnswers={userAnswers}
                responseData={responseData}
              />
            ) : (
              <Card className="m-3 p-3">
                <Card.Title>
                  {responseData.questions[currentQuestion].question}
                </Card.Title>

                
                <ShuffledAnswers
                  question={responseData.questions[currentQuestion]}
                  handleAnswerClick={handleAnswerClick}
                />
                

                <div>
                  <Button
                    variant="danger"
                    onClick={resetTest}
                    className="ms-2 p-2 m-4"
                  >
                    Reset Test
                  </Button>
                </div>

                {/* <div className="text-center mt-3">
                {Object.keys(userAnswers).length === responseData.questions.length ? (
                  <div>
                    <h1>Your Score: {score}</h1>
                    <p>
                      Correct Answers: {score} / {responseData.questions.length}
                    </p>
                  </div>
                ) : null}
              </div> */}
              </Card>
            )}
          </Container>
        </div>
      ) : (
        <h1>No data available</h1>
      )}
    </div>
  );
};

export default Test;
