import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Customnavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand style={{ cursor: "pointer"}}>
          <Link to ="/" style= {{textDecoration: "none", color: "inherit" }}>Excel Analytics</Link>
        </Navbar.Brand>
        <Nav className="ms-auto">
          <Button as={Link} to="/login" variant="outline-light" className="me-2">
            Login
          </Button>
          <Button as={Link} to="/signup" variant="warning">
            Sign Up
          </Button>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Customnavbar;
