import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Navigation } from './components/NavBar';

const App: React.FC = () => {
  return (
    <div className="app-wrapper">
      {/* 1. Global Navigation */}
      <Navigation />

      {/* 2. Main Content Layout Area */}
      <main>
        {/* Hero Section Container */}
        <Container className="py-5 text-center">
          <Row className="justify-content-center">
            <Col md={8}>
              <h1 className="display-4 fw-bold">Hello World!</h1>
              <p className="lead text-muted">
                Welcome to my revised portfolio running on React and TypeScript.
              </p>
            </Col>
          </Row>
        </Container>

        {/* Future sections (About, Projects, etc.) will be placed here */}
      </main>
    </div>
  );
};

export default App;