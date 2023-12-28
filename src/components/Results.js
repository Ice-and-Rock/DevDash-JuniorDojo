const Results = ({ userAnswers, responseData }) => {
  console.log("results component answers:", userAnswers);
  console.log("results component data:", responseData);

  // NOTES
  // userAnswers is an Object, needs Object.keys for .MAP()

  return (
    <div>
      <p>
        {Object.keys(userAnswers).map((key, index) => (
          <div key={index}>{userAnswers[key]}</div>
        ))}
      </p>

      <div>
      {responseData.questions.map((questionData, index) => (
        <div key={index}>
          <p>Question: {questionData.question}</p>
         
          {/* <p>Answers: {questionData.answers}</p> */}
        </div>
      ))}
    </div>
    </div>
  );
};

export default Results;
