import { Card } from "react-bootstrap";

const Results = ({ userAnswers, responseData }) => {
  console.log("results component answers:", userAnswers);
  console.log("results component data:", responseData);

  // NOTES
  // userAnswers is an Object, needs Object.keys for .MAP()
  // combine the index of both .map() methods
  // colour the questions depending on this combination

  return (
    <div>
      <Card.Body>
        <Card.Text>These were your answers:</Card.Text>
        {Object.keys(userAnswers).map((answerBoolean, index) => (
          <div key={index}>
            {/* Render emojis if answerKey is "true/false" */}
            {index + 1}: {userAnswers[answerBoolean] ? "✅" : "❌"}
          </div>
        ))}
      </Card.Body>

      <Card.Body>
        <Card.Text>
          Your correct answers are{" "}
          <span style={{ color: "green", fontWeight: "bold" }}>GREEN</span>,
          with your incorrect answers in{" "}
          <span style={{ color: "red", fontWeight: "bold" }}>RED</span>
        </Card.Text>
        {responseData.questions.map((questionData, index) => (
          <div key={index}>
            <Card.Title>Question {index + 1}:</Card.Title>
            <Card
              // Use the index from previous .map() function for colour *
              style={{ background: userAnswers[index] ? "lightgreen" : "pink" }}
              className="m-2 p-2"
            >
              <Card.Title>{questionData.question}</Card.Title>
              <Card.Text>{questionData.answers.correct}</Card.Text>
            </Card>
          </div>
        ))}
      </Card.Body>
    </div>
  );
};

export default Results;
