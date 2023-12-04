import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Test from "./Test";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/Button";
import PasswordModal from "./PasswordModal";

const TestPage = () => {
  const { subject } = useParams();
  const [passwordAccess, setPasswordAccess] = useState(false);

  // MODAL COMPONENT
  const [showModal, setShowModal] = useState(false);
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const grantAccess = () => {
    setPasswordAccess(true);
    handleClose();
  };

  return (
    <Container className="mt-5">
      {!passwordAccess && (
        <Card style={{ width: "18rem" }} className="mx-auto">
          <Card.Body>
            <Card.Title className="text-center">{subject.toUpperCase()} QUIZ</Card.Title>
            <Card.Header className="text-center bg-info rounded">Welcome to your {subject.toUpperCase()} test!</Card.Header>
            <Card.Text>
              The test will consist of TEN multiple-choice questions. After you've finished, you can see your score and also reset if you'd like to start again.
            </Card.Text>
            <Card.Text className="text-center">To continue, please enter the password below:</Card.Text>
            <div className="text-center">
              <Button variant="primary" onClick={handleShow}>
                Enter Password
              </Button>
              <PasswordModal showModal={showModal} handleClose={handleClose} grantAccess={grantAccess} />
            </div>
          </Card.Body>
        </Card>
      )}
      {passwordAccess && (
        <div className="text-center mt-3">
          <h1>{subject.toUpperCase()} QUESTIONS...</h1>
          <Test subject={subject} />
        </div>
      )}
    </Container>
  );
};

export default TestPage;
