import React from "react";
import { useParams } from "react-router-dom";
import Test from "./Test";

const TestPage = () => {
  const { subject } = useParams();

  return (
    <div>
      <h1>{subject.toUpperCase()} Quiz</h1>
      <Test subject={subject} />
    </div>
  );
};

export default TestPage;
