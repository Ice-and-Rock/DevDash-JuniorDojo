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

  //MODAL COMPONENT
  const [showModal, setShowModal] = useState(false);
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const grantAccess = () => {
    setPasswordAccess(true);
    handleClose();
  };

  return (
    <Container>
      {!passwordAccess && (
        <Card style={{ width: "18rem" }}>
          {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
          <Card.Body>
            <Card.Title>{subject.toUpperCase()} QUIZ</Card.Title>
            <Card.Header>Welcome to your {subject.toUpperCase()} test!</Card.Header>
            <Card.Text>The test will consist of TEN multiple-choice questions. After you've finished, you can see your score and also reset, if you'd like to start again.</Card.Text>
            <Card.Text>In order to continue, please click on the button below to start</Card.Text>
            <>
              <Button variant="primary" onClick={handleShow}>
                Enter Password
              </Button>
              <PasswordModal showModal={showModal} handleClose={handleClose} grantAccess={grantAccess} />
            </>
          </Card.Body>
        </Card>
      )}
      {passwordAccess && (
        <>
          <h1>{subject.toUpperCase()} TEST...</h1>
          <Test subject={subject} />
        </>
      )}
    </Container>
  );
};

export default TestPage;
