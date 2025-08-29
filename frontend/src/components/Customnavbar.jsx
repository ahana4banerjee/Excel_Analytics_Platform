import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

function Customnavbar({ onLoginClick, onSignUpClick, onHomeClick }) {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand onClick={onHomeClick} style={{ cursor: "pointer" }}>
          Excel Analytics
        </Navbar.Brand>
        <Nav className="ms-auto">
          <Button variant="outline-light" className="me-2" onClick={onLoginClick}>
            Login
          </Button>
          <Button variant="warning" onClick={onSignUpClick}>
            Sign Up
          </Button>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Customnavbar;
