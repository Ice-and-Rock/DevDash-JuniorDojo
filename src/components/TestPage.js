import React from "react";
import { useParams } from "react-router-dom";
import Quiz from "./Test";

const TestPage = () => {
  const { subject } = useParams();

  return (
    <div>
      <h1>{subject.toUpperCase()} Quiz</h1>
      <Quiz subject={subject} />
    </div>
  );
};

export default TestPage;
