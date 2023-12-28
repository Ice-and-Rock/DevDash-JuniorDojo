import React, { useState } from "react";
import { Card, Button, CardFooter } from "react-bootstrap";
import { Link } from "react-router-dom";
import Results from "./Results";


const ShowScore = ({ score, totalQuestions, resetTest, userAnswers, responseData }) => {

const [showResults, setShowResults] = useState(false)

const handleShowResults = () => {
  setShowResults(true)
} 

  return (
    <Card className="text-center bg-info text-white">
      <Card.Body>
        <Card.Title>Your Score</Card.Title>
        <h1 className="display-4">{score}</h1>
        <Card.Text>
          Correct Answers: {score} / {totalQuestions}
        </Card.Text>
      </Card.Body>

      {showResults ? (

        <Results userAnswers={userAnswers} responseData={responseData}/>

      ) : (

      <Card.Body> 
        <Card.Title>Well done, you've got this! 🎉</Card.Title>
        <Card.Text>
          You're going to do really well in the Interview. Just remember to stay
          calm and have fun...
        </Card.Text>
        <Card.Text>⭐️ Good Luck! ⭐️</Card.Text>
        <Card.Text>
          Leave your feedback{" "}
          <a
            href="https://www.linkedin.com/in/nicholas-valente-electrics/"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
          !
        </Card.Text>
      </Card.Body>
      )}

      <CardFooter>
        <Button variant="danger" onClick={resetTest} className="ms-2 p-2 m-4">
          Reset Test
        </Button>
        
          <Button variant="primary" onClick={handleShowResults} className="ms-2 p-2 m-4">
            Test Results
          </Button>
        
        <Link to="/">
          <Button variant="success" className="ms-2 p-2 m-4">
            Return Home
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ShowScore;
