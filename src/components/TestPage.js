import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Test from "./Test";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/Button";
import PasswordModal from './PasswordModal';



const TestPage = () => {
  const { subject } = useParams();
  const [passwordAccess, setPasswordAccess] = useState(false)
  
  //MODAL COMPONENT
  const [showModal, setShowModal] = useState(false);
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <Container>

{!passwordAccess && (
  <Card style={{ width: '18rem' }}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title>{subject.toUpperCase()} QUIZ</Card.Title>
        <Card.Text>Please click on the button below to start</Card.Text>
        <>
      <Button variant="primary" onClick={handleShow}>
        Enter Password
      </Button>
      <PasswordModal showModal={showModal} handleClose={handleClose} />
    </>
      </Card.Body>
    </Card>
    )}
    {passwordAccess && (
      <>
        <h1>{subject.toUpperCase()} QUIZ...</h1>
        <Test subject={subject} />
      </>
    )}
  </Container>
  );
};

export default TestPage;
