import { Card } from "react-bootstrap";

const Results = ({ userAnswers, responseData }) => {
  console.log("results component answers:", userAnswers);
  console.log("results component data:", responseData);

  // NOTES
  // userAnswers is an Object, needs Object.keys for .MAP()

  return (
    // <div>
    //   <Card.Body>
    //     {Object.keys(userAnswers).map((answerKey, index) => (
    //       <div key={index}>{userAnswers[answerKey].toString()}</div>
    //     ))}
    //   </Card.Body>

    //   <Card.Body>
    //     {responseData.questions.map((questionData, index) => (
    //       <div key={index}>
    //         <Card.Title>Question {index + 1}:</Card.Title>
    //         <Card className="m-2 p-2">
    //           <Card.Title>{questionData.question}</Card.Title>
    //           <Card.Text>{questionData.answers.correct}</Card.Text>
    //         </Card>

    //         {/* <p>Answers: {questionData.answers}</p> */}
    //       </div>
    //     ))}
    //   </Card.Body>
    // </div>

    <div>
  <Card.Body>
    {Object.keys(userAnswers).map((answerKey, index) => (
      <div
        key={index}
        style={{ color: userAnswers[answerKey] ? 'green' : 'red' }}
      >
        {index}: {userAnswers[answerKey].toString()}
      </div>
    ))}
  </Card.Body>

  <Card.Body>
    {responseData.questions.map((questionData, index) => (
      <div key={index}>
        <Card.Title>Question {index + 1}:</Card.Title>
        <Card style={{ background: userAnswers[index] ? 'lightgreen' : 'pink' }} className="m-2 p-2">
          <Card.Title>
            {questionData.question}
          </Card.Title>
          <Card.Text>{questionData.answers.correct}</Card.Text>
        </Card>
      </div>
    ))}
  </Card.Body>
</div>

  );
};

export default Results;
