
const Results = ({ userAnswers, responseData }) => {
  return (
    <div>
      <p>{userAnswers}</p>
      <p>{responseData.questions} </p>
    </div>
  )
};

export default Results
