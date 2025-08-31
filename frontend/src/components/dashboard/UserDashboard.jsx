import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaUser, FaClipboardList, FaCog } from "react-icons/fa";

const UserDashboard = () => {
  return (
    <Container fluid className="mt-4">
      <h2 className="mb-4">User Dashboard</h2>
      <Row>
        <Col md={4}>
          <Card className="mb-4 shadow-sm">
            <Card.Body>
              <FaUser size={30} className="mb-2" />
              <Card.Title>My Profile</Card.Title>
              <Card.Text>View and update your personal information.</Card.Text>
              <Button variant="primary">Go</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="mb-4 shadow-sm">
            <Card.Body>
              <FaClipboardList size={30} className="mb-2" />
              <Card.Title>My Orders</Card.Title>
              <Card.Text>Check your past orders and track new ones.</Card.Text>
              <Button variant="success">Go</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="mb-4 shadow-sm">
            <Card.Body>
              <FaCog size={30} className="mb-2" />
              <Card.Title>Settings</Card.Title>
              <Card.Text>Manage account settings and preferences.</Card.Text>
              <Button variant="secondary">Go</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default UserDashboard;
