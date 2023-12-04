import React from "react";
import { Card } from "react-bootstrap";

const ShowScore = ({ score, totalQuestions }) => {
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
    </Card>
  );
};

export default ShowScore;
