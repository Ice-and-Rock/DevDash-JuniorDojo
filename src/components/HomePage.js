import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import  topics  from '../data/topics'

const HomePage = () => {
  console.log("homescreen running");
  return (
    <Container className="text-center mt-5">
      <h1 className="app-title">Dev Dash: Junior Dojo</h1>
      <h3 className="app-subtitle">Master Your Coding Skills</h3>     
      <p className="app-description">
        Welcome to the Dev Dash: Junior Dojo, your go-to platform for mastering
        coding skills and acing job interviews. Whether you're a junior developer
        or on the path to becoming one, this is where your training begins.
      </p>
      <div
        className="app-gif-container"
      >
        <iframe
        title="dojoGif"
          src="https://giphy.com/embed/l2SpKwcxCtJelokO4"
          width="100%"
          height="100%"
          style={{ borderRadius: "10px", pointerEvents: "none" }}
          
          className="giphy-embed"
          allowFullScreen
        ></iframe>
      </div>
      <div className="topic-section">
      <h2 className="app-lead">Choose your topic:</h2>      
      <Row xs={1} md={2} lg={3} className="g-4">
         
          {topics.map((topic, index) => (
            <Col key={index} className="mb-3">
              <Link to={topic.link} className="text-decoration-none">
                <Card className="topic-card" bg='' text="black">
                  <Card.Body>
                    <Card.Title>{topic.title}</Card.Title>
                    <Card.Text>{topic.text}</Card.Text>
                    <Button variant={topic.variant}>Explore</Button>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
     
       


      {/* <Row className="justify-content-center">
        <Col xs={12} sm={6} md={4} lg={3} className="mb-3">
          <Link to="/test/react" className="text-decoration-none">
            <Button variant="primary">React</Button>
          </Link>
        </Col>
        <Col xs={12} sm={6} md={4} lg={3} className="mb-3">
          <Link to="/test/javascript" className="text-decoration-none">
            <Button variant="success">Javascript</Button>
          </Link>
        </Col>
        <Col xs={12} sm={6} md={4} lg={3} className="mb-3">
          <Link to="/test/css" className="text-decoration-none">
            <Button variant="info">CSS</Button>
          </Link>
        </Col>
        <Col xs={12} sm={6} md={4} lg={3} className="mb-3">
          <Link to="/test/sql" className="text-decoration-none">
            <Button variant="warning">SQL</Button>
          </Link>
        </Col>
        <Col xs={12} sm={6} md={4} lg={3} className="mb-3">
          <Link to="/test/typescript" className="text-decoration-none">
            <Button variant="primary">Typescript</Button>
          </Link>
        </Col>
        <Col xs={12} sm={6} md={4} lg={3} className="mb-3">
          <Link to="/test/tailwind" className="text-decoration-none">
            <Button variant="success">Tailwind</Button>
          </Link>
        </Col>
        <Col xs={12} sm={6} md={4} lg={3} className="mb-3">
          <Link to="/test/python" className="text-decoration-none">
            <Button variant="info">Python</Button>
          </Link>
        </Col>
        <Col xs={12} sm={6} md={4} lg={3} className="mb-3">
          <Link to="/test/react-bootstrap" className="text-decoration-none">
            <Button variant="warning">React-Bootstrap</Button>
          </Link>
        </Col>
      </Row> */}
      </div>

      <div className="openai-section">
        <h2 className="app-lead">Personalized Experience with OpenAI</h2>
        <p className="app-description">
          We use the OpenAI API to provide a personalized learning experience for each user.
          The content you see is dynamically generated based on your needs and preferences.
          This ensures a unique and tailored practice environment.
        </p>
      </div>
    </Container>
  );
};

export default HomePage;
