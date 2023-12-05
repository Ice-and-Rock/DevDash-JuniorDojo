import React from "react";
import { Card, Button, CardFooter } from "react-bootstrap";

const ShowScore = ({ score, totalQuestions, resetTest }) => {
  return (
    <Card className="text-center bg-info text-white">
      <Card.Body>
        <Card.Title>Your Score</Card.Title>
        <h1 className="display-4">{score}</h1>
        <Card.Text>
          
            Correct Answers: {score} / {totalQuestions}
          
        </Card.Text>
      </Card.Body>
      <CardFooter>
        <Card.Text>
        Well done, you've got this! 🎉
        </Card.Text>
        <Card.Text>
        You're going to do really well in the Interview. Just remember to stay calm and have fun... 
        </Card.Text>
        <Card.Text>
        ⭐️ Good Luck! ⭐️ 
        </Card.Text>
        <Card.Text>
          Leave your feedback <a href="https://example.com/feedback">here</a>!
        </Card.Text>
      </CardFooter>
      <Button variant="danger" onClick={resetTest} className="ms-2 p-2 m-4">
        Reset Test
      </Button>
    </Card>
  );
};

export default ShowScore;
