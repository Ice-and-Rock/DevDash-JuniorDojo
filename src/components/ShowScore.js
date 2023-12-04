import React from "react";
import { Card, Button } from "react-bootstrap";

const ShowScore = ({ score, totalQuestions, resetTest }) => {
  return (
    <Card className="text-center bg-info text-white">
      <Card.Body>
        <Card.Title>Your Score</Card.Title>
        <Card.Text>
          <h1 className="display-4">{score}</h1>
          <Card.Text>
            <h1 className="lead">
              Correct Answers: {score} / {totalQuestions}
            </h1>
          </Card.Text>
        </Card.Text>
      </Card.Body>
      <Button variant="danger" onClick={resetTest} className="ms-2 p-2 m-4">
        Reset Test
      </Button>
    </Card>
  );
};

export default ShowScore;
