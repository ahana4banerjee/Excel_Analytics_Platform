import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaUsers, FaBoxOpen, FaChartLine, FaTools } from "react-icons/fa";

const AdminDashboard = () => {
  return (
    <Container fluid className="mt-4">
      <h2 className="mb-4">Admin Dashboard</h2>
      <Row>
        <Col md={3}>
          <Card className="mb-4 shadow-sm">
            <Card.Body>
              <FaUsers size={30} className="mb-2" />
              <Card.Title>Manage Users</Card.Title>
              <Card.Text>View, edit, or remove users from the system.</Card.Text>
              <Button variant="danger">Go</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3}>
          <Card className="mb-4 shadow-sm">
            <Card.Body>
              <FaBoxOpen size={30} className="mb-2" />
              <Card.Title>Manage Products</Card.Title>
              <Card.Text>Add, edit, or remove products and inventory.</Card.Text>
              <Button variant="primary">Go</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3}>
          <Card className="mb-4 shadow-sm">
            <Card.Body>
              <FaChartLine size={30} className="mb-2" />
              <Card.Title>Analytics</Card.Title>
              <Card.Text>View sales reports and user statistics.</Card.Text>
              <Button variant="success">Go</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3}>
          <Card className="mb-4 shadow-sm">
            <Card.Body>
              <FaTools size={30} className="mb-2" />
              <Card.Title>Settings</Card.Title>
              <Card.Text>Manage system configurations and roles.</Card.Text>
              <Button variant="secondary">Go</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminDashboard;
