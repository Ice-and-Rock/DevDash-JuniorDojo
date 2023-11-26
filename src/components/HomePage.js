import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import {Example} from "./Example"; // Assuming Example is a React Bootstrap component

const HomePage = () => {
  return (
    <Container className="text-center mt-5">
      <h1>Welcome to Your Interview Practice App!</h1>
      <p className="lead">Choose your topic:</p>
      <Row className="justify-content-center">
        <Col xs={12} sm={6} md={4} lg={3} className="mb-3">
          <Link to="/test/react" className="text-decoration-none">
            <Button variant="primary" >
              React
            </Button>
          </Link>
        </Col>
        <Col xs={12} sm={6} md={4} lg={3} className="mb-3">
          <Link to="/test/javascript" className="text-decoration-none">
            <Button variant="success" >
              Javascript
            </Button>
          </Link>
        </Col>
        <Col xs={12} sm={6} md={4} lg={3} className="mb-3">
          <Link to="/test/css" className="text-decoration-none">
            <Button variant="info" >
              CSS
            </Button>
          </Link>
        </Col>
        <Col xs={12} sm={6} md={4} lg={3} className="mb-3">
          <Link to="/test/sql" className="text-decoration-none">
            <Button variant="warning" >
              SQL
            </Button>
          </Link>
        </Col>
      </Row>
      {/* <Example /> */}
    </Container>
  );
};

export default HomePage;
