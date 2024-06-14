import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';


const DashboardOne = () => {
  return (
    <div>
      <Container >
        <h1 className="mb-4">Dashboard </h1>
        <Row>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Products</Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Analytics</Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Progress</Card.Title>
                <Card.Text> </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};



export default DashboardOne;
